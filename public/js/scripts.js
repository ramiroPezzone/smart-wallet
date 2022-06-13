const d = document;
let nombreActual;
let porcentajeActual;
let allNames = [];
let conceptInputEditIngreso;
let valueInputEditIngreso;
let formEditIngreso;
let conceptTitleEdition;

let valueInputEditEgreso;
let editValueEgreso;
let formEditEgreso;
let obsInputEgreso;
let categoryEditEgreso;

// Verificación del porcentaje para inhabilitar los inputs y el btn Add
if (d.querySelector("#total-asignado")) {
  let totalAsignado = d.querySelector("#total-asignado");
  totalAsignado = Number(totalAsignado.innerHTML);
  let inputName = d.querySelector(".nameInputAddCategory");
  let inputPerc = d.querySelector(".percInputAddCategory");
  let btnAddCategory = d.querySelector(".cssbuttons-io-button-2");

  if (totalAsignado === 100 || totalAsignado > 100) {
    inputName.setAttribute("disabled", "");
    inputPerc.setAttribute("disabled", "");
    btnAddCategory.setAttribute("disabled", "");
  }

  let btnAvanzar = d.querySelector(".btn-avanzar");
  if (totalAsignado !== 100) {
    btnAvanzar.classList.add("btn-avanzar-disabled");
    btnAvanzar.classList.remove("btn-avanzar");
  }
}

// Month selecter current month
if (
  d.querySelector(".ingresosMonthSelector") ||
  d.querySelector(".egresosMonthSelector")
) {
  let currentMonth = new Date().getMonth();
  let ene = d.querySelector(".ene");
  let feb = d.querySelector(".feb");
  let mar = d.querySelector(".mar");
  let abr = d.querySelector(".abr");
  let may = d.querySelector(".may");
  let jun = d.querySelector(".jun");
  let jul = d.querySelector(".jul");
  let ago = d.querySelector(".ago");
  let sep = d.querySelector(".sep");
  let oct = d.querySelector(".oct");
  let nov = d.querySelector(".nov");
  let dic = d.querySelector(".dic");

  switch (currentMonth) {
    case 0:
      ene.addAttribute("selected", "");
      ene.classList.add("selected");
      ene.classList.add("current");
      break;
    case 1:
      feb.setAttribute("selected", "");
      feb.classList.add("selected");
      feb.classList.add("current");
      break;
    case 2:
      mar.setAttribute("selected", "");
      mar.classList.add("selected");
      mar.classList.add("current");
      break;
    case 3:
      abr.setAttribute("selected", "");
      abr.classList.add("selected");
      abr.classList.add("current");
      break;
    case 4:
      may.setAttribute("selected", "");
      may.classList.add("selected");
      may.classList.add("current");
      break;
    case 5:
      jun.setAttribute("selected", "");
      jun.classList.add("selected");
      jun.classList.add("current");
      break;
    case 6:
      jul.setAttribute("selected", "");
      jul.classList.add("selected");
      jul.classList.add("current");
      break;
    case 7:
      ago.setAttribute("selected", "");
      ago.classList.add("selected");
      ago.classList.add("current");
      break;
    case 8:
      sep.setAttribute("selected", "");
      sep.classList.add("selected");
      sep.classList.add("current");
      break;
    case 9:
      oct.setAttribute("selected", "");
      oct.classList.add("selected");
      oct.classList.add("current");
      break;
    case 10:
      nov.setAttribute("selected", "");
      nov.classList.add("selected");
      nov.classList.add("current");
      break;
    case 11:
      dic.setAttribute("selected", "");
      dic.classList.add("selected");
      dic.classList.add("current");
      break;
  }
}

// Month selecter selected month
if (d.querySelector("#month-hidden")) {
  let monthSelected = d.querySelector("#month-hidden");
  monthSelected = Number(monthSelected.value);
  let months = d.querySelectorAll(".month");

  months.forEach((month) => {
    month.removeAttribute("selected");
    month.classList.remove("selected");
  });

  let ene = d.querySelector(".ene");
  let feb = d.querySelector(".feb");
  let mar = d.querySelector(".mar");
  let abr = d.querySelector(".abr");
  let may = d.querySelector(".may");
  let jun = d.querySelector(".jun");
  let jul = d.querySelector(".jul");
  let ago = d.querySelector(".ago");
  let sep = d.querySelector(".sep");
  let oct = d.querySelector(".oct");
  let nov = d.querySelector(".nov");
  let dic = d.querySelector(".dic");

  switch (monthSelected) {
    case 0:
      ene.setAttribute("selected", "");
      ene.classList.add("selected");
      break;
    case 1:
      feb.setAttribute("selected", "");
      feb.classList.add("selected");
      break;
    case 2:
      mar.setAttribute("selected", "");
      mar.classList.add("selected");
      break;
    case 3:
      abr.setAttribute("selected", "");
      abr.classList.add("selected");
      break;
    case 4:
      may.setAttribute("selected", "");
      may.classList.add("selected");
      break;
    case 5:
      jun.setAttribute("selected", "");
      jun.classList.add("selected");
      break;
    case 6:
      jul.setAttribute("selected", "");
      jul.classList.add("selected");
      break;
    case 7:
      ago.setAttribute("selected", "");
      ago.classList.add("selected");
      break;
    case 8:
      sep.setAttribute("selected", "");
      sep.classList.add("selected");
      break;
    case 9:
      oct.setAttribute("selected", "");
      oct.classList.add("selected");
      break;
    case 10:
      nov.setAttribute("selected", "");
      nov.classList.add("selected");
      break;
    case 11:
      dic.setAttribute("selected", "");
      dic.classList.add("selected");
      break;
  }
}

