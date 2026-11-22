// ---------------------------------------------------------------
// GALLERY PHOTOS
// To add a photo: put the image file in images/gallery/ and add
// one line to this list. Photos appear in the order listed.
//   file:    the filename inside images/gallery/
//   caption: short description, used as the caption and alt text
// ---------------------------------------------------------------
const photos = [
  { file: "world-map-music.jpg", caption: "Placeholder photo 1" },
  { file: "sitar.jpg", caption: "Placeholder photo 2" },
  { file: "choghur.jpg", caption: "Placeholder photo 3" },
  { file: "djembe.jpg", caption: "Placeholder photo 4" },
  { file: "bass-crab.jpg", caption: "Placeholder photo 5" },
  { file: "animal-jam.jpeg", caption: "Placeholder photo 6" },
  { file: "organ-rabbit.jpeg", caption: "Placeholder photo 7" },
];

// ---------------------------------------------------------------
// Everything below builds the grid and lightbox. No need to edit.
// ---------------------------------------------------------------
(function () {
  const folder = "images/gallery/";
  const grid = document.getElementById("gallery-grid");
  const dialog = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeButton = dialog.querySelector(".lightbox-close");

  photos.forEach((photo) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", "View larger: " + photo.caption);

    const thumb = document.createElement("img");
    thumb.src = folder + photo.file;
    thumb.alt = photo.caption;
    thumb.loading = "lazy";
    button.appendChild(thumb);

    button.addEventListener("click", () => {
      lightboxImage.src = folder + photo.file;
      lightboxImage.alt = photo.caption;
      lightboxCaption.textContent = photo.caption;
      dialog.showModal();
    });

    grid.appendChild(button);
  });

  closeButton.addEventListener("click", () => dialog.close());

  // Close when the backdrop (outside the image) is clicked.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    lightboxImage.src = "";
  });
})();
