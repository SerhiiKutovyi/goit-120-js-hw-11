import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const 

const createGallery = images => {
  //   clearGallery();
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

export default createGallery;

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// const clearGallery = () => {
//   img.innerHTML = '';
// };

// const showLoader = () => {
//   img.innerHTML = 'Loading';
// };

// const hideLoader = () => {
//   img.innerHTML = '';
// };
