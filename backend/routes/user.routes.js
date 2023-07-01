const express = require("express");
const router = express.Router();
const { addUser, viewUser, updateUser, deleteUser } = require("../controller/user.controller");


//add User
router.get("/addUser", addUser);
//view User
router.get("/viewUser", viewUser);
//update User
router.get("/updateUser", updateUser);
//delete User
router.get("/deleteUser", deleteUser);


module.exports = router;