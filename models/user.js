const mongoose = require("mongoose");

const { DateTime } = require("luxon");

let date = DateTime.now().setLocale().toFormat('DDDD, HH:mm:ss')

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    require: true,
  },
  displayName: {
    type: String,
    require: true,
  },
  nickName: {
    type: String,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  createdDate: {
    type: String,
    default: date,
  },
});

module.exports = mongoose.model("User", UserSchema);
