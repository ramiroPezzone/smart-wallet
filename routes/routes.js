const express = require("express");
const router = express.Router();
const go = require("../controllers/controllers");
const { ensureGuest, ensureAuth } = require("../middleware/auth");

router.get("/main", ensureAuth, go.main);

router.get("/settings", ensureAuth, go.settings);

router.post("/settings/save", ensureAuth, go.settingsSave);

router.get("/settings/quitar-cat/:id", ensureAuth, go.quitarCat);

router.post("/settings/update-cat/:id", ensureAuth, go.updateCat);

router.get("/nuevo-ingreso", ensureAuth, go.nuevoIngreso);

router.post("/nuevo-ingreso/guardar", ensureAuth, go.guardarNvoIngreso);

router.get("/nuevo-egreso/:user", ensureAuth, go.nuevoEgreso);

router.post("/nuevo-egreso/guardar", ensureAuth, go.guardarNvoEgreso);

router.get("/ingresos-del-mes", ensureAuth, go.verIngresosDelMes);

router.get("/ingresos-del-mes/:month", ensureAuth, go.verIngresosDelMesX);

router.get("/egresos-del-mes", ensureAuth, go.verEgresosDelMes);

router.get("/egresos-del-mes/:month", ensureAuth, go.verEgresosDelMesX);

router.get("/re-settings", ensureAuth, go.reSettings);

module.exports = router;
