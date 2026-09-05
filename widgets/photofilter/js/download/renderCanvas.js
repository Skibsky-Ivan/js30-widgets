export function renderCanvas() {
  const previewImg = document.querySelector('.preview-image');

  const canvas = document.createElement('canvas');

  canvas.width = previewImg.clientWidth;
  canvas.height = previewImg.clientHeight;

  const context = canvas.getContext('2d');

  const style = getComputedStyle(previewImg);

  context.filter = style.filter;

  context.fillStyle = style.backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const paddingLeft = parseFloat(style.paddingLeft);
  const paddingTop = parseFloat(style.paddingTop);

  context.drawImage(
    previewImg,
    paddingLeft,
    paddingTop,
    canvas.width - paddingLeft * 2,
    canvas.height - paddingTop * 2,
  );

  return canvas;
}
