import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryBox = document.querySelector('.gallery');

const markup = newGalleryItems(galleryItems);

galleryBox.insertAdjacentHTML('afterbegin', markup);

function newGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class = "gallery__item" href="${original}"><img class = "gallery__image" src="${preview}" alt=${description}/></a>`;
    })
    .join('');
}

const newLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 325,
});
