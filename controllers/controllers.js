const DBuserSettings = require("../models/DBUserSettings");
const DBObseracionesResumen = require("../models/DBObservacionesResumen");
const DBIngresos = require("../models/DBIngresos");
const DBEgresos = require("../models/DBEgresos");
const DBTotalEgresos = require("../models/DBTotalEgresos");

const controllers = {
  main: async (req, res) => {
    let user = req.user;
    let hasSettings = await DBuserSettings.findOne({ user: user._id });
    let view = hasSettings === null ? "main" : "panel";
    res.render(view, { user });
  },
  settings: async (req, res) => {
    let user = req.user;
    let settings = await DBuserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("settings", { user, settings });
  },
  settingsSave: async (req, res) => {
    let { catName, catPerc } = req.body;
    let allMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    // Generador de id único para category
    const idCatPart1 = Date.now().toString(36);
    const idCatPart2 = Math.random().toString(36).substring(2);
    const idCategory = `${idCatPart1}${idCatPart2}`;
    catName = catName.trim();
    catName = catName[0].toUpperCase() + catName.slice(1);
    catPerc = catPerc.trim();
    catPerc = catPerc[0].toUpperCase() + catPerc.slice(1);
    let user = req.user._id;
    await DBuserSettings.create({
      user,
      idCategory,
      catName,
      catPerc,
    });

    allMonths.forEach((month) => {
      let nvoTotalesEgreso = {
        user,
        idCategory,
        observaciones: "",
        nameCategory: catName,
        categoryPercentage: catPerc,
        values: 0,
        month,
      };
      DBTotalEgresos.create(nvoTotalesEgreso);
    });

    res.redirect("back");
  },
  quitarCat: async (req, res) => {
    let { id, idCategory } = req.params;
    await DBuserSettings.findByIdAndDelete(id);
    await DBTotalEgresos.findOneAndDelete({ idCategory });
    res.redirect("back");
  },
  updateCat: async (req, res) => {
    let id = req.params;
    let user = req.user;
    let { catName, catPerc, idCategory } = req.body;
    let nvoTotalesEgreso = {
      user,
      idCategory,
      observaciones: "",
      nameCategory: catName,
      categoryPercentage: catPerc,
      values: 0,
    };

    await DBuserSettings.findByIdAndUpdate(id.id, {
      catName,
      catPerc,
    });
    const findResumenTotal = await DBTotalEgresos.findOne({
      idCategory,
      month: new Date().getMonth(),
    });
    if (findResumenTotal === null) {
      await DBTotalEgresos.create({ nvoTotalesEgreso });
    } else {
      await DBTotalEgresos.findOneAndUpdate(
        { idCategory },
        { nameCategory: catName, categoryPercentage: catPerc }
      );
    }
    res.redirect("back");
  },
  nuevoIngreso: (req, res) => {
    let user = req.user;
    res.render("formNvoIngreso", { user });
  },
  guardarNvoIngreso: async (req, res) => {
    let user = req.user._id;
    let concepts = req.body;
    let obs = concepts.obs;
    let value = concepts.value;
    value = value.trim();
    if (obs !== "") {
      obs = obs.trim();
      obs = obs[0].toUpperCase() + obs.slice(1);
    }
    let nvoIngreso = {
      user,
      concept: concepts.concept,
      value,
      obs,
    };
    await DBIngresos.create(nvoIngreso);
    res.redirect("/main");
  },
  nuevoEgreso: async (req, res) => {
    let user = req.user;
    let id = req.params;
    let cats = await DBuserSettings.find({ user: id.user }).sort({
      catPerc: "desc",
    });
    res.render("formNvoEgreso", { user, cats });
  },
  guardarNvoEgreso: async (req, res) => {
    let user = req.user._id;
    let { cat, value, obs, categoryPercentage } = req.body;
    if (obs !== "") {
      obs = obs.trim();
      obs = obs[0].toUpperCase() + obs.slice(1);
    }
    let idCategory = cat.slice(-19).trim();
    let lengthCatString = cat.length;
    let cutTo = lengthCatString - 19;
    cat = cat.slice(0, cutTo).trim();

    let values = 0;
    value = Number(value);

    let nvoEgreso = {
      user,
      cat,
      idCategory,
      value,
      obs,
    };

    let month = new Date().getMonth();
    let queryTotalEgresos = await DBTotalEgresos.find({
      idCategory: idCategory,
      month: month,
    });
    if (queryTotalEgresos.length === 0) {
      values = value;
    } else {
      let valuesEnDB = queryTotalEgresos[0].values;
      values = valuesEnDB + value;
    }
    let nvosTotalesEgreso = {
      user,
      idCategory,
      nameCategory: cat,
      categoryPercentage,
      values,
    };
    await DBEgresos.create(nvoEgreso);

    queryTotalEgresos.length === 0
      ? await DBTotalEgresos.create(nvosTotalesEgreso)
      : await DBTotalEgresos.findOneAndUpdate(
          { idCategory: idCategory },
          nvosTotalesEgreso
        );

    res.redirect("/main");
  },
  verIngresosDelMes: async (req, res) => {
    let user = req.user;
    let userId = req.user._id;
    let month = new Date().getMonth();
    let order;
    let ingresos = await DBIngresos.find({ user: userId });
    res.render("ingresosDelMes", {
      ingresos,
      user,
      month,
      order,
    });
  },
  verEgresosDelMes: async (req, res) => {
    let user = req.user;
    let egresosUser = req.user._id;
    let month = new Date().getMonth();
    let egresos = await DBEgresos.find({ user: egresosUser });
    let order;
    let cats = await DBuserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("egresosDelMes", {
      egresos,
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
    let ingresos = await DBIngresos.find({ user: userId, month: month });
    res.render("ingresosDelMes", {
      ingresos,
      user,
      month,
      order,
    });
  },
  verEgresosDelMesX: async (req, res) => {
    let user = req.user;
    let userId = req.user._id;
    let month = req.params.month;
    let order;
    let egresos = await DBEgresos.find({ user: userId, month: month });
    let cats = await DBuserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("egresosDelMes", {
      egresos,
      user,
      month,
      cats,
      order,
    });
  },
  reSettings: async (req, res) => {
    let user = req.user;
    let settings = await DBuserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("reSettings", { user, settings });
  },
  guardarEdicionDeIngreso: async (req, res) => {
    let id = req.params;
    let { concept, value, obs } = req.body;
    value = value.trim();
    concept = concept.trim();
    concept = concept[0].toUpperCase() + concept.slice(1);
    if (obs !== "") {
      obs = obs.trim();
      obs = obs[0].toUpperCase() + obs.slice(1);
    }
    await DBIngresos.findByIdAndUpdate(id.id, {
      concept,
      value,
      obs,
    });
    res.redirect("back");
  },
  guardarEdicionDeEgreso: async (req, res) => {
    let id = req.params;
    let { cat, value, obs } = req.body;
    value = value.trim();
    if (obs !== "") {
      obs = obs.trim();
      obs = obs[0].toUpperCase() + obs.slice(1);
    }
    let idCategory = cat.slice(-19).trim();
    let lengthCatString = cat.length;
    let cutTo = lengthCatString - 19;
    cat = cat.slice(0, cutTo).trim();
    await DBEgresos.findByIdAndUpdate(id.id, {
      cat,
      idCategory,
      value,
      obs,
    });
    res.redirect("back");
  },
  eliminarIngreso: async (req, res) => {
    let id = req.params;
    await DBIngresos.findByIdAndDelete(id.id);
    res.redirect("back");
  },
  eliminarEgreso: async (req, res) => {
    let id = req.params;
    await DBEgresos.findByIdAndDelete(id.id);
    res.redirect("back");
  },
  orderEgresosByDay: async (req, res) => {
    let { option } = req.params;
    let user = req.user;
    let egresos = await DBEgresos.find({ user: user._id }).sort({
      date: option,
    });
    let month = new Date().getMonth();
    let order = `day${option}`;
    let cats = await DBuserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("egresosDelMes", { egresos, user, cats, month, order });
  },
  orderEgresosByCategory: async (req, res) => {
    let { option } = req.params;
    let user = req.user;
    let egresos = await DBEgresos.find({ user: user._id }).sort({
      cat: option,
    });
    let month = new Date().getMonth();
    let order = `category${option}`;
    let cats = await DBuserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("egresosDelMes", { egresos, user, cats, month, order });
  },
  orderEgresosByAmount: async (req, res) => {
    let { option } = req.params;
    let user = req.user;
    let month = new Date().getMonth();
    let order = `amount${option}`;
    let egresos = await DBEgresos.find({ user: user._id }).sort({
      value: option,
    });
    let cats = await DBuserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("egresosDelMes", { egresos, user, cats, month, order });
  },
  orderIngresosByDay: async (req, res) => {
    let { option } = req.params;
    let user = req.user;
    let ingresosInOrder = await DBIngresos.find({ user: user._id }).sort({
      date: option,
    });
    let month = new Date().getMonth();
    let order = `day${option}`;
    let cats = await DBuserSettings.find({ user: user._id }).sort({
      catPerc: "desc",
    });
    res.render("ingresosDelMes", {
      ingresos: ingresosInOrder,
      user: user._id,
      cats,
      month,
      order,
    });
  },
  orderIngresosByConcept: async (req, res) => {
    let { option } = req.params;
    let user = req.user;
    let ingresosInOrder = await DBIngresos.find({ user: user._id }).sort({
      cat: option,
    });
    let month = new Date().getMonth();
    let order = `concept${option}`;
    let cats = await DBuserSettings.find({ user: user._id }).sort({
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
    let ingresosInOrder = await DBIngresos.find({ user: user._id }).sort({
      value: option,
    });
    let cats = await DBuserSettings.find({ user: user._id }).sort({
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
  resumen: async (req, res) => {
    const user = req.user;
    const month = req.params.month;
    const infoIngresos = await DBIngresos.find({ user: user._id, month });
    const totalEgresos = await DBTotalEgresos.find({
      user: user._id,
      month: month,
    }).sort({
      categoryPercentage: -1,
    });
    const observacionesResumen = await DBObseracionesResumen.findOne({
      user: user._id,
      month: month,
    });
    let arrayIngresos = [];
    infoIngresos.forEach((ingreso) => {
      arrayIngresos = [...arrayIngresos, ingreso.value];
    });
    let totalIngresos = arrayIngresos.reduce((prev, curr) => prev + curr, 0);
    let todosLosEgresosDelMes = [];
    totalEgresos.forEach((resumen) => {
      todosLosEgresosDelMes = [...todosLosEgresosDelMes, resumen.values];
    });
    const egresoTotalDelMes = todosLosEgresosDelMes.reduce(
      (prev, curr) => prev + curr,
      0
    );
    res.render("resumen", {
      user,
      totalIngresos,
      totalEgresos,
      egresoTotalDelMes,
      observacionesResumen,
      month,
    });
  },
  guardarObservacionResumen: async (req, res) => {
    const user = req.user;
    const { observaciones, month } = req.body;
    await DBObseracionesResumen.find({
      user: user._id,
    });
    const nuevaObservacion = {
      user: user._id,
      observaciones,
      month,
    };
    await DBObseracionesResumen.create(nuevaObservacion);
    res.redirect("back");
  },
  editarObservacionResumen: async (req, res) => {
    let id = req.params.id;
    let { observaciones } = req.body;
    await DBObseracionesResumen.findByIdAndUpdate(id, { observaciones });
    res.redirect("back");
  },
};

module.exports = controllers;
