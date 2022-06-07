const d = document;

const editar = (id, nameCat, percCat) => {
  let element = `<div>
  <p>Editando</p>
  <form action="/settings/update-cat/${id}" method="POST">
    <input type="text" name="catName" value="${nameCat}">
    <div>
      <input type="number" name="catPerc" item-percentage value="${percCat}">%
    </div>
    <button type="submit">Guardar cambios</button>
  </form>
  </div>`;
  let body = d.querySelector("body");
  body.insertAdjacentHTML("afterbegin", element);
};
