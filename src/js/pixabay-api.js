import axios from 'axios';

const API_KEY = '32386885-8dbf1bc36075d10a6eaf5580b';
axios.defaults.baseURL = 'https://pixabay.com/';

const getImagesByQuery = query => {
  return axios('/api', {
    params: {
      key: API_KEY,
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'false',
    },
  })
    .then(res => res.data.hits)
    .catch(error => {
      console.log(error.message);
      return [];
    });
};
export default getImagesByQuery;
