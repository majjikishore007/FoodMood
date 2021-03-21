// "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

export const search = (find) => {
  console.log('get searched', find);
  return fetch(
    `https://api.edamam.com/search?q=${find}&app_id=${process.env.REACT_APP_EDMAN_ID}&app_key=${process.env.REACT_APP_EDMAN_KEY}`,
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
