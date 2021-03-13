export const addItemToBag = (item, next) => {
  console.log(item);
  let bag = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem('recipe')) {
      bag = JSON.parse(localStorage.getItem('recipe'));
    }
    bag.push({ ...item, count: 1 });
    localStorage.setItem('recipe', JSON.stringify(bag));
    next();
  }
};
