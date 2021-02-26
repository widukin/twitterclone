const express = require("express");
const router = express.Router();

const messagesControllers = require("../controllers/messagesControllers");


router
  .route("/")
  .get(messagesControllers.getAll)

router
  .route("/:id")
  .get(messagesControllers.getById);

/* router
  .route("/create")
  .post(yControllers.create) */


module.exports = router;