const { Router } = require("express");
const { UserEnquiryModel } = require("../Models/UserEnquiryModel");
const jwt = require("jsonwebtoken");
const claimController = Router();

claimController.get("/unclaimleads", async (req, res) => {
  try {
    const users = await UserEnquiryModel.find({ counsellor_email: null });
    res.status(200).json({ users: users });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
});

claimController.post("/claimleads", async (req, res) => {
  const { token } = req.body;
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) {
        res.status(400).json({ msg: "Something went wrong" });
      } else {
        const users = await UserEnquiryModel.find({
          counsellor_email: decoded.email,
        });
        res.status(200).json({ users: users });
      }
    });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
});



module.exports = {
  claimController,
};
