const { 
  CreateClient,
  GetAllClient,
  GetOneClient,
  UpdateClient,
  DeleteClient,
 } = require("../controllers/client.controller");

const router = require("express").Router();

router.post('/', CreateClient)
router.get('/', GetAllClient)
router.get('/', GetOneClient)
router.put('/', UpdateClient)
router.delete('/', DeleteClient)


module.exports = router;