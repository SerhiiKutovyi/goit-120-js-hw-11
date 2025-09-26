import axios from 'axios';

const API_KEY = '32386885-8dbf1bc36075d10a6eaf5580b';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const getImagesByQuery = query => {
  return axios('', {
    params: {
      key: API_KEY,
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  })
    .then(res => res.data)
    .catch(error => {
      error.message;
      return [];
    });
};
export default getImagesByQuery;
