

const { 
  addOperation,
  GetAllOperation,
  GetOneOperation,
  UpdateOperation,
  DeleteOperation,
 } = require("../controllers/operation.controller");
const authGuard = require("../middleware/guards/auth.guard");

const router = require("express").Router();

router.post('/', addOperation)
router.get('/', authGuard, GetAllOperation)
router.get('/:id', GetOneOperation)
router.put('/:id', UpdateOperation)
router.delete('/:id', DeleteOperation)


module.exports = router;