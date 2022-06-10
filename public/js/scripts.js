const d = document;

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
      ene.addAttribute("selected", "");
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
  totalAsignado = Number(totalAsignado.innerText);
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
    btnAvanzar.setAttribute("disabled", "");
  }
  if (totalAsignado === 100) {
    addBtn.classList.remove(".btn-avanzar");
    addBtn.classList.add(".btn-avanzar-disabled");
    addBtn.setAttribute("disabled", "");
    nameInputAddCategory.setAttribute("disabled", "");
    percInputAddCategory.setAttribute("disabled", "");
  }
}

// Edit modal handler function
var porcentajeActual;
if (d.querySelector(".total-asignado")) {
  porcentajeActual = Number(d.querySelector(".total-asignado").innerHTML);
}
const editar = (id, nameCat, percCat) => {
  porcentajeActual = porcentajeActual - Number(percCat);
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
    <input type="text" name="catName" class="form-control nameInputEditCategory" id="floatingInput" value="${nameCat}" placeholder:"Nombre de la categoría" autofocus>
    <label for="floatingInput">Nombre de la categoría</label>
    <div class="hidden errorMsgEditName">El nombre no puede quedar vacío</div>
    </div>
    <div class="form-floating">
    <input type="number" name="catPerc" class="form-control percInputEditCategory" id="floatingNumber" placeholder="Porcentaje" min="0" step="5" value="${percCat}">
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

// Submits handler
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

    if(d.querySelector(".is-invalid")) {
      return
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
      title: "Ingreso agregado",
      icon: "success",
    });
    const swalBtn = d.querySelector(".swal-button");
    swalBtn.classList.add("hidden");

    d.forms["formNvoEgreso"].submit();
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

// Clicks handler
d.addEventListener("click", (e) => {
  // Handler btn avanzar de settings
  if (
    e.target.matches(".btn-avanzar") ||
    e.target.matches(".icon") ||
    e.target.matches(".svg-avanzar")
  ) {
    e.preventDefault();
    let totalAsignado = d.querySelector(".total-asignado");
    let msgRepartijaDePresupuesto = d.querySelector(
      ".msgRepartijaDePresupuesto"
    );
    let checkTotal = totalAsignado.innerHTML;

    if (checkTotal !== "100") {
      msgRepartijaDePresupuesto.classList.remove("hidden");
      msgRepartijaDePresupuesto.classList.add("msgErrorRepartijaDePresupuesto");
      return;
    }
    location.href = "/main";
  }

  if (
    e.target.matches(".cancel-move-btn") ||
    e.target.matches(".svg-cancel-move-btn") ||
    e.target.matches(".span-cancel-move-btn") ||
    e.target.matches(".path-cancel-move-btn")
  ) {
    location.href = "/main";
  }
  if (
    e.target.matches(".container-btn-comenzar") ||
    e.target.matches(".a-btn-comenzar") ||
    e.target.matches(".btn-comenzar") ||
    e.target.matches(".icon-comenzar") ||
    e.target.matches(".path-btn-comenzar") ||
    e.target.matches(".svg-comenzar")
  ) {
    location.href = "/settings";
  }
  if (
    e.target.matches(".btn-cancelar-cambios-cat") ||
    e.target.matches(".span-btn-cancelar-cambios")
  ) {
    const where = () => {
      return d.querySelector(".navbar") ? "re-settings" : "settings";
    };
    location.href = where();
  }
});
