const {Lists} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const { NUMBER } = require('sequelize')

class ListController{

    async create(req, res){
        try{
            const {text} = req.body
            const token = req.headers.authorization.split(' ')[1] 
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            const list = await Lists.create({text: text, userId: decoded.id})
            return res.json(list)
        }catch(e){
            next(ApiError.badRequest(e.massage))
        }
        
    }
    async getAll(req, res, next){
        const token = req.headers.authorization.split(' ')[1] 
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        let lists = await Lists.findAll({where:{userId: decoded.id}})
        return res.json(lists)
    }
    async getOne(req, res, next){
        const {id} = req.params
        const token = req.headers.authorization.split(' ')[1] 
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        let list = await Lists.findOne({where:{id, userId: decoded.id}})
        if(!list)
        {
            return next(ApiError.internal('Нет доступа'))
        }
            
        return res.json(list)
    }
}

module.exports = new ListController()