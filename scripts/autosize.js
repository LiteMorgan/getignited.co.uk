const sizes    = document.querySelectorAll('.js-autosize');
let sizesCount = sizes.length;


function calculateRatio(image) {
  const imageWidth   = image.dataset.width ? image.dataset.width : 1860;
  const imageHeight  = image.dataset.height;
  const imageWrapper = image.parentNode;

  if (!imageHeight) {
    return;
  };

  let ratio = (imageHeight / imageWidth) * 100;
  ratio = ratio + '%';

  imageWrapper.style.paddingBottom = ratio;
};


function getImages() {
  for (let i = 0; i < sizes.length; i++) {
    let size = sizes[i];

    calculateRatio(size);
  };
};


getImages();