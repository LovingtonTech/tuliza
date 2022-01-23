const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

//Databases
const MONGO_ATLAS_DB =
  "mongodb+srv://tuliza:tuliza@lovington.9j9xo.mongodb.net/tulizadb?retryWrites=true&w=majority";
const MONGO_DEV_DB = "mongodb://tuliza:tuliza@localhost:27017/tulizadb";

mongoose.connect(MONGO_DEV_DB, { useNewUrlParser: true });

//Define API routes
const servicesRoute = require("./api/routes/services");
const hairstylesRoute = require("./api/routes/hairstyles");
const usersRoute = require("./api/routes/users");
const appointmentsRoute = require("./api/routes/appointments");

app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

//Handle CORS errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-otrol-Allow-Methods", "PUT POST PATCH DELETE GET");
    return res.status(200).json({});
  }
  next();
});

//use API routes
app.use("/services", servicesRoute);
app.use("/hairstyles", hairstylesRoute);
app.use("/users", usersRoute);
app.use("/appointments", appointmentsRoute);

//Handle errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: { message: error.message },
  });
});

//module.exports = app;
module.exports = { path: "api/", handler: app };
