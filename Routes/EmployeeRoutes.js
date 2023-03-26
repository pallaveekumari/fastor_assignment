const { Router } = require("express");
const { EmployeeModel } = require("../Models/EmployeeModel");
const bcrypt = require("bcrypt");
const employeeController = Router();

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

module.exports = {
  employeeController,
};
