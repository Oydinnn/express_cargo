const clientRouter = require('./client.routes')
const router = require('express').Router()

router.use('/client', clientRouter)

module.exports = router;