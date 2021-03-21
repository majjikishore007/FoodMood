export const addItemToCart = (item, next) => {
  // console.log('ITEMS', item);
  let pro = item.hits;
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    pro.forEach((item, index) => {
      cart.push(item);
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
  }
};
export const loadCart = () => {
  console.log('LODING cart');

  if (typeof window !== undefined) {
    if (localStorage.getItem('cart')) {
      // console.log(JSON.stringify(localStorage.getItem('cart')));

      return JSON.parse(localStorage.getItem('cart'));
    }
  }
};
export const cartEmpty = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem('cart');
    let cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
  }
};
