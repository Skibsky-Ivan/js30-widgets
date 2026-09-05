import { createFilterStr } from '../utils/filter.js';

export async function loadGallery(src) {
  const response = await fetch(src);

  const galleryParams = await response.json();

  initGalleryImages(galleryParams);

  return galleryParams;
}

function initGalleryImages(galleryParams) {
  const galleryImgs = document.querySelectorAll('[data-type-img]');

  for (const img of galleryImgs) {
    const params = galleryParams[img.dataset.typeImg];

    if (!params) continue;

    img.style.filter = createFilterStr(params);
  }
}
