const express = require("express");

const router = express.Router();

const {
  addExample,
  Examples,
  readExampleByID,
  deleteExample,
} = require("../controllers/example");

router.route("/create-example").post(addExample);
router.route("/examples").get(Examples);
router.route("/example/:id").get(readExampleByID);
router.route("/deleteExample/:id").delete(deleteExample);

module.exports = router;
