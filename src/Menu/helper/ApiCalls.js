import { API } from '../../foodApi';
// https://api.spoonacular.com/food/menuItems/search?query=sandwicha&number=8&apiKey=f9a8878ae3ef4dc0b445c9cbf435e628
export const getSerchedItem = (find) => {
  console.log('get searched', find);
  return fetch(
    `${API}food/menuItems/search?query=${find}&number=8&apiKey=${process.env.REACT_APP_KEY}`,
    {
      method: 'GET',
    }
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
export const getRandom = (find) => {
  console.log('GET RANDOM');

  return fetch()
  // `${API}/recipes/random?number=10&tags=${find}&apiKey=${process.env.REACT_APP_KEY}`
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('RES:', data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
