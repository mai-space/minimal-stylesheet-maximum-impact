const itemOnPage = (item) => {
  if (document.querySelector(item)) {
    return true;
  }
};

const init = () => {
  // Atoms
  // Molecules
  // Organisms
  // Templates
  // Utilities
  if (itemOnPage('.no-js')) import('./06-utilities/no-js').then((module) => module.default());
  // Vendor
};

window.addEventListener('load', () => init());
