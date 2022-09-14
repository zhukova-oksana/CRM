'use strict';

const arrayProduct = [
  {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 296378448,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 215796548,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 246258248,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
];

const tableProduct = document.querySelector('.table tbody');
tableProduct.innerHTML = '';

const createRow = (obj) => {
  const tr = document.createElement('tr');
  tr.classList.add('table__tr');
  tr.insertAdjacentHTML('beforeend',`<tr>
    <td class="table__td id">${obj.id}</td>
    <td class="table__td">${obj.title}</td>
    <td class="table__td">${obj.category}</td>
    <td class="table__td table__td_color_grey table__td_type_text">${obj.units}</td>
    <td class="table__td table__td_type_text">${obj.count}</td>
    <td class="table__td">${obj.price}</td>
    <td class="table__td total">${obj.price*obj.count}</td>
    <td class="table__td">
      <div class="buttons">
        <a href="#" class="buttons__picture buttons__picture_type_image">Изображение</a>
        <a href="#" class="buttons__edit">Редактировать</a>
        <a href="#" class="buttons__delete">Удалить</a>
      </div>
    </td>
  </tr>`);

  return tr;
}

const renderGoods = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);

  return allRow;
}

const button = document.querySelector('.button');
const buttonClose = document.querySelector('.add-product__close');
const overlay = document.querySelector('.overlay');
const addProduct = document.querySelector('.add-product');

const codeId = document.querySelector('.vendor-code__id');
const priceTotal = document.querySelector('.price__total');

const modalControl = () => {
  const openModal = () => {
    overlay.classList.add('overlay_visible');
    addProduct.classList.add('add-product_visible');
    const id = Math.round(Math.random() * 1000000000);
    codeId.textContent = id;
    priceTotal.textContent = 0;
  };

  const closeModal = () => {
    overlay.classList.remove('overlay_visible');
    addProduct.classList.remove('add-product_visible');
  };

  button.addEventListener('click', () => {
    openModal();
  });

  overlay.addEventListener('click', e => {
    const target = e.target;
    if (target === overlay || target.closest('.add-product__close')) {
      closeModal();
    }
  });

  buttonClose.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.add-product__close')) {
      closeModal();
    }
  });

  return {
    closeModal,
  }
}

const deleteTr = (tableProduct) => {
  tableProduct.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.buttons__delete')) {
      for (let i = 0; i < arrayProduct.length; i++) {
        if (Number(target.closest('.table__tr').children[0].textContent) === arrayProduct[i].id) {
          arrayProduct.splice(i,1);
          }
        }
      target.closest('.table__tr').remove();
      console.log('arrayProduct', arrayProduct);
      total.textContent = totalPrice(arrayProduct);
      }
  });
}

const total = document.querySelector('.total');

const totalPrice = (arrayProduct) => {
  let price = 0;
  arrayProduct.map((item) => {
    price += (item.price * item.count);
  });
  return price;
}

const addProductPage = (product, tableProduct) => {
  tableProduct.append(createRow(product));
}

const addProductData = (product, arrayProduct) => {
  arrayProduct.push(product);
  console.log('arrayProduct', arrayProduct);
  total.textContent = totalPrice(arrayProduct);
}

const form = document.querySelector('.form-add');

const formControl = (form, tableProduct, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData (e.target);
    const newProduct = Object.fromEntries(formData);
    newProduct.id = +codeId.textContent;

    console.log(newProduct);

    addProductPage(newProduct, tableProduct);
    addProductData(newProduct, arrayProduct);

    form.reset();
    closeModal();
  })
}

const changeDiscont = () => {
  const discont = document.querySelector('.form-add__checkbox');
  const discontText = form.discont[1];

  discont.addEventListener('change', e =>{
    const checkbox = e.target;

    if (checkbox.checked === true) {
      discontText.disabled = false;
    } else {
      discontText.disabled = true;
      discontText.value = '';
    }
  });
}

const changeCost = (priceTotal) => {
  const price = form.price;
  const count = form.count;

  price.addEventListener('focusout', e => {
    priceTotal.textContent = price.value * form.count.value;
  });
  count.addEventListener('focusout', e => {
    priceTotal.textContent = price.value * form.count.value;
  });
}

renderGoods(tableProduct, arrayProduct);
total.textContent = totalPrice(arrayProduct);
deleteTr(tableProduct);

changeDiscont();
changeCost(priceTotal);

const {closeModal} = modalControl();
formControl(form, tableProduct, closeModal);
