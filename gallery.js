// ---------------------------------------------------------------
// GALLERY PHOTOS
// To add a photo: put the image file in images/gallery/ and add
// one line to this list. Photos appear in the order listed.
//   file:    the filename inside images/gallery/
//   caption: short description, used as the caption and alt text
// ---------------------------------------------------------------
const photos = [
  { file: "placeholder-1.svg", caption: "Placeholder photo 1" },
  { file: "logo-black.jpeg", caption: "Placeholder photo 2" },
  { file: "placeholder-3.svg", caption: "Placeholder photo 3" },
  { file: "logo-white.jpeg", caption: "Placeholder photo 4" },
  { file: "placeholder-5.svg", caption: "Placeholder photo 5" },
  { file: "3368f4.jpeg", caption: "Placeholder photo 6" },
  { file: "196501.jpeg", caption: "Placeholder photo 7" },
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
