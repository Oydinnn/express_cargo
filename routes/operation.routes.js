const { 
  addOperation,
  GetAllOperation,
  GetOneOperation,
  UpdateOperation,
  DeleteOperation,
 } = require("../controllers/operation.controller");

const router = require("express").Router();

router.post('/', addOperation)
router.get('/', GetAllOperation)
router.get('/:id', GetOneOperation)
router.put('/:id', UpdateOperation)
router.delete('/:id', DeleteOperation)


module.exports = router;