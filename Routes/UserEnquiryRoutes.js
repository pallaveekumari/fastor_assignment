const { Router } = require("express");
const { UserEnquiryModel } = require("../Models/UserEnquiryModel");
const userController = Router();

userController.post("/enquiryform", async (req, res) => {
  const { name, email, course_interest } = req.body;
  try {
    const newEnquiry = await new UserEnquiryModel({
      name,
      email,
      course_interest,
      counsellor_email: null,
    });

    await newEnquiry.save();
    res.status(200).json({ msg: "Enquiry Submitted Successfully" });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", error: err });
  }
});





module.exports = {
  userController,
};
