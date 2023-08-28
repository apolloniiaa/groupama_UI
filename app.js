// "Dropdown "nyíl mükődése
document.addEventListener('DOMContentLoaded', function () {
  const toggleIcons = document.querySelectorAll('.toggle-icon');

  toggleIcons.forEach((icon) => {
    icon.addEventListener('click', function () {
      const row = this.closest('.toggle-icon');
      const rowsToShow = row.parentNode.querySelectorAll('.show-more');
      rowsToShow.forEach((row) => {
        row.style.display = row.style.display === 'none' ? 'table-row' : 'none';
      });
    });
  });
});

//Karakterek minimalizálása

document.addEventListener('DOMContentLoaded', function () {
  const identifierSpans = document.querySelectorAll('.identifier');

  identifierSpans.forEach((span) => {
    const originalText = span.innerText;
    const maxLength = 7;
    const shortText =
      originalText.length > maxLength
        ? originalText.slice(0, maxLength) + '...'
        : originalText;

    span.innerText = shortText;

    span.addEventListener('click', function () {
      if (span.innerText === shortText) {
        span.innerText = originalText;
      } else {
        span.innerText = shortText;
      }
    });
  });
});

//"Dropdown "nyíl mükődése mobilon
document.addEventListener('DOMContentLoaded', function () {
  const hideElements = function () {
    const elementsToHide = document.querySelectorAll('.show-more-mobile');
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    if (windowWidth <= 1024) {
      elementsToHide.forEach((element) => {
        element.style.display = 'none';
      });
    } else {
      elementsToHide.forEach((element) => {
        element.style.display = '';
      });
    }
  };

  hideElements();

  window.addEventListener('resize', hideElements);
});
function alignTableColumns() {
  const firstTableHeadCells = document.querySelectorAll(
    '.showing-line th:not(.mobile-only)'
  );
  const otherTables = document.querySelectorAll(
    '.common-table-height tbody tr'
  );

  otherTables.forEach((row) => {
    const cells = row.querySelectorAll('td:not(.mobile-only)');

    cells.forEach((cell, index) => {
      const correspondingHeaderCell = firstTableHeadCells[index];
      if (correspondingHeaderCell) {
        cell.style.width = getComputedStyle(correspondingHeaderCell).width;
      }
    });
  });
}

window.addEventListener('load', alignTableColumns);
