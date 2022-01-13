const mongoose = require("mongoose");
const serviceSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  image: String,
});

module.exports = mongoose.model("Service", serviceSchema);
