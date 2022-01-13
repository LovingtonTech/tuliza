const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: String,
  lasname: String,
  phone: String,
  email: String,
  date: Date,
});

module.exports = mongoose.model("Appointment", appointmentSchema);
