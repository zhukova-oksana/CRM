import add from './addProduct.js';

const {
  addProductPage,
  addProductData
} = add;

const modalControl = (codeId, priceTotal) => {
  const button = document.querySelector('.button');
  const buttonClose = document.querySelector('.add-product__close');
  const overlay = document.querySelector('.overlay');
  const addProduct = document.querySelector('.add-product');

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
};

const formControl = (form, tableProduct, closeModal, codeId, total, arrayProduct) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData);
    newProduct.id = +codeId.textContent;

    addProductPage(newProduct, tableProduct);
    addProductData(newProduct, arrayProduct, total);

    form.reset();
    closeModal();
  })
};

export default {
  modalControl,
  formControl
}
