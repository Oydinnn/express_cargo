const { 
  CreateCurrency_type,
  GetAllCurrency_type,
  GetOneCurrency_type,
  UpdateCurrency_type,
  DeleteCurrency_type,
 } = require("../controllers/currency_type.controller");

const router = require("express").Router();

router.post('/', CreateCurrency_type)
router.get('/', GetAllCurrency_type)
router.get('/:id', GetOneCurrency_type)
router.put('/:id', UpdateCurrency_type)
router.delete('/:id', DeleteCurrency_type)


module.exports = router;