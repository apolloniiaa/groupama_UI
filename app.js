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

//Más háttérszín a táblázat fejlécének
const textiElements = document.querySelectorAll('.texti');

document.addEventListener('DOMContentLoaded', function () {
  const textiElements = document.querySelectorAll('.texti');

  textiElements.forEach((element) => {
    element.classList.add('white-text-black-bg');
  });
});

//Azonsító
document.addEventListener('DOMContentLoaded', function () {
  const azonositoSpans = document.querySelectorAll('.azonosito');

  azonositoSpans.forEach((span) => {
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
