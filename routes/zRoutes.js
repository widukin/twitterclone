const express = require("express");
const router = express.Router();

const zControllers = require("../controllers/zControllers");


router
  .route("/")
  .get(zControllers.getAll);

/* router
  .route("/create")
  .post(zControllers.create) */


module.exports = router;