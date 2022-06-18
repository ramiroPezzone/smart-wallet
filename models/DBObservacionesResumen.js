const mongoose = require("mongoose");

const { DateTime } = require("luxon");

let date = DateTime.now().setLocale().toFormat("DDDD, HH:mm:ss");

const observacionesResumen = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  observaciones: {
    type: String,
  },
  month: {
    type: String,
    default: new Date().getMonth(),
  },
  date: {
    type: String,
    default: new Date().getDate(),
  },
  createdDate: {
    type: String,
    default: date,
  },
});

module.exports = mongoose.model("observacionesResumen", observacionesResumen);
