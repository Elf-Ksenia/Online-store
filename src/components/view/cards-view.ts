import './cards-view.scss';
import data from '../../data.json';
import { MDCRipple } from '@material/ripple';

export function buildCard() {
  data.forEach(function (item, i) {
    const card = document.createElement('div');
    const productName = document.createElement('h3');
    const productImg = document.createElement('img');
    const productPrice = document.createElement('span');
    const productBrand = document.createElement('h3');
    const productBlend = document.createElement('h4');
    const productWeight = document.createElement('span');
    const productExtraction = document.createElement('span');
    const productBtn = document.createElement('button');
    const productBtnSpan = document.createElement('span');
    const main = document.querySelector('.main') as HTMLElement;

    productName.textContent = item.name;
    productImg.setAttribute('src', `asset/img/${item.img}`);
    productBlend.textContent = item.sort;
    productBrand.textContent = item.brand;
    productPrice.innerHTML = `$${item.price}`;
    productExtraction.textContent = `extraction - ${item.extraxtion}%`;
    productWeight.textContent = `${item.weight} g`;
    productBtnSpan.textContent = 'Add to Cart';

    card.classList.add('mdc-card');
    productName.classList.add('mdc-card__name');
    productImg.classList.add('mdc-card__img');
    productPrice.classList.add('mdc-card__price');
    productBrand.classList.add('mdc-card__brand');
    productBlend.classList.add('mdc-card__blend');
    productWeight.classList.add('mdc-card__weight');
    productExtraction.classList.add('mdc-card__extraction');
    productBtn.classList.add('mdc-button');
    productBtn.classList.add('mdc-button--raised');
    productBtnSpan.classList.add('mdc-button__label');

    productBtn.append(productBtnSpan);
    card.append(productBrand);
    card.append(productName);
    card.append(productImg);
    card.append(productBlend);
    card.append(productWeight);
    card.append(productPrice);
    card.append(productExtraction);
    card.append(productBtn);
    main.append(card);
  });
}

buildCard();

//const buttonRipple = new MDCRipple(document.querySelector('.mdc-button')) as HTMLButtonElement;
