import getImagesByQuery from './js/pixabay-api';
import createGallery from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  img: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.search.value.trim();

  if (!query) {
    return;
  }

  getImagesByQuery(query).then(res =>
    refs.img.insertAdjacentHTML('beforeend', createGallery(res))
  );
});
