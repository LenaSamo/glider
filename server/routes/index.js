const Router = require('express')
const router = new Router()
const listRouter = require('./listRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/list', listRouter)

module.exports = router