// Inhabilitación del navbar si modifica presupuesto en ressetings y es menor al 100%
if (d.querySelector("#isResseting")) {
  const customNavLink = d.querySelectorAll(".custom-nav-link");
  const logoNavbar = d.querySelector(".logo-navbar");
  let totalAsignado = d.querySelector(".total-asignado");
  if (totalAsignado !== null) {
    totalAsignado = Number(totalAsignado.innerText);
  }
  if (totalAsignado !== 100) {
    customNavLink.forEach((link) => {
      link.removeAttribute("href");
      link.removeAttribute("data-bs-toggle");
      link.classList.add("link-disabled");
      link.setAttribute("style", "color: var(--gray-2) !important");
    });
    logoNavbar.setAttribute("style", "filter: grayscale(1)");
  }
}

// btn Avanzar styler & inhabilitación de inputs
if (d.querySelector(".btn-avanzar")) {
  const btnAvanzar = d.querySelector(".btn-avanzar");
  const addBtn = d.querySelector(".add-btn");
  const nameInputAddCategory = d.querySelector(".nameInputAddCategory");
  const percInputAddCategory = d.querySelector(".percInputAddCategory");
  let totalAsignado = d.querySelector(".total-asignado");

  if (totalAsignado !== null) {
    totalAsignado = Number(totalAsignado.innerText);
  }

  if (totalAsignado === null || totalAsignado !== 100) {
    btnAvanzar.classList.remove("btn-avanzar");
    btnAvanzar.classList.add("btn-avanzar-disabled");
    // btnAvanzar.setAttribute("disabled", "");
  }
  if (totalAsignado === 100) {
    addBtn.classList.remove(".btn-avanzar");
    addBtn.classList.add(".btn-avanzar-disabled");
    addBtn.setAttribute("disabled", "");
    nameInputAddCategory.setAttribute("disabled", "");
    percInputAddCategory.setAttribute("disabled", "");
  }
}

// Automatización del colspan de tablas de ver ingresos y egresos e inhabilitación del selector de orden si no hay registros
if (d.querySelector(".noRegisteredMovements")) {
  const noRegisteredMovements = d.querySelector(".noRegisteredMovements");
  const thTags = d.querySelectorAll("th");
  const orderSelector = d.querySelector(".orderSelector");
  const valueOrderHidden = d.querySelector(".value-order-hidden");
  const pOrderBy = d.querySelector(".p-order-by");

  if (valueOrderHidden === null) {
    orderSelector.setAttribute("disabled", "");
  }

  noRegisteredMovements.setAttribute("colspan", `${thTags.length}`);
  pOrderBy.style.color = "var(--gray)";
}

// Edit modal handler function
if (d.querySelector(".total-asignado")) {
  porcentajeActual = Number(d.querySelector(".total-asignado").innerHTML);
}
const editar = (id, nameCat, percCat) => {
  let nameInput = d.querySelector(".nameInputAddCategory");
  let percInput = d.querySelector(".percInputAddCategory");
  let errorMsgNameRepetido = d.querySelector(".errorMsgNameRepetido");
  let errorMsgInputName = d.querySelector(".errorMsgInputName");
  let errorMsgInputPerc = d.querySelector(".errorMsgInputPerc");

  nameInput.classList.contains("is-invalid") &&
    nameInput.classList.remove("is-invalid");
  percInput.classList.contains("is-invalid") &&
    percInput.classList.remove("is-invalid");
  errorMsgNameRepetido.classList.contains("errorMsgNameRepetido") &&
    errorMsgNameRepetido.classList.add("hidden");
  errorMsgInputName.classList.contains("errorMsgInputName") &&
    errorMsgInputName.classList.add("hidden");
  errorMsgInputPerc.classList.contains("errorMsgInputPerc") &&
    errorMsgInputPerc.classList.add("hidden");

  porcentajeActual = porcentajeActual - Number(percCat);
  nombreActual = nameCat;

  let element = `
    <div class="childToRemove">
    <div class="modal-header">
    <h5 class="modal-title">Editando "${nameCat}"</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="quitarElementoHTML()"></button>
    </div>
    <div class="separador-modal">
    </div>
    <form action="/settings/update-cat/${id}" method="POST" id="form-edit-cat">
    <div class="container-form-add-cat">
    <div class="form-floating mb-3 ">
    <input type="text" name="catName" class="form-control nameInputEditCategory" id="floatingInput" value="${nameCat}" placeholder="Nombre de la categoría">
    <label for="floatingInput">Nombre de la categoría</label>
    <div class="hidden errorMsgNameRepetidoEdit">Los nombres de las categorías no deben repetirse</div>
    <div class="hidden errorMsgEditName">El nombre no puede quedar vacío</div>
    </div>
    <div class="form-floating">
    <input type="number" name="catPerc" class="form-control percInputEditCategory" id="floatingNumber" placeholder="Porcentaje" min="0" value="${percCat}">
    <label for="floatingNumber">Porcentaje</label>
    <div class="hidden errorMsgEditPerc" style="margin-top: 10px;">El porcentaje asignado no puede quedar vacío</div>
    <div class="hidden errorMsgPresupuestoSuperado" style="margin-top: 10px;">El total de porcentaje no debe superar el 100%</div>
    </div>
    </div>
    <div class="separador-modal">
    </div>
    <div class="modal-footer">
    <button type="button" class="btn-cancelar-cambios-cat" data-bs-dismiss="modal" onclick="quitarElementoHTML()">
    <span class="span-btn-cancelar-cambios">Cancelar</span>
    </button>
    <button type="submit" class="btn-cancelar-cambios-cat">
    <span>Guardar cambios</span>
    </button>
    </div>
    </div>
   `;

  let modal = d.querySelector(".add-to-modal");
  modal.insertAdjacentHTML("afterbegin", element);
};

