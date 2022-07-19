import './search.scss';

export function search() {
  const input = document.querySelector('.search') as HTMLInputElement;
  const filter = input.value.toUpperCase();
  const products = document.querySelector('.main') as HTMLElement;
  const productItems = products.getElementsByClassName('mdc-card') as HTMLCollection;

  for (let i = 0; i < productItems.length; i++) {
    const name = productItems[i].querySelector('.mdc-card__name') as HTMLElement;
    if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
      (productItems[i] as HTMLElement).style.display = '';
    } else {
      (productItems[i] as HTMLElement).style.display = 'none';
    }
  }
}
