const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Appointment = require("../models/appointment");

//Get all appointments
router.get("/", (req, res, next) => {
  Appointment.find()
    .select()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((er) => {
      res.status(500).json(err);
    });
});

//Create an appointment
router.post("/", (req, res, next) => {
  console.log(req);
  const appointment = new Appointment({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    phone: req.body.phone,
    service: req.body.service,
    date: req.body.date,
    booking_date: new Date(),
  });
  appointment
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
