const { 
  addOrder,
  GetAllOrder,
  GetOneOrder,
  UpdateOrder,
  DeleteOrder,
 } = require("../controllers/order.controller");
const authGuard = require("../middleware/guards/auth.guard");
const roleGuard = require("../middleware/guards/role.guard");

const router = require("express").Router();

router.post('/',authGuard, roleGuard("Admin", "Creator", "User"), addOrder)
router.get('/', roleGuard("Creator", "User"), GetAllOrder)
router.get('/:id', GetOneOrder)
router.put('/:id', UpdateOrder)
router.delete('/:id', DeleteOrder)


module.exports = router;