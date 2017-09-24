// Get all of the image that are marked up to lazy load
const images = document.querySelectorAll('.js-lazy-load-image');
const config = {
  // If the image gets within 50px in the Y axis, start the download.
  rootMargin: '50px 0px',
  threshold:  0.01
};

let imageCount = images.length;
let observer;


// If we don't have support for intersection observer, load the images
if (!('IntersectionObserver' in window)) {
  loadImagesImmediately(images);
} else {
  observer = new IntersectionObserver(onIntersection, config);

  images.forEach(image => {
    observer.observe(image);
  });
}


function fetchImage(url) {
  return new Promise((resolve, reject) => {
    const image   = new Image();
    image.src     = url;
    image.onload  = resolve;
    image.onerror = reject;
  });
};


function preloadImage(image) {
  const src = image.dataset.src;

  if (!src) {
    return;
  }
  return fetchImage(src).then(() => { applyImage(image, src); });
};


function loadImagesImmediately(images) {
  forEach(image => {
    preloadImage(image);
  });
};


function disconnect() {
  if (!observer) {
    return;
  }

  observer.disconnect();
}


function onIntersection(entries) {

  if (imageCount === 0) {
    observer.disconnect();
  }
  // Loop through the entries
  entries.forEach(entry => {
    // Are we in viewport?
    if (entry.intersectionRatio > 0) {

      // Stop watching and load the image
      observer.unobserve(entry.target);
      preloadImage(entry.target);
    }
  });
};


function applyImage(img, src) {
  img.classList.add('js-lazy-load-image--handled');
  img.src = src;
}