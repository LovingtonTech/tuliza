const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Appointment = require("../models/appointment");

router.get("/", (req, res, next) => {
  Appointment.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(200).json({
        message: err,
      });
    });
});

router.post("/", (req, res, next) => {
  const appointment = new Appointment({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    phone: req.body.phone,
    date: req.body.date,
    booking_date: new Date(),
  });
  appointment
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  // res.status(200).json({
  //   message: "POST appointments",
  // });
});
module.exports = router;
