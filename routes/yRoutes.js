const express = require("express");
const router = express.Router();

const yControllers = require("../controllers/yControllers");


router
  .route("/")
  .get(yControllers.getAll);

/* router
  .route("/create")
  .post(yControllers.create) */


module.exports = router;