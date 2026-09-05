import { renderCanvas } from './renderCanvas.js';
import { saveBlob } from './saveBlob.js';

export function initDownload() {
  const button = document.querySelector('.button-download');

  button.addEventListener('click', () => {
    const canvas = renderCanvas();

    canvas.toBlob((blob) => {
      saveBlob(blob);
    }, 'image/png');
  });
}
