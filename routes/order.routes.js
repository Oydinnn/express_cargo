const { 
  addOrder,
  GetAllOrder,
  GetOneOrder,
  UpdateOrder,
  DeleteOrder,
 } = require("../controllers/order.controller");

const router = require("express").Router();

router.post('/', addOrder)
router.get('/', GetAllOrder)
router.get('/:id', GetOneOrder)
router.put('/:id', UpdateOrder)
router.delete('/:id', DeleteOrder)


module.exports = router;