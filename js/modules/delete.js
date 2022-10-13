import calculations from './calculations.js';

const {
  totalPrice
} = calculations;

export const deleteTr = (tableProduct, arrayProduct, total) => {
  tableProduct.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.buttons__delete')) {
      for (let i = 0; i < arrayProduct.length; i++) {
        if (Number(target.closest('.table__tr').children[0].textContent) === arrayProduct[i].id) {
          arrayProduct.splice(i, 1);
        }
      }
      target.closest('.table__tr').remove();
      console.log('arrayProduct', arrayProduct);
      total.textContent = totalPrice(arrayProduct);
    }
  });
}
