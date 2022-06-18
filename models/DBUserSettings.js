const mongoose = require("mongoose");

const { DateTime } = require("luxon");

let date = DateTime.now().setLocale().toFormat("DDDD, HH:mm:ss");

const UserSettings = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  catName: {
    type: String,
    require: true,
  },
  idCategory: {
    type: String,
    require: true,
  },
  catPerc: {
    type: Number,
    require: true,
  },
  createdDate: {
    type: String,
    default: date,
  },
});

module.exports = mongoose.model("UserSetting", UserSettings);
