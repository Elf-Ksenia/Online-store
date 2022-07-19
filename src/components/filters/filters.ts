import { MDCSlider } from '@material/slider';

const slider = new MDCSlider(document.querySelector('.mdc-slider') as HTMLElement);

const products = document.querySelector('.main') as HTMLElement;
const productItems = products.getElementsByClassName('mdc-card') as HTMLCollection;

export function filterPrice() {
  const min = parseInt((document.querySelector('.min-price') as HTMLInputElement).value);
  const max = parseInt((document.querySelector('.max-price') as HTMLInputElement).value);
  for (let i = 0; i < productItems.length; i++) {
    const price = productItems[i].querySelector('.mdc-card__price') as HTMLElement;
    if (
      Math.floor(parseFloat(price.innerHTML.slice(1))) >= min &&
      Math.floor(parseFloat(price.innerHTML.slice(1))) <= max
    ) {
      (productItems[i] as HTMLElement).style.display = '';
    } else {
      (productItems[i] as HTMLElement).style.display = 'none';
    }
  }
}
slider.root.addEventListener('MDCSlider:change', (e) => filterPrice());

export function filterBrand() {
  const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  for (let i = 0; i < productItems.length; i++) {
    const brand = productItems[i].querySelector('.mdc-card__brand') as HTMLElement;
    if (!checkedBoxes.length) {
      (productItems[i] as HTMLElement).style.display = 'flex';
    } else {
      (productItems[i] as HTMLElement).style.display = Array.from(checkedBoxes).some(
        (brandCheckbox) => brandCheckbox.id == brand.innerHTML.toLowerCase()
      )
        ? 'flex'
        : 'none';
    }
  }
}

export function filterWeight() {
  const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  for (let i = 0; i < productItems.length; i++) {
    const weight = productItems[i].querySelector('.mdc-card__weight') as HTMLElement;
    if (!checkedBoxes.length) {
      (productItems[i] as HTMLElement).style.display = 'flex';
    } else {
      (productItems[i] as HTMLElement).style.display = Array.from(checkedBoxes).some(
        (weightCheckbox) => weightCheckbox.id == weight.innerHTML.slice(0, -2)
      )
        ? 'flex'
        : 'none';
    }
  }
}

export function filterBlend() {
  const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  for (let i = 0; i < productItems.length; i++) {
    const blend = productItems[i].querySelector('.mdc-card__blend') as HTMLElement;
    if (!checkedBoxes.length) {
      (productItems[i] as HTMLElement).style.display = 'flex';
    } else {
      (productItems[i] as HTMLElement).style.display = Array.from(checkedBoxes).some((blendCheckbox) =>
        blend.innerHTML.toLowerCase().includes(blendCheckbox.id)
      )
        ? 'flex'
        : 'none';
    }
  }
}

export function filterCoffeine() {
  const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  for (let i = 0; i < productItems.length; i++) {
    const name = productItems[i].querySelector('.mdc-card__name') as HTMLElement;
    if (!checkedBoxes.length) {
      (productItems[i] as HTMLElement).style.display = 'flex';
    } else if (name.innerHTML.toLowerCase().includes('decaffeinated')) {
      (productItems[i] as HTMLElement).style.display = '';
    } else {
      (productItems[i] as HTMLElement).style.display = 'none';
    }
  }
}

export function filterExtraction() {
  const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  const min = parseInt((document.querySelector('.min-extraction') as HTMLInputElement).value);
  const max = parseInt((document.querySelector('.max-extraction') as HTMLInputElement).value);
  for (let i = 0; i < productItems.length; i++) {
    const extraction = productItems[i].querySelector('.mdc-card__extraction') as HTMLElement;
    if ((min >= parseInt(extraction.innerHTML.slice(-3, -1)), parseInt(extraction.innerHTML.slice(1)) <= max)) {
      (productItems[i] as HTMLElement).style.display = '';
    } else {
      (productItems[i] as HTMLElement).style.display = 'none';
    }
  }
}
//when I add the second slider, it doesn't work (even the functions provided by MD)
