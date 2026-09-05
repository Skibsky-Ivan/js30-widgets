import { loadGallery } from './loadGallery.js';
import { applyPreset } from './applyPreset.js';

export async function initGallery() {
  const galleryParams = await loadGallery('./js/gallery/galleryParams.json');

  const galleryContainer = document.querySelector('.gallery-container');

  galleryContainer.addEventListener('click', (e) => {
    const galleryImg = e.target.closest('.gallery-item-img');

    if (!galleryImg) return;

    const params = galleryParams[galleryImg.dataset.typeImg];

    applyPreset(params);
  });

  const buttonReset = document.querySelector('.button-reset');

  buttonReset.addEventListener('click', () => {
    applyPreset(galleryParams.Default);
  });
}
