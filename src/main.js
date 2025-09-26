import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import { btnDisabled, btnEnabled, formReset } from './js/utils.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader-position'),
  button: document.querySelector('.form-btn'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.search.value.trim();

  clearGallery(refs.gallery);

  if (!query) {
    return;
  }
  showLoader(refs.loader);
  btnDisabled(refs.button);

  getImagesByQuery(query)
    .then(res => {
      if (res.hits.length === 0) {
        iziToast.show({
          position: 'topRight',
          iconUrl: './img/Group (1).svg',
          messageColor: 'rgba(255, 255, 255, 1)',
          color: 'rgba(239, 64, 64, 1)',
          message:
            'Sorry, there are no images matching </br> your search query. Please try again!',
        });
      } else {
        createGallery(res.hits, refs.gallery);
      }
    })
    .catch(error => {
      error.message;
    })
    .finally(() => {
      formReset(refs.form);
      hideLoader(refs.loader);
      btnEnabled(refs.button);
    });
});
