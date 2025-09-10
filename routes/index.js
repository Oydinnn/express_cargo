const express = require("express");
const router = express.Router();


const clientRouter = require('./client.routes')
const orderRouter = require('./order.routes')
const adminRouter = require('./admin.routes')
const authRouter = require('./auth.routes')
const operationRouter = require('./operation.routes')

const currency_typeRouter = require('./currency_type.routes')
const statusRouter = require('./status.routes')
const loginRouter = require('./auth.routes')

router.use('/client', clientRouter)
router.use('/order', orderRouter)
router.use('/admin', adminRouter)
router.use('/auth', authRouter)
router.use('/operation', operationRouter)

router.use('/login', loginRouter)
router.use('/currency_type', currency_typeRouter)
router.use('/status', statusRouter)


module.exports = router;