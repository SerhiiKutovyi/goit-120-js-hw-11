import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  initLightbox,
  clearGallery,
} from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.search.value.trim();

  clearGallery(refs.gallery);

  if (!query) {
    return;
  }

  getImagesByQuery(query)
    .then(res => {
      console.log(res);

      if (res.hits.length === 0) {
        iziToast.show({
          title: 'Hey',
          message: 'What would you like to add?',
        });
      } else {
        refs.gallery.insertAdjacentHTML('beforeend', createGallery(res.hits));
        initLightbox();
      }
    })
    .catch(error => {
      error.message;
    });
});
