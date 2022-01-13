const express = require("express");
const mongoose = require("mongoose");
const Appointment = require("../models/appointment");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET appointments",
  });
});

router.post("/", (req, res, next) => {
  const appointment = new Appointment({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lasname: req.body.lastname,
    phone: req.body.phone,
    email: req.body.email,
    date: Date,
    bookingDate: Date(),
  });
  appointment
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(200).json({
    message: "POST appointments",
  });
});
module.exports = router;
