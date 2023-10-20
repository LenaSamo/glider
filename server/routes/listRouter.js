const Router = require('express')
const router = new Router()
const ListController = require('../controllers/listController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', authMiddleware, ListController.create)
router.get('/', authMiddleware, ListController.getAll)
router.get('/:id', authMiddleware, ListController.getOne)


module.exports = router