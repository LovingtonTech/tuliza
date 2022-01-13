const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Service = require("../models/service");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET Services",
  });
});

router.post("/", (req, res, next) => {
  const service = new Service({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    image: req.body.image,
  });
  //save the service item in mongodb
  service
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  res.status(200).json({
    message: "POST Services",
    postedService: service,
  });
  console.log(service);
});
module.exports = router;
