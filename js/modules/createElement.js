const createRow = (obj) => {
  const tr = document.createElement('tr');
  tr.classList.add('table__tr');
  tr.insertAdjacentHTML('beforeend', `<tr>
    <td class="table__td id">${obj.id}</td>
    <td class="table__td">${obj.title}</td>
    <td class="table__td">${obj.category}</td>
    <td class="table__td table__td_color_grey table__td_type_text">${obj.units}</td>
    <td class="table__td table__td_type_text">${obj.count}</td>
    <td class="table__td">${obj.price}</td>
    <td class="table__td total">${obj.price * obj.count}</td>
    <td class="table__td">
      <div class="buttons">
        <a href="#" data-pic="${obj.images.big}" class="buttons__picture buttons__picture_type_image">Изображение</a>
        <a href="#" class="buttons__edit">Редактировать</a>
        <a href="#" class="buttons__delete">Удалить</a>
      </div>
    </td>
  </tr>`);

  return tr;
};

export default {
  createRow,
}
