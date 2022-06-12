const mongoose = require("mongoose");

const { DateTime } = require("luxon");

let date = DateTime.now().setLocale().toFormat("DDDD, HH:mm:ss");

const Egreso = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  concept: {
    type: String,
    require: true,
  },
  cat: {
    type: String,
    require: true,
  },
  idCategory: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  obs: {
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

module.exports = mongoose.model("Egreso", Egreso);