// Remove edit modal con tecla esc
d.addEventListener("keyup", (e) => {
  if (d.querySelector(".childToRemove")) {
    const childToRemove = d.querySelector(".childToRemove");
    const addToModal = d.querySelector(".add-to-modal");
    if (e.code === "Escape") {
      addToModal.removeChild(childToRemove);
    }
  }
});

// Remove edit modal handler function
const quitarElementoHTML = () => {
  let modal = d.querySelector(".add-to-modal");
  let childToRemove = d.querySelector(".childToRemove");
  modal.removeChild(childToRemove);
};

// Add category form blur handler
if (d.querySelector("#form-add-cat")) {
  var nameInput = d.getElementsByClassName("nameInputAddCategory");
  var percInput = d.getElementsByClassName("percInputAddCategory");
  var errorMsgInputName = d.querySelector(".errorMsgInputName");
  var errorMsgInputPerc = d.querySelector(".errorMsgInputPerc");

  nameInput[0].addEventListener("blur", (e) => {
    if (e.target.value === "") {
      nameInput[0].classList.add("is-invalid");
      errorMsgInputName.classList.remove("hidden");
      return;
    }
    if (e.target.value !== "") {
      e.target.classList.contains("is-invalid") &&
        e.target.classList.remove("is-invalid");
      errorMsgInputName.classList.add("hidden");
      e.target.classList.add("is-valid");
    }
  });
  percInput[0].addEventListener("blur", (e) => {
    if (e.target.value === "") {
      e.target.classList.add("is-invalid");
      errorMsgInputPerc.classList.remove("hidden");
      return;
    }
    if (e.target.value !== "") {
      e.target.classList.contains("is-invalid") &&
        e.target.classList.remove("is-invalid");
      errorMsgInputPerc.classList.add("hidden");
      e.target.classList.add("is-valid");
    }
  });
}

