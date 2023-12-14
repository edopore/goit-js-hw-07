import { galleryItems } from "./gallery-items.js";
// Change code below this line

let gallery = document.querySelector(".gallery");

const newImages = [...galleryItems]
  .map(
    (galleryItem) =>
      `
<li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
   </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", newImages);

gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {});

gallery.on("error.simplelightbox", function (e) {
  console.log(e); // Some usefull information
});
