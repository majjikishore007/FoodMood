export const addItemToBag = (item, next) => {
  console.log(item);
  let bag = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem('bag')) {
      bag = JSON.parse(localStorage.getItem('bag'));
    }
    bag.push({ ...item, count: 1 });
    localStorage.setItem('bag', JSON.stringify(bag));
    next();
  }
};

export const loadBag = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem('bag')) {
      return JSON.parse(localStorage.getItem('cart'));
    }
  }
};

// export const removeItemFromBag = (productId) => {
//   let bag = [];
//   if (typeof window !== undefined) {
//     if (localStorage.getItem('cart')) {
//       cart = JSON.parse(localStorage.getItem('cart'));
//     }
//     cart.map((product, i) => {
//       if (product._id == productId) {
//         cart.splice(i, 1);
//       }
//     });
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }
//   return cart;
// };

// export const bagEmpty = (next) => {
//   if (typeof window !== undefined) {
//     localStorage.removeItem('cart');
//     let cart = [];
//     localStorage.setItem('cart', JSON.stringify(cart));
//     next();
//   }
// };