// Add moves form blur handler
if (d.querySelector(".container-form-new-move")) {
  let errorMsgInputConcept = d.querySelector(".errorMsgInputConcept");
  let errorMsgInputMount = d.querySelector(".errorMsgInputMount");
  let nameInputNewMove = d.querySelector(".nameInputNewMove");
  let mountInputNewMove = d.querySelector(".mountInputNewMove");
  let egresosSelector = d.querySelector(".egresosSelector");
  let errorMsgCatSelect = d.querySelector(".errorMsgCatSelect");

  nameInputNewMove.addEventListener("blur", () => {
    if (nameInputNewMove.value === "") {
      nameInputNewMove.classList.add("is-invalid");
      nameInputNewMove.classList.remove("is-valid");
      errorMsgInputConcept.classList.add("errorMsgIngresoEgreso");
      errorMsgInputConcept.classList.remove("hidden");
      return;
    }
    if (nameInputNewMove.value !== "") {
      nameInputNewMove.classList.remove("is-invalid");
      nameInputNewMove.classList.add("is-valid");
      errorMsgInputConcept.classList.remove("errorMsgIngresoEgreso");
      errorMsgInputConcept.classList.add("hidden");
    }
  });

  mountInputNewMove.addEventListener("blur", () => {
    if (mountInputNewMove.value === "") {
      mountInputNewMove.classList.add("is-invalid");
      mountInputNewMove.classList.remove("is-valid");
      errorMsgInputMount.classList.add("errorMsgIngresoEgreso");
      errorMsgInputMount.classList.remove("hidden");
      return;
    }
    if (mountInputNewMove.value !== "") {
      mountInputNewMove.classList.remove("is-invalid");
      mountInputNewMove.classList.add("is-valid");
      errorMsgInputMount.classList.remove("errorMsgIngresoEgreso");
      errorMsgInputMount.classList.add("hidden");
    }
  });

  // Select validations
  egresosSelector.addEventListener("change", () => {
    if (egresosSelector.value === "choiceOne") {
      egresosSelector.classList.add("is-invalid");
      egresosSelector.classList.remove("is-valid");
      errorMsgCatSelect.classList.add("errorMsgIngresoEgreso");
      errorMsgCatSelect.classList.remove("hidden");
      return;
    }
    if (egresosSelector.value !== "") {
      egresosSelector.classList.remove("is-invalid");
      egresosSelector.classList.add("is-valid");
      errorMsgCatSelect.classList.remove("errorMsgIngresoEgreso");
      errorMsgCatSelect.classList.add("hidden");
    }
  });
  egresosSelector.addEventListener("blur", () => {
    if (egresosSelector.value === "choiceOne") {
      egresosSelector.classList.add("is-invalid");
      egresosSelector.classList.remove("is-valid");
      errorMsgCatSelect.classList.add("errorMsgIngresoEgreso");
      errorMsgCatSelect.classList.remove("hidden");
      return;
    }
    if (egresosSelector.value !== "") {
      egresosSelector.classList.remove("is-invalid");
      egresosSelector.classList.add("is-valid");
      errorMsgCatSelect.classList.remove("errorMsgIngresoEgreso");
      errorMsgCatSelect.classList.add("hidden");
    }
  });
}

// Setter de la opción correcta en el selector de orden
if (d.querySelector("#order-egresos-hidden")) {
  let optionCategoryDesc = d.querySelector(".categoryName-desc");
  let optionCategoryAsc = d.querySelector(".categoryName-asc");
  let orderHidden = d.querySelector("#order-egresos-hidden");
  let optionAmountDesc = d.querySelector(".amount-desc");
  let optionAmountAsc = d.querySelector(".amount-asc");
  let optionDayDesc = d.querySelector(".day-desc");
  let optionDayAsc = d.querySelector(".day-asc");
  valueOrderHidden = orderHidden.value;

  if (valueOrderHidden === "day-1") {
    optionDayAsc.setAttribute("selected", "");
  }
  if (valueOrderHidden === "day1") {
    optionDayDesc.setAttribute("selected", "");
  }
  if (valueOrderHidden === "category-1") {
    optionCategoryAsc.setAttribute("selected", "");
  }
  if (valueOrderHidden === "category1") {
    optionCategoryDesc.setAttribute("selected", "");
  }
  if (valueOrderHidden === "amount-1") {
    optionAmountAsc.setAttribute("selected", "");
  }
  if (valueOrderHidden === "amount1") {
    optionAmountDesc.setAttribute("selected", "");
  }
}
if (d.querySelector("#order-ingresos-hidden")) {
  let optionConceptDesc = d.querySelector(".concept-desc");
  let optionConceptAsc = d.querySelector(".concept-asc");
  let orderHidden = d.querySelector("#order-ingresos-hidden");
  let optionAmountDesc = d.querySelector(".amount-desc");
  let optionAmountAsc = d.querySelector(".amount-asc");
  let optionDayDesc = d.querySelector(".day-desc");
  let optionDayAsc = d.querySelector(".day-asc");
  valueOrderHidden = orderHidden.value;

  if (valueOrderHidden === "day-1") {
    optionDayAsc.setAttribute("selected", "");
  }
  if (valueOrderHidden === "day1") {
    optionDayDesc.setAttribute("selected", "");
  }
  if (valueOrderHidden === "concept-1") {
    optionConceptAsc.setAttribute("selected", "");
  }
  if (valueOrderHidden === "concept1") {
    optionConceptDesc.setAttribute("selected", "");
  }
  if (valueOrderHidden === "amount-1") {
    optionAmountAsc.setAttribute("selected", "");
  }
  if (valueOrderHidden === "amount1") {
    optionAmountDesc.setAttribute("selected", "");
  }
}

