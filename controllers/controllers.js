const UserSettings = require("../models/userSettings");
const ingresos = require("../models/ingresos");
const Egresos = require("../models/egresos");

const controllers = {
  main: async (req, res) => {
    let user = req.user;
    let hasSettings = await UserSettings.findOne({ user: user._id });
    let view = hasSettings === null ? "main" : "panel";
    res.render(view, { user });
  },
  settings: async (req, res) => {
    let user = req.user;
    let settings = await UserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("settings", { user, settings });
  },
  settingsSave: async (req, res) => {
    let { catName, catPerc } = req.body;

    // Generador de id único para category
    const idCatPart1 = Date.now().toString(36);
    const idCatPart2 = Math.random().toString(36).substring(2);
    const idCategory = `${idCatPart1}${idCatPart2}`;

    catName = catName.trim();
    catName = catName[0].toUpperCase() + catName.slice(1);
    catPerc = catPerc.trim();
    catPerc = catPerc[0].toUpperCase() + catPerc.slice(1);
    let user = req.user._id;
    await UserSettings.create({
      user,
      catName,
      idCategory,
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
    await UserSettings.findByIdAndUpdate(id.id, {
      catName,
      catPerc,
    });
    res.redirect("back");
  },
  nuevoIngreso: (req, res) => {
    let user = req.user;
    res.render("formNvoIngreso", { user });
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
    let user = req.user;
    let id = req.params;
    let cats = await UserSettings.find({ user: id.user }).sort({
      catPerc: "desc",
    });
    res.render("formNvoEgreso", { user, cats });
  },
  guardarNvoEgreso: async (req, res) => {
    let user = req.user._id;
    let { cat, value, obs } = req.body;
    let idCategory = cat.slice(-19).trim();
    let lengthCatString = cat.length;
    let cutTo = lengthCatString - 19;
    cat = cat.slice(0, cutTo).trim();
    let nvoEgreso = {
      user,
      cat,
      idCategory,
      value,
      obs,
    };
    await Egresos.create(nvoEgreso);
    res.redirect("/main");
  },
  verIngresosDelMes: async (req, res) => {
    let user = req.user;
    let userId = req.user._id;
    let month = new Date().getMonth();
    let order;
    let verIngresos = await ingresos.find({ user: userId });
    res.render("ingresosDelMes", { ingresos: verIngresos, user, month, order });
  },
  verEgresosDelMes: async (req, res) => {
    let user = req.user;
    let egresosUser = req.user._id;
    let month = new Date().getMonth();
    let verEgresos = await Egresos.find({ user: egresosUser });
    let order;
    let cats = await UserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("egresosDelMes", {
      egresos: verEgresos,
      month,
      user,
      cats,
      order,
    });
  },
  verIngresosDelMesX: async (req, res) => {
    let user = req.user;
    let userId = req.user._id;
    let month = req.params.month;
    let order;
    let verIngresos = await ingresos.find({ user: userId, month: month });
    res.render("ingresosDelMes", { ingresos: verIngresos, user, month, order });
  },
  verEgresosDelMesX: async (req, res) => {
    let user = req.user;
    let userId = req.user._id;
    let month = req.params.month;
    let order;
    let verEgresos = await Egresos.find({ user: userId, month: month });
    let cats = await UserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("egresosDelMes", { egresos: verEgresos, user, month, cats, order });
  },
  reSettings: async (req, res) => {
    let user = req.user;
    let settings = await UserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("reSettings", { user, settings });
  },
  guardarEdicionDeIngreso: async (req, res) => {
    let id = req.params;
    let { concept, value, obs } = req.body;
    await ingresos.findByIdAndUpdate(id.id, {
      concept,
      value,
      obs,
    });
    res.redirect("back");
  },
  guardarEdicionDeEgreso: async (req, res) => {
    let id = req.params;
    let { cat, value, obs } = req.body;
    let idCategory = cat.slice(-19).trim();
    let lengthCatString = cat.length;
    let cutTo = lengthCatString - 19;
    cat = cat.slice(0, cutTo).trim();
    await Egresos.findByIdAndUpdate(id.id, {
      cat,
      idCategory,
      value,
      obs,
    });
    res.redirect("back");
  },
  eliminarIngreso: async (req, res) => {
    let id = req.params;
    await ingresos.findByIdAndDelete(id.id);
    res.redirect("back");
  },
  eliminarEgreso: async (req, res) => {
    let id = req.params;
    await Egresos.findByIdAndDelete(id.id);
    res.redirect("back");
  },
  orderEgresosByDay: async (req, res) => {
    let { option } = req.params;
    let user = req.user;
    let egresos = await Egresos.find({ user: user._id }).sort({ date: option });
    let month = new Date().getMonth();
    let order = `day${option}`;
    let cats = await UserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("egresosDelMes", { egresos, user, cats, month, order });
  },
  orderEgresosByCategory: async (req, res) => {
    let { option } = req.params;
    let user = req.user;
    let egresos = await Egresos.find({ user: user._id }).sort({ cat: option });
    let month = new Date().getMonth();
    let order = `category${option}`;
    let cats = await UserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("egresosDelMes", { egresos, user, cats, month, order });
  },
  orderEgresosByAmount: async (req, res) => {
    let { option } = req.params;
    let user = req.user;
    let month = new Date().getMonth();
    let order = `amount${option}`;
    let egresos = await Egresos.find({ user: user._id }).sort({
      value: option,
    });
    let cats = await UserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("egresosDelMes", { egresos, user, cats, month, order });
  },
  orderIngresosByDay: async (req, res) => {
    let { option } = req.params;
    let user = req.user;
    let ingresosInOrder = await ingresos
      .find({ user: user._id })
      .sort({ date: option });
    let month = new Date().getMonth();
    let order = `day${option}`;
    let cats = await UserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("ingresosDelMes", {
      ingresos: ingresosInOrder,
      user,
      cats,
      month,
      order,
    });
  },
  orderIngresosByConcept: async (req, res) => {
    let { option } = req.params;
    let user = req.user;
    let ingresosInOrder = await ingresos
      .find({ user: user._id })
      .sort({ cat: option });
    let month = new Date().getMonth();
    let order = `concept${option}`;
    let cats = await UserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("ingresosDelMes", {
      ingresos: ingresosInOrder,
      user,
      cats,
      month,
      order,
    });
  },
  orderIngresosByAmount: async (req, res) => {
    let { option } = req.params;
    let user = req.user;
    let month = new Date().getMonth();
    let order = `amount${option}`;
    let ingresosInOrder = await ingresos.find({ user: user._id }).sort({
      value: option,
    });
    let cats = await UserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("ingresosDelMes", {
      ingresos: ingresosInOrder,
      user,
      cats,
      month,
      order,
    });
  },
};

module.exports = controllers;
