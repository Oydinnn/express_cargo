const router = require('express').Router()
const clientRouter = require('./client.routes')
const statusRouter = require('./status.routes')
const adminRouter = require('./admin.routes')
const orderRouter = require('./order.routes')
const currency_typeRouter = require('./currency_type.routes')
const operationRouter = require('./operation.routes')


router.use('/client', clientRouter)
router.use('/status', statusRouter)
router.use('/admin', adminRouter)
router.use('/order', orderRouter)
router.use('/currency_type', currency_typeRouter)
router.use('/operation', operationRouter)


module.exports = router;