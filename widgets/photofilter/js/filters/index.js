const containerFilters = document.querySelector('.filters-container');
const filterInputs = containerFilters.querySelectorAll('.filter-input');

function updateFilter(e) {
  const input = e.target;

  const suffix = input.dataset.sizing || '';

  document.documentElement.style.setProperty(
    `--${input.name}`,
    input.value + suffix,
  );
}

export function initFilters() {
  filterInputs.forEach((input) => {
    input.addEventListener('input', updateFilter);
  });
}
