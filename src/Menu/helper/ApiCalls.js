import { API } from '../../foodApi';
// https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY
export const getSerchedItem = (find) => {
  console.log('get searched', find);
  return fetch(
    `${API}/food/products/search?query=${find}&apiKey=${process.env.REACT_APP_KEY}`,
    {
      method: 'GET',
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log('data', data);
      return JSON.stringify(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
