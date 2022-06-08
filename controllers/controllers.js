const UserSettings = require("../models/userSettings");
const ingresos = require("../models/ingresos");
const Egresos = require("../models/egresos");

const controllers = {
  main: async (req, res) => {
    let user = req.user;
    let hasSettings = await UserSettings.findOne({ user: user._id });
    let view = hasSettings === null ? "main.ejs" : "panel.ejs";
    res.render(view, { user });
  },
  settings: async (req, res) => {
    let user = req.user;
    let settings = await UserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("settings.ejs", { user, settings });
  },
  settingsSave: async (req, res) => {
    let { catName, catPerc } = req.body;
    let user = req.user._id;
    await UserSettings.create({
      user,
      catName,
      catPerc,
    });
    res.redirect("back");
  },
  quitarCat: async (req, res) => {
    let id = req.params;
    await UserSettings.findByIdAndDelete(id.id);
    res.redirect("back");
  },
  updateCat: async (req, res) => {
    let id = req.params;
    let { catName, catPerc } = req.body;
    console.log(catName);
    console.log(catPerc);
    await UserSettings.findByIdAndUpdate(id.id, {
      catName,
      catPerc,
    });
    res.redirect("back");
  },
  nuevoIngreso: (req, res) => {
    res.render("formNvoIngreso.ejs");
  },
  guardarNvoIngreso: async (req, res) => {
    let user = req.user._id;
    let concepts = req.body;
    let nvoIngreso = {
      user,
      concept: concepts.concept,
      value: concepts.value,
      obs: concepts.obs,
    };
    await ingresos.create(nvoIngreso);
    res.redirect("/main");
  },
  nuevoEgreso: async (req, res) => {
    let id = req.params;
    let cats = await UserSettings.find({ user: id.user }).sort({
      catPerc: "desc",
    });
    res.render("formNvoEgreso.ejs", { cats });
  },
  guardarNvoEgreso: async (req, res) => {
    let user = req.user._id;
    let { cat, value, obs } = req.body;
    let nvoEgreso = {
      user,
      cat,
      value,
      obs,
    };
    await Egresos.create(nvoEgreso);
    res.redirect("/main");
  },
  verIngresosDelMes: async (req, res) => {
    let verIngresos = await ingresos.find({ user: req.user._id });
    res.render("ingresosDelMes", { ingresos: verIngresos });
  },
  verEgresosDelMes: async (req, res) => {
    let verEgresos = await Egresos.find({ user: req.user._id });
    res.render("egresosDelMes", { egresos: verEgresos });
  },
  verIngresosDelMesX: async (req, res) => {
    let month = req.params.month;
    let verIngresos = await ingresos.find({ user: req.user._id, month: month });
    res.render("ingresosDelMes", { ingresos: verIngresos });
  },
  verEgresosDelMesX: async (req, res) => {
    let month = req.params.month;
    let verEgresos = await Egresos.find({ user: req.user._id, month: month });
    res.render("egresosDelMes", { egresos: verEgresos });
  },
};

module.exports = controllers;
