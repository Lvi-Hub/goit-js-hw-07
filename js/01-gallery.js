// Імпортуємо галерею з фото
import { galleryItems } from "./gallery-items.js";
// Change code below this line
//--
const galleryContainer = document.querySelector(".gallery"); // Знаходимо об'єкт
galleryContainer.addEventListener(`click`, createBasicLightbox); // Ловима клік

//--
const imageCard = createImageCard(galleryItems); // Функція по створенню карток з фото
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
//--
function createBasicLightbox(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
  instance.show();

  window.addEventListener(`keydown`, closeLightbox);
  function closeLightbox(e) {
    console.log(e);
    if (e.code !== "Escape") {
      return;
    }
    window.removeEventListener(`keydown`, closeLightbox);
    instance.close();
  }
}
