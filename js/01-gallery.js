import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const newImages = [...galleryItems]
  .map(
    (galleryItem) =>
      `
    <li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="large-image.jpg"
      alt="${galleryItem.description}"
    />
  </a>
</li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", newImages);

const images = document.querySelectorAll(".gallery__item");

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.preventDefault();

    const instance = createImage(image.children[0]["href"]);
    instance.show();

    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
  });
});

function createImage(link) {
  return basicLightbox.create(`
    <img src="${link}">
`);
}
