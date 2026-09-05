export const units = {
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

export function createFilterStr(params) {
  return Object.entries(params)
    .filter(([param]) => param in units)
    .map(([param, value]) => {
      return `${param}(${value}${units[param]})`;
    })
    .join(' ');
}
