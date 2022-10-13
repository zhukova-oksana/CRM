export const changeDiscont = (form) => {
  const discont = document.querySelector('.form-add__checkbox');
  const discontText = form.discont[1];

  discont.addEventListener('change', e => {
    const checkbox = e.target;

    if (checkbox.checked === true) {
      discontText.disabled = false;
    } else {
      discontText.disabled = true;
      discontText.value = '';
    }
  });
}

export const changeCost = (priceTotal, form) => {
  const price = form.price;
  const count = form.count;

  price.addEventListener('focusout', e => {
    priceTotal.textContent = price.value * form.count.value;
  });
  count.addEventListener('focusout', e => {
    priceTotal.textContent = price.value * form.count.value;
  });
};
