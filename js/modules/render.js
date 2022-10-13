import create from './createElement.js';

const {
  createRow,
} = create;

const renderGoods = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);

  return allRow;
};

export default {
  renderGoods,
};
