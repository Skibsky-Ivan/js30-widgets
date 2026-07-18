import { units } from '../utils/filter.js';

function updateFilterInputs(params) {
  const inputs = document.querySelectorAll('.filter-input');

  for (const input of inputs) {
    const value = params[input.name];

    if (value === undefined) continue;

    input.value = value;
  }
}

export function applyPreset(params) {
  for (const [param, value] of Object.entries(params)) {
    document.documentElement.style.setProperty(
      `--${param}`,
      value + units[param],
    );
  }

  updateFilterInputs(params);
}
