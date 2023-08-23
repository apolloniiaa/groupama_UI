const arrows = document.querySelectorAll('.collapsible-arrow');
arrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    const row = arrow.closest('.data-row');
    row.classList.toggle('hide');

    // Állítsd be a max-height értékét a sor megjelenítéséhez
    if (!row.classList.contains('hide')) {
      row.style.maxHeight = row.scrollHeight + 'px';
    } else {
      row.style.maxHeight = null;
    }
  });
});
