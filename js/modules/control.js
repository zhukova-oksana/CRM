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

const imageControl = (product) => {
  if (product.images.name) {
    const link = document.querySelector('.buttons__picture_type_image');
    link.setAttribute('data-pic', URL.createObjectURL(product.images));
    link.classList.remove('buttons__picture_type_image');
  }
}

const imageModalControl = (table) => {
  table.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.buttons__picture')) {
      const url = target.getAttribute('data-pic');
      if (url) {
        const left = (screen.width - 600) / 2;
        const top = (screen.height - 600) / 2;
        open(url, '', `popup, width = 600, height = 600, top=${top}, left=${left}`);
      }
    }
  });
};

const formControl = (form, tableProduct, closeModal, codeId, total, arrayProduct) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData);
    newProduct.id = +codeId.textContent;


    console.log('newProduct', newProduct);

    addProductPage(newProduct, tableProduct);
    addProductData(newProduct, arrayProduct, total);

    imageControl(newProduct);
    imageModalControl(tableProduct);

    form.reset();
    closeModal();
  })
};



export default {
  modalControl,
  formControl,
  imageControl
}
