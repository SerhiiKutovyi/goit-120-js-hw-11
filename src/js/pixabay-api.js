import axios from 'axios';

// API_KYI = '32386885-8dbf1bc36075d10a6eaf5580b';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

axios
  .get(
    'https://pixabay.com/api/?key=32386885-8dbf1bc36075d10a6eaf5580b&q=yellow+flowers&image_type=photo'
  )
  .then(res => console.log(res.hits))
  .catch(() => console.log('error'));

// export const getImagesByQuery = query => {
//   axios();
// };
