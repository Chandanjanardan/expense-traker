const express = require("express");
const router = express.Router();
const { homePage } = require("../controller/expense.controller");
// get home page
router.get("/", homePage);


module.exports = router;
