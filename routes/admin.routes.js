const { 
  CreateAdmin,
  GetAllAdmin,
  GetOneAdmin,
  UpdateAdmin,
  DeleteAdmin,
 } = require("../controllers/admin.controller");

const router = require("express").Router();

router.post('/', CreateAdmin)
router.get('/', GetAllAdmin)
router.get('/:id', GetOneAdmin)
router.put('/:id', UpdateAdmin)
router.delete('/:id', DeleteAdmin)


module.exports = router;