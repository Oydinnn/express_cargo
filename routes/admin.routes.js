const { 
  createAdmin,
  getAllAdmin,
  getOneAdmin,
  updateAdmin,
  deleteAdmin,
 } = require("../controllers/admin.controller");
const authGuard = require("../middleware/guards/auth.guard");
const creatorGuard = require("../middleware/guards/creator.guard");
const selfGuard = require("../middleware/guards/self.guard");

const router = require("express").Router();

router.post('/', authGuard, creatorGuard, createAdmin)
router.get('/', authGuard, creatorGuard, getAllAdmin)
router.get('/:id', authGuard, selfGuard, getOneAdmin)
router.put('/:id', authGuard, selfGuard, updateAdmin)
router.delete('/:id', authGuard, selfGuard, deleteAdmin)


module.exports = router;