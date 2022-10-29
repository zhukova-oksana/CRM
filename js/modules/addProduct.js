import create from './createElement.js';
import calculations from './calculations.js';

const {
  createRow,
} = create;

const {
  totalPrice
} = calculations;

const addProductPage = (product, tableProduct) => {
  tableProduct.append(createRow(product));
}

const addProductData = (product, arrayProduct, total) => {
  arrayProduct.push(product);
  total.textContent = totalPrice(arrayProduct);
};

export default {
  addProductPage,
  addProductData
}
