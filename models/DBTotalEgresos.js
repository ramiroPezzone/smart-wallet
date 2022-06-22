const mongoose = require("mongoose");

const { DateTime } = require("luxon");

let date = DateTime.now().setLocale().toFormat("DDDD, HH:mm:ss");

const totalEgreso = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  idCategory: {
    type: String,
    require: true,
  },
  nameCategory: {
    type: String,
    require: true,
  },
  observaciones: {
    type: String,
  },
  categoryPercentage: {
    type: Number,
    require: true,
  },
  values: {
    type: Number,
    require: true,
  },
  year: {
    type: String,
    default: new Date().getFullYear(),
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

module.exports = mongoose.model("totalEgreso", totalEgreso);