// Listener de changes de selectores
d.addEventListener("change", (e) => {
  // Selector de ordenar egresos
  if (e.target.matches(".ordenarEgresosPor")) {
    let orderBySelector = d.querySelector(".ordenarEgresosPor");

    if (orderBySelector.value === "day-asc") {
      location.href = "/order-egresos-by-day/-1";
    }
    if (orderBySelector.value === "day-desc") {
      location.href = "/order-egresos-by-day/1";
    }
    if (orderBySelector.value === "categoryName-asc") {
      location.href = "/order-egresos-by-category/-1";
    }
    if (orderBySelector.value === "categoryName-desc") {
      location.href = "/order-egresos-by-category/1";
    }
    if (orderBySelector.value === "amount-asc") {
      location.href = "/order-egresos-by-amount/-1";
    }
    if (orderBySelector.value === "amount-desc") {
      location.href = "/order-egresos-by-amount/1";
    }
  }

  // Selector de ordenar ingresos
  if (e.target.matches(".ordenarIngresosPor")) {
    let orderBySelector = d.querySelector(".ordenarIngresosPor");

    if (orderBySelector.value === "day-asc") {
      location.href = "/order-ingresos-by-day/-1";
    }
    if (orderBySelector.value === "day-desc") {
      location.href = "/order-ingresos-by-day/1";
    }
    if (orderBySelector.value === "concept-asc") {
      location.href = "/order-ingresos-by-concept/-1";
    }
    if (orderBySelector.value === "concept-desc") {
      location.href = "/order-ingresos-by-concept/1";
    }
    if (orderBySelector.value === "amount-asc") {
      location.href = "/order-ingresos-by-amount/-1";
    }
    if (orderBySelector.value === "amount-desc") {
      location.href = "/order-ingresos-by-amount/1";
    }
  }
});

// Edit ingresos blur handler
if (d.querySelector("#form-edit-ingreso")) {
  conceptInputEditIngreso = d.querySelector(".conceptInputEditIngreso");
  valueInputEditIngreso = d.querySelector(".valueInputEditIngreso");
  let errorMsgEditConcept = d.querySelector(".errorMsgEditConcept");
  let errorMsgEditValue = d.querySelector(".errorMsgEditValue");

  conceptInputEditIngreso.addEventListener("blur", (e) => {
    if (conceptInputEditIngreso.value === "") {
      conceptInputEditIngreso.classList.add("is-invalid");
      errorMsgEditConcept.classList.remove("hidden");
      errorMsgEditConcept.classList.add("error");
      return;
    } else {
      conceptInputEditIngreso.classList.remove("is-invalid");
      conceptInputEditIngreso.classList.add("is-valid");
      errorMsgEditConcept.classList.add("hidden");
      errorMsgEditConcept.classList.remove("error");
    }
  });
  valueInputEditIngreso.addEventListener("blur", (e) => {
    if (valueInputEditIngreso.value === "") {
      valueInputEditIngreso.classList.add("is-invalid");
      errorMsgEditValue.classList.remove("hidden");
      errorMsgEditValue.classList.add("error");
      return;
    }
    if (valueInputEditIngreso.value !== "") {
      valueInputEditIngreso.classList.remove("is-invalid");
      valueInputEditIngreso.classList.add("is-valid");
      errorMsgEditValue.classList.add("hidden");
      errorMsgEditValue.classList.remove("error");
    }
  });
}

// Edit egresos blur handler
if (d.querySelector("#form-edit-egreso")) {
  valueInputEditEgreso = d.querySelector(".editValueEgreso");
  let errorMsgEditMount = d.querySelector(".errorMsgEditMount");

  valueInputEditEgreso.addEventListener("blur", (e) => {
    if (valueInputEditEgreso.value === "") {
      valueInputEditEgreso.classList.add("is-invalid");
      errorMsgEditMount.classList.remove("hidden");
      errorMsgEditMount.classList.add("error");
      return;
    }
    if (valueInputEditEgreso.value !== "") {
      valueInputEditEgreso.classList.remove("is-invalid");
      valueInputEditEgreso.classList.add("is-valid");
      errorMsgEditMount.classList.add("hidden");
      errorMsgEditMount.classList.remove("error");
    }
  });
}

// Function de editar ingreso
const editarIngreso = (id, concept, value, obs) => {
  conceptInputEditIngreso = d.querySelector(".conceptInputEditIngreso");
  valueInputEditIngreso = d.querySelector(".valueInputEditIngreso");
  obsInputIngreso = d.querySelector(".obsInputIngreso");
  formEditIngreso = d.querySelector("#form-edit-ingreso");
  conceptTitleEdition = d.querySelector(".conceptTitleEdition");

  conceptInputEditIngreso.value = concept;
  valueInputEditIngreso.value = value;
  obsInputIngreso.value = obs;
  formEditIngreso.action = `/guardar-edicion-de-ingreso/${id}`;
  conceptTitleEdition.innerText = `"${concept}"`;
};

// Function de editar egreso
const editarEgreso = (id, idCategory, categoryName, value, obs) => {
  valueInputEditEgreso = d.querySelector(".editValueEgreso");
  obsInputEgreso = d.querySelector(".obsInputEgreso");
  let formEditEgreso = d.querySelector("#form-edit-egreso");
  let catSelected = d.querySelector(`#${idCategory}`);
  let titleModal = d.querySelector(".infoCatEditing");

  titleModal.innerText = categoryName;
  catSelected.setAttribute("selected", "");
  valueInputEditEgreso.value = value;
  obsInputEgreso.value = obs;
  formEditEgreso.action = `/guardar-edicion-de-egreso/${id}`;
};

