import { MDCRipple } from '@material/ripple';
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button') as HTMLButtonElement);
console.log(buttonRipple);

let count = 0;
const main = document.querySelector('.main') as HTMLElement;
export function cartCounter() {
  //const btn = document.querySelector('.mdc-button') as HTMLButtonElement;
  main.addEventListener('click', (event: Event) => {
    console.log(event.target);
    if (
      (event.target as HTMLElement) === buttonRipple.root ||
      (event.target as HTMLElement).className === 'mdc-button__label'
    ) {
      count++;
      (document.querySelector('.header__cart-counter') as HTMLElement).textContent = String(count);
    }
  });
}
