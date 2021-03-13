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
      return JSON.stringify(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSuggestions = () => {
  {
    return fetch(
      `${API}/recipes/random?number=10&tags=vegetarian&${process.env.REACT_APP_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export const getMenu = (item) => {
  return fetch(
    `${API}/food/menuItems/search?query=${item}&number=2&apiKey=${process.env.REACT_APP_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getRandom = () => {
  console.log('GET RANDOM');

  return fetch(
    `${API}/recipes/random?number=10&tags=chicken,briyani&apiKey=${process.env.REACT_APP_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
