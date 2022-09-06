'use strict';
const overlay = document.querySelector('.overlay');
overlay.classList.add('overlay_visible');

const modal = document.querySelector('.add-product');
modal.classList.add('add-product_visible');

const productTitle = document.querySelector('.add-product__title');
const productId = document.querySelector('.edit__text');
const editButton = document.querySelector('.edit__button');
const form = document.querySelector('.form-add');
const discount = document.querySelector('#discount');
const promoCode = document.getElementsByName('discount');
const finalPrice = document.querySelector('.form-add__button .final__price');
