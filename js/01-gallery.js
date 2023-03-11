import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imageCard = createImageCard(galleryItems);
//const basicLightboxOn = document.querySelector("");

galleryContainer.insertAdjacentHTML("beforeend", imageCard);

function createImageCard(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
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

const lightBox = (document.querySelector(".gallery").onclick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img width="100%" height="100%" src="${e.target.dataset.source}">`
  );
  instance.show();
  if (instance.visible()) {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        instance.close();
        console.log(e);
      }
    });
  }
  if (!instance.visible()) {
    window.removeEventListener("keydown", e);
  }
});
