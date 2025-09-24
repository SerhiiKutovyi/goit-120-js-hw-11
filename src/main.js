import getImagesByQuery from './js/pixabay-api';
import { createGallery, initLightbox } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  img: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.search.value.trim();

  refs.img.innerHTML = '';

  if (!query) {
    return;
  }

  getImagesByQuery(query)
    .then(res => {
      refs.img.insertAdjacentHTML('beforeend', createGallery(res));
      initLightbox();
    })
    .catch(error => {
      error.message;
    });
});
