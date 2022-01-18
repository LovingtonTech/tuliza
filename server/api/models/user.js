const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password_hash: { type: String, required: true },
});
module.exports = mongoose.model("User", userSchema);
