import create from './createElement.js';

const {
  createRow,
} = create;

const renderGoods = (data) => {
  const allRow = data.map(createRow);
  const tableProduct = document.querySelector('.table tbody');

  tableProduct.append(...allRow);

  return allRow;
};

const loadGoods = (callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/api/goods');

  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    console.log('data', data);
    callback(data);
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
};

const sendGoods = (body, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/api/goods');

  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    callback(data);
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send(JSON.stringify(body));
}

export default {
  renderGoods,
  loadGoods,
  sendGoods,
};
