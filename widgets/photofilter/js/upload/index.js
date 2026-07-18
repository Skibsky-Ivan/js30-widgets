const uploadImgBtn = document.querySelector('#image-upload');
const previewImg = document.querySelector('.preview-image');
const galleryImgs = document.querySelectorAll('.gallery-item-img');

function updateGalleryImgsSRC(src) {
  for (const img of galleryImgs) {
    img.src = src;
  }
}

function uploadImage(e) {
  const file = e.target.files[0];

  if (!file) return;

  const src = URL.createObjectURL(file);

  previewImg.src = src;

  updateGalleryImgsSRC(src);

  previewImg.onload = () => {
    URL.revokeObjectURL(src);
  };
}

export function initUpload() {
  uploadImgBtn.addEventListener('change', uploadImage);
}
