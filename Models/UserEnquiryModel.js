const mongoose = require("mongoose");

const UserEnquirySchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course_interest: { type: String, required: true },
  counsellor_email: { type: String },
});

const UserEnquiryModel = mongoose.model("userEnquiry", UserEnquirySchema);

module.exports = {
  UserEnquiryModel,
};
