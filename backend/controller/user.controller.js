const User = require("../model/user.model");
const mongoose = require("mongoose");

const addUser = async(req,res) => {
    try {
        res.status(201).json({ message: "user added" });
      } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Server error" });
      }
}

const viewUser = async(req,res) => {
    try {
        res.status(201).json({ message: "data" });
      } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Server error" });
      }
}

const updateUser = async(req,res) => {
    try {
        res.status(201).json({ message: "user updated successfully" });
      } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Server error" });
      }
}

const deleteUser = async(req,res) => {
    try {
        res.status(201).json({ message: "user deleted successfully" });
      } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Server error" });
      }
}


module.exports= {addUser, viewUser, updateUser, deleteUser}