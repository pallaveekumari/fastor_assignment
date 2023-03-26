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

claimController.get("/claimleads", async (req, res) => {
  const  token  = req.headers.authorization.split(" ")[1]
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

claimController.post("/claimuser", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const { email } = req.body;
  const user = await UserEnquiryModel.find({ email });
  try {
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) {
        res.status(400).json({ msg: "Something went wrong" });
      } else {
        const users = await UserEnquiryModel.findOneAndUpdate(
          {
            email: user[0]?.email,
          },
          {
            counsellor_email: decoded.email,
          }
        );
        if (users) {
          res.status(200).json({ msg: "claimed successfully" });
        } else {
          res.status(400).json({ msg: "claimed failed" });
        }
      }
    });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong" });
  }
});

module.exports = {
  claimController,
};
