const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Users, Lists} = require('../models/models')


const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id: id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'},
        )
}

class UserController{
    async registration(req, res, next){
        const {email, password, role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Некорректный email или password'))
        } 
        const candidate = await Users.findOne({where: {email}})
        if (candidate){
            return next(ApiError.badRequest('Пользователь с таких email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await Users.create({email, role, password: hashPassword})
        const token = generateJwt(user.id, email, user.role)
        return res.json({token})
    }
    async login(req, res, next){
        const {email, password} = req.body
        const user = await Users.findOne({where: {email}})
        if (!user){
            return next(ApiError.internal('С таким email пользователя нет'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    async check(req, res, next){
        return res.json({message: "авторизован"})

    }
}

module.exports = new UserController()