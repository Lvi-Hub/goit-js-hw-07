// Імпортуємо галерею з фото
import { galleryItems } from "./gallery-items.js";
// Change code below this line
//--
const galleryContainer = document.querySelector(".gallery"); // Знаходимо об'єкт
//--

const imageCard = createImageCard(galleryItems); // Функція для створенню карток з фото
galleryContainer.insertAdjacentHTML("beforeend", imageCard);
function createImageCard(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <li >
        <a  class="gallery__item" href="${original}">
            <img style="display: block"
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.on("show.simplelightbox", function () {});

lightbox.on("error.simplelightbox", function (e) {
  console.log(e);
});
