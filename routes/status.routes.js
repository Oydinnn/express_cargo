const { 
  CreateStatus,
  GetAllStatus,
  GetOneStatus,
  UpdateStatus,
  DeleteStatus,
 } = require("../controllers/status.controller");

const router = require("express").Router();

router.post('/', CreateStatus)
router.get('/', GetAllStatus)
router.get('/:id', GetOneStatus)
router.put('/:id', UpdateStatus)
router.delete('/:id', DeleteStatus)


module.exports = router;