import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imageCard = createImageCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageCard);

function createImageCard(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="#">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;
    })
    .join("");
}

document.querySelector(".gallery").onclick = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  basicLightbox
    .create(
      `
		<img width="100%" height="100%" src="${e.target.dataset.source}">
	`
    )
    .show();
};
