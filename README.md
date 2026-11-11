# Music Across Borders website

A simple static site with three pages: Vision, Contact and Gallery.

## Files

- `index.html`: Vision page (home)
- `events.html`: Events page
- `contact.html`: Contact page
- `gallery.html`: Gallery page
- `styles.css`: shared styles
- `gallery.js`: the list of gallery photos, and the code that builds the grid and larger view
- `images/gallery/`: the gallery photos

## Adding photos to the gallery

1. Put the image file in `images/gallery/`.
2. Open `gallery.js` and add one line to the `photos` list at the top:

   ```js
   { file: "my-photo.jpg", caption: "Short description of the photo" },
   ```

## Testing locally

Run a simple local server from the project folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
