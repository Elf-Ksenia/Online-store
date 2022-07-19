import './global.scss';
import './components/view/cards-view';
import { filterBlend, filterBrand, filterCoffeine, filterExtraction, filterWeight } from './components/filters/filters';
import { search } from './components/search/search';
import { cartCounter } from './components/cart/cart';

import { MDCFormField } from '@material/form-field';
import { MDCCheckbox } from '@material/checkbox';

const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox') as HTMLElement);
const formField = new MDCFormField(document.querySelector('.mdc-form-field') as HTMLElement);
formField.input = checkbox;

(document.querySelector('.search') as HTMLElement).addEventListener('keyup', search);

const brandFilter = document.querySelector('.brand-filter') as HTMLElement;

brandFilter.addEventListener('click', (event: Event) => {
  if ((event.target as HTMLInputElement).className === 'mdc-checkbox__native-control') {
    filterBrand();
  }
});

const weightFilter = document.querySelector('.weight-filter') as HTMLElement;
weightFilter.addEventListener('click', (event: Event) => {
  if ((event.target as HTMLInputElement).className === 'mdc-checkbox__native-control') {
    filterWeight();
  }
});

const blendFilter = document.querySelector('.blend-filter') as HTMLElement;
blendFilter.addEventListener('click', (event: Event) => {
  if ((event.target as HTMLInputElement).className === 'mdc-checkbox__native-control') {
    filterBlend();
  }
});

const coffeineFilter = document.querySelector('.coffeine-filter') as HTMLElement;
coffeineFilter.addEventListener('click', (event: Event) => {
  if ((event.target as HTMLInputElement).className === 'mdc-checkbox__native-control') {
    filterCoffeine();
  }
});

cartCounter();
