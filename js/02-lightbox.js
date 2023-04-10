import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGallery = (array) => {
  const items = array
    .map(
      (n) => `<li>
  <a class="gallery__link" href="${n.original}">
    <img
      class="gallery__image"
      src="${n.preview}"
      alt="${n.description}"
    />
  </a>
</li>`
    )
    .join("");

  gallery.insertAdjacentHTML("afterbegin", items);
};

createGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
