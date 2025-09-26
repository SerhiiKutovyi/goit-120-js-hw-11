import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export const createGallery = (images, gallery) => {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class='gallery-img-item'>
        <a href='${largeImageURL}'>
          <img src="${webformatURL}" alt="${tags} "/>
        </a>
        <div class='gallery-wrapper-text'>
          <p class='gallery-img-text'>Likes <span class='gallery-span'>${likes}</span></p>
          <p class='gallery-img-text'>Views<span class='gallery-span'>${views}</span></p>
          <p class='gallery-img-text'>Comments<span class='gallery-span'>${comments}</span></p>
          <p class='gallery-img-text'>Downloads<span class='gallery-span'>${downloads}</span></p>
        </div>
      </li>
        `;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
};

export const clearGallery = gallery => {
  gallery.innerHTML = '';
};

export const showLoader = loader => {
  loader.classList.remove('hidden');
};

export const hideLoader = loader => {
  loader.classList.add('hidden');
};
