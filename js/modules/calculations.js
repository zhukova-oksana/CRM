const totalPrice = (arrayProduct) => {
  let price = 0;
  arrayProduct.map((item) => {
    price += (item.price * item.count);
  });
  return price;
}

export default {
  totalPrice,
}
