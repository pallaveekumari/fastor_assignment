const { Router } = require("express");
const { EmployeeModel } = require("../Models/EmployeeModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const employeeController = Router();

// ● API for Employee login/register.

employeeController.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const employee = await EmployeeModel.find({ email });
  try {
    if (employee.length != 0) {
      res.status(400).json({ msg: "user already exist" });
    } else {
      bcrypt.genSalt(6, (err, salt) => {
        if (err) {
          res.status(400).json({ msg: "Something went wrong" });
        } else {
          bcrypt.hash(password, salt, async (err, hash) => {
            if (err) {
              res.status(400).json({ msg: "Something went wrong" });
            } else {
              const newEmployee = await new EmployeeModel({
                name,
                email,
                password: hash,
              });
              await newEmployee.save();
              res.status(200).json({ msg: "Signup Successfull" });
            }
          });
        }
      });
    }
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
});

employeeController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const employee = await EmployeeModel.find({ email });
    if (employee.length == 0) {
      res.status(400).json({ msg: "User doesnot exist please Signup" });
    } else {
      const matchPassword = await bcrypt.compare(
        password,
        employee[0].password
      );
      if (!matchPassword) {
        res.status(400).json({ msg: "Incorrect Password" });
      } else {
        let token = jwt.sign({ email }, process.env.SECRET);
        res.status(200).json({ msg: "login Successfull", token: token });
      }
    }
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
});

module.exports = {
  employeeController,
};
