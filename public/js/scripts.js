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
if (d.querySelector(".grid-container-months")) {
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
      ene.classList.add("currentMonth");
      break;
    case 1:
      feb.classList.add("currentMonth");
      break;
    case 2:
      mar.classList.add("currentMonth");
      break;
    case 3:
      abr.classList.add("currentMonth");
      break;
    case 4:
      may.classList.add("currentMonth");
      break;
    case 5:
      jun.classList.add("currentMonth");
      break;
    case 6:
      jul.classList.add("currentMonth");
      break;
    case 7:
      ago.classList.add("currentMonth");
      break;
    case 8:
      sep.classList.add("currentMonth");
      break;
    case 9:
      oct.classList.add("currentMonth");
      break;
    case 10:
      nov.classList.add("currentMonth");
      break;
    case 11:
      dic.classList.add("currentMonth");
      break;
  }
}
// Month selecter selected month
if (d.querySelector("#month-hidden")) {
  let monthSelected = d.querySelector("#month-hidden");
  monthSelected = Number(monthSelected.value);
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
      ene.classList.add("selectedMonth");
      break;
    case 1:
      feb.classList.add("selectedMonth");
      break;
    case 2:
      mar.classList.add("selectedMonth");
      break;
    case 3:
      abr.classList.add("selectedMonth");
      break;
    case 4:
      may.classList.add("selectedMonth");
      break;
    case 5:
      jun.classList.add("selectedMonth");
      break;
    case 6:
      jul.classList.add("selectedMonth");
      break;
    case 7:
      ago.classList.add("selectedMonth");
      break;
    case 8:
      sep.classList.add("selectedMonth");
      break;
    case 9:
      oct.classList.add("selectedMonth");
      break;
    case 10:
      nov.classList.add("selectedMonth");
      break;
    case 11:
      dic.classList.add("selectedMonth");
      break;
  }
}

// Edit modal handler function
const editar = (id, nameCat, percCat) => {
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
    <div class="hidden errorMsgEditPerc">El porcentaje asignado no puede quedar vacío</div>
    </div>
    </div>
    <div class="separador-modal">
    </div>
    <div class="modal-footer">
    <button type="button" class="btn-cancelar-cambios-cat" data-bs-dismiss="modal" onclick="quitarElementoHTML()">
    <span>Cancelar</span>
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

// Submits handler
d.addEventListener("submit", (e) => {
  e.preventDefault();

  // Handler form Add category
  if (e.target.matches("#form-add-cat")) {
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
    let editNameInput = d.getElementsByClassName("nameInputEditCategory"),
      editPercInput = d.getElementsByClassName("percInputEditCategory"),
      errorMsgEditName = d.querySelector(".errorMsgEditName"),
      errorMsgEditPerc = d.querySelector(".errorMsgEditPerc");

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
    swal({
      title: "Categoría editada",
      icon: "success",
    });
    const swalBtn = d.querySelector(".swal-button");
    swalBtn.classList.add("hidden");

    d.forms["form-edit-cat"].submit();
  }
  //
  if (e.target.matches("#formNvoIngreso")) {
    let concept = d.querySelector("#concept");
    let errorMsgIngreso = d.querySelector(".errorMsgIngreso");

    if (concept.value === "") {
      errorMsgIngreso.classList.add("is-invalid");
      errorMsgIngreso.classList.remove("hidden");
      return;
    }
    swal({
      title: "Ingreso agregado",
      icon: "success",
    });
    const swalBtn = d.querySelector(".swal-button");
    swalBtn.classList.add("hidden");

    // d.forms["formNvoIngreso"].submit();
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
    let totalAsignado = d.querySelector("#total-asignado");
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
});
