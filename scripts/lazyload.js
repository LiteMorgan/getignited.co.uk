// LazyLoad
// Based on lazyload.js by deanhume
// https://github.com/deanhume/lazy-observer-load/blob/master/lazy-load.js

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

  for (let i = 0; i < images.length; i++) { 
    let image = images[i];
    if (image.classList.contains('js-lazyloaded')) {
      continue;
    }

    console.log(image);
    observer.observe(image);
  }
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
  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    preloadImage(image);
  }
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
  for (let i = 0; i < entries.length; i++) {
    let entry = entries[i];
    // Are we in viewport?
    if (entry.intersectionRatio > 0) {
      imageCount--;

      // Stop watching and load the image
      observer.unobserve(entry.target);
      preloadImage(entry.target);
    }
  }
};


function applyImage(img, src) {
  img.classList.remove('js-lazy-load-image');
  img.classList.add('js-lazyloaded');
  img.src = src;
  img.classList.add('post-image--loaded');
};