const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  booking_date: { type: Date, required: true },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
