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
router.get('/:id', GetOneClient)
router.put('/:id', UpdateClient)
router.delete('/:id', DeleteClient)


module.exports = router;