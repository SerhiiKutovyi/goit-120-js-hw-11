// import getImagesByQuery from './js/pixabay-api';

import axios from 'axios';

const API_KEY = '32386885-8dbf1bc36075d10a6eaf5580b';
axios.defaults.baseURL = 'https://pixabay.com/';

axios('/api', {
  params: {
    key: API_KEY,
    q: 'car',
    image_type: 'photo',
  },
})
  .then(res => console.log(res.data.hits))
  .catch(() => console.log('error'));
