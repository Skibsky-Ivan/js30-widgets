export function saveBlob(blob) {
  const link = document.createElement('a');

  link.download = 'example.png';

  link.href = URL.createObjectURL(blob);

  link.click();

  URL.revokeObjectURL(link.href);
}
