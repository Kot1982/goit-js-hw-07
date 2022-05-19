import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryItems = document.querySelector(".gallery");
const markup = createGalleryMarkup(galleryItems);

listGalleryItems.insertAdjacentHTML("afterbegin", markup);
listGalleryItems.addEventListener("click", onGalleryItemsClick);
listGalleryItems.addEventListener("keydown", onGalleryItemsClose);

function createGalleryMarkup(galleryItems) {
	return galleryItems
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
</div>
`;
		})
		.join("");
}

let instance;

function onGalleryItemsClick(event) {
	event.preventDefault();

	if (!event.target.classList.contains("gallery__image")) {
		return;
	}

	instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);

	instance.show();
}

function onGalleryItemsClose(event) {
	if (event.code === "Escape") {
		instance.close();
	}
}