// Function de eliminar ingreso
const eliminarIngreso = (id, concept) => {
  swal({
    title: `¿Querés eliminar el ingreso "${concept}"?`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      location.href = `/eliminar-ingreso/${id}`;
    }
  });
};

// Function de eliminar egreso
const eliminarEgreso = (id, categoryName) => {
  swal({
    title: `¿Querés eliminar el egreso de la categoría "${categoryName}"?`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      location.href = `/eliminar-egreso/${id}`;
    }
  });
};

// ---------- Submits handler ----------
d.addEventListener("submit", (e) => {
  e.preventDefault();

  // Handler form Add category
  if (e.target.matches("#form-add-cat")) {
    let totalAsignado;
    if (d.querySelector(".total-asignado")) {
      totalAsignado = d.querySelector(".total-asignado");
      totalAsignado = Number(totalAsignado.innerText);
    }
    let dataTr = d.querySelectorAll(".dataTr");

    const msgPresupuestoSuperado = d.querySelector(".msgPresupuestoSuperado");
    const containerTotalAsignado = d.querySelector(".container-total-asignado");
    let percInputAddCategory = d.querySelector(".percInputAddCategory");
    const errorMsgNameRepetido = d.querySelector(".errorMsgNameRepetido");
    percInputAddCategory = Number(percInputAddCategory.value);

    if (totalAsignado + percInputAddCategory > 100) {
      msgPresupuestoSuperado.classList.remove("hidden");
      containerTotalAsignado.classList.add("error");
      msgPresupuestoSuperado.classList.add("error");
      return;
    }
    if (percInputAddCategory > 100) {
      msgPresupuestoSuperado.classList.remove("hidden");
      msgPresupuestoSuperado.classList.add("error");
      return;
    }

    if (nameInput[0].value === "") {
      nameInput[0].classList.add("is-invalid");
      errorMsgInputName.classList.remove("hidden");
      return;
    }
    if (percInput[0].value === "") {
      percInput[0].classList.add("is-invalid");
      errorMsgInputPerc.classList.remove("hidden");
      return;
    }
    if (d.querySelector("#total-asignado")) {
      let totalAsignado = d.querySelector("#total-asignado");
      totalAsignado = Number(totalAsignado.innerText);
      let percInputAddCategory = d.querySelector(".percInputAddCategory");
      percInputAddCategory = Number(percInputAddCategory.value);
      let resultado = totalAsignado + percInputAddCategory;
      if (resultado > 100) {
        let msgPresupuestoSuperado = d.querySelector(".msgPresupuestoSuperado");
        msgPresupuestoSuperado.classList.remove("hidden");
        return;
      }
    }

    dataTr.forEach((data) => {
      if (data.getAttribute("id") === nameInput[0].value) {
        errorMsgNameRepetido.classList.remove("hidden");
        errorMsgNameRepetido.classList.add("error");
        nameInput[0].classList.add("is-invalid");
      }
    });

    if (d.querySelector(".is-invalid")) {
      return;
    }

    swal({
      title: "Categoría agregada",
      icon: "success",
    });
    const swalBtn = d.querySelector(".swal-button");
    swalBtn.classList.add("hidden");

    d.forms["form-add-cat"].submit();
  }
  //

  // Handler form Edit category
  if (e.target.matches("#form-edit-cat")) {
    let totalAsignado = d.querySelector(".total-asignado");
    totalAsignado = Number(totalAsignado.innerText);

    let dataTr = d.querySelectorAll(".dataTr");
    const errorMsgNameRepetidoEdit = d.querySelector(
      ".errorMsgNameRepetidoEdit"
    );

    let percInputEditCategory;
    if (d.querySelector(".percInputEditCategory")) {
      percInputEditCategory = d.querySelector(".percInputEditCategory");
    }

    let editNameInput = d.getElementsByClassName("nameInputEditCategory"),
      editPercInput = d.getElementsByClassName("percInputEditCategory"),
      errorMsgEditName = d.querySelector(".errorMsgEditName"),
      errorMsgEditPerc = d.querySelector(".errorMsgEditPerc"),
      errorMsgPresupuestoSuperado = d.querySelector(
        ".errorMsgPresupuestoSuperado"
      );

    if (editNameInput[0].value === "") {
      editNameInput[0].classList.add("is-invalid");
      errorMsgEditName.classList.remove("hidden");
      return;
    }
    if (editNameInput[0].value !== "") {
      editNameInput[0].classList.contains("is-invalid") &&
        editNameInput[0].classList.remove("is-invalid");
      errorMsgEditName.classList.add("hidden");
      editNameInput[0].classList.add("is-valid");
    }
    if (editPercInput[0].value === "") {
      editPercInput[0].classList.add("is-invalid");
      errorMsgEditPerc.classList.remove("hidden");
      return;
    }
    if (editPercInput[0].value !== "") {
      editPercInput[0].classList.contains("is-invalid") &&
        editPercInput[0].classList.remove("is-invalid");
      errorMsgEditPerc.classList.add("hidden");
      editPercInput[0].classList.add("is-valid");
    }

    editPercInput = Number(editPercInput[0].value);
    if (porcentajeActual + editPercInput > 100) {
      errorMsgPresupuestoSuperado.classList.remove("hidden");
      errorMsgPresupuestoSuperado.classList.add("error");
      percInputEditCategory.classList.add("is-invalid");
      return;
    }

    // Validación para que no se repita un nombre de categoría
    dataTr.forEach((data) => {
      allNames = [...allNames, data.getAttribute("id").toLowerCase()].sort();
    });

    allNames = allNames.filter((cat) => cat !== nombreActual.toLowerCase());

    if (allNames.includes(editNameInput[0].value.toLowerCase())) {
      errorMsgNameRepetidoEdit.classList.remove("hidden");
      errorMsgNameRepetidoEdit.classList.add("error");
      editNameInput[0].classList.add("is-invalid");
      return;
    } else {
      errorMsgNameRepetidoEdit.classList.add("hidden");
      errorMsgNameRepetidoEdit.classList.remove("error");
      editNameInput[0].classList.remove("is-invalid");
    }
    allNames = [...allNames, nombreActual];

    if (d.querySelector(".is-invalid")) {
      return;
    }

    swal({
      title: "Categoría editada",
      icon: "success",
    });
    const swalBtn = d.querySelector(".swal-button");
    swalBtn.classList.add("hidden");

    d.forms["form-edit-cat"].submit();
  }
  //

  // Handler form Nuevo ingreso
  if (e.target.matches("#formNvoIngreso")) {
    let errorMsgInputConcept = d.querySelector(".errorMsgInputConcept");
    let errorMsgInputMount = d.querySelector(".errorMsgInputMount");
    let nameInputNewMove = d.querySelector(".nameInputNewMove");
    let mountInputNewMove = d.querySelector(".mountInputNewMove");

    if (nameInputNewMove.value === "") {
      nameInputNewMove.classList.add("is-invalid");
      errorMsgInputConcept.classList.add("errorMsgIngresoEgreso");
      errorMsgInputConcept.classList.remove("hidden");
      return;
    }
    if (nameInputNewMove.value === "") {
      nameInputNewMove.classList.add("is-invalid");
      errorMsgInputConcept.classList.add("errorMsgIngresoEgreso");
      errorMsgInputConcept.classList.remove("hidden");
      return;
    }
    if (mountInputNewMove.value === "") {
      mountInputNewMove.classList.add("is-invalid");
      errorMsgInputMount.classList.add("errorMsgIngresoEgreso");
      errorMsgInputMount.classList.remove("hidden");
      return;
    }
    if (mountInputNewMove.value === "") {
      mountInputNewMove.classList.add("is-invalid");
      errorMsgInputMount.classList.add("errorMsgIngresoEgreso");
      errorMsgInputMount.classList.remove("hidden");
      return;
    }
    swal({
      title: "Ingreso agregado",
      icon: "success",
    });
    const swalBtn = d.querySelector(".swal-button");
    swalBtn.classList.add("hidden");

    d.forms["formNvoIngreso"].submit();
  }

  // Handler form Nuevo egreso
  if (e.target.matches("#formNvoEgreso")) {
    let errorMsgInputMount = d.querySelector(".errorMsgInputMount");
    let mountInputNewMove = d.querySelector(".mountInputNewMove");
    let egresosSelector = d.querySelector(".egresosSelector");
    let errorMsgCatSelect = d.querySelector(".errorMsgCatSelect");

    if (egresosSelector.value === "choiceOne") {
      egresosSelector.classList.add("is-invalid");
      egresosSelector.classList.remove("is-valid");
      errorMsgCatSelect.classList.add("errorMsgIngresoEgreso");
      errorMsgCatSelect.classList.remove("hidden");
      return;
    }
    if (egresosSelector.value !== "choiceOne") {
      egresosSelector.classList.remove("is-invalid");
      egresosSelector.classList.add("is-valid");
      errorMsgCatSelect.classList.remove("errorMsgIngresoEgreso");
      errorMsgCatSelect.classList.add("hidden");
    }
    if (mountInputNewMove.value === "") {
      mountInputNewMove.classList.add("is-invalid");
      errorMsgInputMount.classList.add("errorMsgIngresoEgreso");
      errorMsgInputMount.classList.remove("hidden");
      return;
    }
    if (mountInputNewMove.value !== "") {
      mountInputNewMove.classList.remove("is-invalid");
      mountInputNewMove.classList.add("is-valid");
      errorMsgInputMount.classList.remove("errorMsgIngresoEgreso");
      errorMsgInputMount.classList.add("hidden");
    }
    swal({
      title: "Egreso agregado",
      icon: "success",
    });
    const swalBtn = d.querySelector(".swal-button");
    swalBtn.classList.add("hidden");

    d.forms["formNvoEgreso"].submit();
  }

  // Handler form edición de ingreso
  if (e.target.matches("#form-edit-ingreso")) {
    conceptInputEditIngreso = d.querySelector(".conceptInputEditIngreso");
    valueInputEditIngreso = d.querySelector(".valueInputEditIngreso");
    obsInputIngreso = d.querySelector(".obsInputIngreso");
    formEditIngreso = d.querySelector("#form-edit-ingreso");
    let errorMsgEditConcept = d.querySelector(".errorMsgEditConcept");
    let errorMsgEditValue = d.querySelector(".errorMsgEditValue");

    if (conceptInputEditIngreso.value === "") {
      conceptInputEditIngreso.classList.add("is-invalid");
      errorMsgEditConcept.classList.remove("hidden");
      errorMsgEditConcept.classList.add("error");
      return;
    } else {
      conceptInputEditIngreso.classList.add("is-valid");
      errorMsgEditConcept.classList.add("hidden");
      errorMsgEditConcept.classList.remove("error");
    }
    if (valueInputEditIngreso.value === "") {
      valueInputEditIngreso.classList.add("is-invalid");
      errorMsgEditValue.classList.remove("hidden");
      errorMsgEditValue.classList.add("error");
      return;
    } else {
      valueInputEditIngreso.classList.add("is-valid");
      errorMsgEditValue.classList.add("hidden");
      errorMsgEditValue.classList.remove("error");
    }

    swal({
      title: "Ingreso editado",
      icon: "success",
    });
    const swalBtn = d.querySelector(".swal-button");
    swalBtn.classList.add("hidden");

    d.forms["form-edit-ingreso"].submit();
  }

  // Handler form edición de egreso
  if (e.target.matches("#form-edit-egreso")) {
    valueInputEditEgreso = d.querySelector(".editValueEgreso");
    obsInputEgreso = d.querySelector(".obsInputEgreso");
    editValueEgreso = d.querySelector(".editValueEgreso");
    categoryEditEgreso = d.querySelector("#cat");

    let errorMsgEditMount = d.querySelector(".errorMsgEditMount");

    if (valueInputEditEgreso.value === "") {
      editValueEgreso.classList.add("is-invalid");
      errorMsgEditMount.classList.remove("hidden");
      errorMsgEditMount.classList.add("error");
      return;
    } else {
      editValueEgreso.classList.add("is-valid");
      errorMsgEditMount.classList.add("hidden");
      errorMsgEditMount.classList.remove("error");
    }

    swal({
      title: "Egreso editado",
      icon: "success",
    });
    const swalBtn = d.querySelector(".swal-button");
    swalBtn.classList.add("hidden");

    d.forms["form-edit-egreso"].submit();
  }
});

