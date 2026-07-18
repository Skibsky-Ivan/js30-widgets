// ================= FILTERS ==================
const containerFilters = document.querySelector('.filters-container');
const inputs = containerFilters.querySelectorAll('input');

function updateFilter(e) {
  const el = e.target;
  const suffix = el.dataset.sizing || '';

  document.documentElement.style.setProperty(`--${el.name}`, el.value + suffix);
}

inputs.forEach((input) => input.addEventListener('input', updateFilter));

// ==================== GALLERY FILTERS ================
const galleryImgs = document.querySelectorAll('[data-type-img]');
let galleryParams = {};

const units = {
  grayscale: '%',
  sepia: '%',
  saturate: '',
  'hue-rotate': 'deg',
  invert: '%',
  opacity: '%',
  brightness: '',
  contrast: '',
  blur: 'px',
};

function createFilterStr(params) {
  return Object.entries(params)
    .filter(([param]) => param in units)
    .map(([param, value]) => `${param}(${value}${units[param]})`)
    .join(' ');
}

function initPropartiesImg(imgs, imgsParams) {
  for (const img of imgs) {
    const params = imgsParams[img.dataset.typeImg];

    if (!params) continue;

    img.style.filter = createFilterStr(params);
  }
}

async function init(src) {
  const response = await fetch(src);
  galleryParams = await response.json();
  initPropartiesImg(galleryImgs, galleryParams);
}

init('./galleryParams.json');
