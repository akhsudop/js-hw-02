import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGallery = (array) => {
  const items = array
    .map(
      (n) => `<div class="gallery__item">
  <a class="gallery__link" href="${n.original}">
    <img
      class="gallery__image"
      src="${n.preview}"
      data-source="${n.original}"
      alt="${n.description}"
    />
  </a>
</div>`
    )
    .join("");

  gallery.insertAdjacentHTML("afterbegin", items);
};

createGallery(galleryItems);

const openImg = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}">
    `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", ({ code }) => {
          if (code === "Escape") {
            instance.close();
          }
        });
      },
    }
  );

  instance.show();
};

gallery.addEventListener("click", openImg);

// const escapeModal = ({ code }) => {
//   if (!document.querySelector(".basicLightbox")) {
//     return;
//   }
//   if (code === "Escape") {
//     document.querySelector(".basicLightbox").remove();
//   }
// };

// document.addEventListener("keyup", escapeModal);
