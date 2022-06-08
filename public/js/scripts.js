const d = document;

const editar = (id, nameCat, percCat) => {
  let element = `
  <div class="childToRemove">
   <div class="modal-header">
   <h5 class="modal-title">Editando ${nameCat}</h5>
   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="quitarElementoHTML()"></button>
 </div>
 <div class="separador-modal">
 </div>
 <form action="/settings/update-cat/${id}" method="POST">
 <div class="container-form-add-cat">
     <div class="form-floating mb-3 ">
     <input type="text" name="catName" class="form-control" id="floatingInput" value="${nameCat}" placeholder:"Nombre de la categoría" autofocus>
     <label for="floatingInput">Nombre de la categoría</label>
     </div>
     <div class="form-floating">
     <input type="number" name="catPerc" class="form-control" id="floatingNumber" placeholder="Porcentaje" min="0" value="${percCat}">
     <label for="floatingNumber">Porcentaje</label>
     </div>
   </div>
   <div class="separador-modal">
   </div>
   <div class="modal-footer" onclick="quitarElementoHTML()">
     <button type="button" class="btn-cancelar-cambios-cat" data-bs-dismiss="modal">
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

const quitarElementoHTML = () => {
  let modal = d.querySelector(".add-to-modal");
  let childToRemove = d.querySelector(".childToRemove");
  modal.removeChild(childToRemove);
};
