const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/usersControllers");


router
  .route("/")
  .get(usersControllers.getAll);

router
  .route("/:id")
  .get(usersControllers.getById)


module.exports = router;