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

export const getSuggestions = () => {
  //https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert
  {
    return fetch(
      `${API}/recipes/random?number=10&tags=vegetarian&${process.env.REACT_APP_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // var items = data;
        // console.log('ITEMS: ', items);
        return data;
        // items.products.map((product) => {
        //   console.log(product.title);
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

//https://api.spoonacular.com/food/menuItems/search?query=burger&number=2
export const getMenu = (item) => {
  return fetch(
    `${API}/food/menuItems/search?query=${item}&number=2&apiKey=${process.env.REACT_APP_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // var items = data;
      // console.log('ITEMS: ', items);
      return data;
      // items.products.map((product) => {
      //   console.log(product.title);
      // });
    })
    .catch((error) => {
      console.log(error);
    });
};