// onChanges handler
d.addEventListener("change", (e) => {
  if (e.target.matches(".ingresosMonthSelector")) {
    let monthSelected = e.target.value;
    location.href = `/ingresos-del-mes/${monthSelected}`;
  }
  if (e.target.matches(".egresosMonthSelector")) {
    let monthSelected = e.target.value;
    location.href = `/egresos-del-mes/${monthSelected}`;
  }
});

// Función de eliminación de categoría
const quitarCat = (id, name) => {
  swal({
    title: `¿Querés eliminar la categoría "${name}"?`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      location.href = `/settings/quitar-cat/${id}`;
    }
  });
};

// Clicks handler
d.addEventListener("click", (e) => {
  let trigger = e.target;
  // Handler btn avanzar de settings
  if (
    trigger.matches(".btn-avanzar") ||
    trigger.matches(".a-btn-avanzar") ||
    trigger.matches(".icon") ||
    trigger.matches(".svg-avanzar") ||
    trigger.matches(".container-btn-avanzar") ||
    trigger.matches(".btn-avanzar-disabled")
  ) {
    e.preventDefault();
    let totalAsignado = d.querySelector(".total-asignado");
    let checkTotal;
    if (totalAsignado !== null) {
      checkTotal = totalAsignado.innerHTML;
    }
    if (totalAsignado === null || checkTotal !== "100") {
      swal({
        title:
          "Para continuar es necesario repartir el 100% del presupuesto entre todas las categorías que quieras",
        text: "(Tené en cuenta que vas a poder modificarlo cuando lo necesites)",
        icon: "info",
        button: "Aceptar",
      });
      return;
    }
    location.href = "/main";
  }

  // Cancelar agregado de movimiento
  if (
    trigger.matches(".cancel-move-btn") ||
    trigger.matches(".svg-cancel-move-btn") ||
    trigger.matches(".span-cancel-move-btn") ||
    trigger.matches(".path-cancel-move-btn")
  ) {
    location.href = "/main";
  }

  // Settings completado
  if (
    trigger.matches(".container-btn-comenzar") ||
    trigger.matches(".a-btn-comenzar") ||
    trigger.matches(".btn-comenzar") ||
    trigger.matches(".icon-comenzar") ||
    trigger.matches(".path-btn-comenzar") ||
    trigger.matches(".svg-comenzar")
  ) {
    location.href = "/settings";
  }
});
