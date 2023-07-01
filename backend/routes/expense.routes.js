const express = require("express")
const router = express.Router()
const {homePage} = require("../controller/expense.Controller")
// get home page
router.get("/",homePage)
// 



module.exports = router
