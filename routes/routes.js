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

router.post("/guardar-edicion-de-ingreso/:id", ensureAuth, go.guardarEdicionDeIngreso);

router.post("/guardar-edicion-de-egreso/:id", ensureAuth, go.guardarEdicionDeEgreso);

router.get("/ingresos-del-mes", ensureAuth, go.verIngresosDelMes);

router.get("/ingresos-del-mes/:month", ensureAuth, go.verIngresosDelMesX);

router.get("/egresos-del-mes", ensureAuth, go.verEgresosDelMes);

router.get("/egresos-del-mes/:month", ensureAuth, go.verEgresosDelMesX);

router.get("/re-settings", ensureAuth, go.reSettings);

router.get("/eliminar-ingreso/:id", ensureAuth, go.eliminarIngreso);

router.get("/eliminar-egreso/:id", ensureAuth, go.eliminarEgreso);

router.get("/order-ingresos-by-day/:option", ensureAuth, go.orderIngresosByDay);

router.get("/order-ingresos-by-concept/:option", ensureAuth, go.orderIngresosByConcept);

router.get("/order-ingresos-by-amount/:option", ensureAuth, go.orderIngresosByAmount);

router.get("/order-egresos-by-day/:option", ensureAuth, go.orderEgresosByDay);

router.get("/order-egresos-by-category/:option", ensureAuth, go.orderEgresosByCategory);

router.get("/order-egresos-by-amount/:option", ensureAuth, go.orderEgresosByAmount);


module.exports = router;
