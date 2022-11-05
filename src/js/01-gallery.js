import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const refs = {
  galerry: document.querySelector('.gallery'),
};

refs.galerry.insertAdjacentHTML(
  'afterbegin',
  createGalleryItemsMarkup(galleryItems)
);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
  scrollZoomFactor: 0.1,
});
console.log(galleryItems);
console.log(SimpleLightbox);
