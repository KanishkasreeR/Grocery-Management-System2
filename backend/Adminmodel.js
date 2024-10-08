const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  storeName: {
    type: String,
    required: [true, "Store name is required."],
  },
  storeAddress: {
    type: String,
    required: [true, "Store address is required."],
  },
  contactNumber: {
    type: String,
    required: [true, "Contact number is required."],
    unique: true, 
  },
  storeHours: {
    type: String,
    required: [true, "Store hours are required."],
  },
  storeImage: {
    type: String,
    required: [true, "Store image is required."],
  },resetPasswordToken: {
    type: String,
    default: null
  },
  resetPasswordExpires: {
    type: Date,
    default: null
  }
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;


