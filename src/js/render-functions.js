import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export const createGallery = images => {
  return images
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
      <li>
        <a href='${largeImageURL}'>
          <img src="${webformatURL}" alt="${tags} "/>
        </a>
        <div class='wrapper'>
          <p>${likes}</p>
          <p>${views}</p>
          <p>${comments}</p>
          <p>${downloads}</p>
        </div>
      </li>
        `;
      }
    )
    .join('');
};

export const initLightbox = () => {
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
};

// const clearGallery = () => {
//   img.innerHTML = '';
// };

// const showLoader = () => {
//   img.innerHTML = 'Loading';
// };

// const hideLoader = () => {
//   img.innerHTML = '';
// };
