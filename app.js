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

document.addEventListener('DOMContentLoaded', function () {
  var tableWraps = document.querySelectorAll('.table-wrap');

  tableWraps.forEach(function (tableWrap) {
    var nmtTable = tableWrap;
    var nmtHeadRow = nmtTable.querySelector('thead tr');
    var rows = nmtTable.querySelectorAll('tbody tr');

    rows.forEach(function (row) {
      var curRow = row;
      var cells = curRow.querySelectorAll('td');

      cells.forEach(function (cell, i) {
        var headSelector = 'th:nth-child(' + (i + 1) + ')';
        var headerCell = nmtHeadRow.querySelector(headSelector);
        cell.setAttribute('data-title', headerCell.textContent);
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var rows = document.querySelectorAll('.table tbody tr');

  rows.forEach(function (row) {
    if (row.classList.contains('texti')) {
      row.style.backgroundColor = 'green'; // Zöld a texti class-t használó soroknak
    } else {
      row.style.backgroundColor = 'white'; // Fehér a többi soroknak
    }
  });

  var thead = document.querySelector('.table thead');
  thead.style.backgroundColor = '#01bba1'; // Kék a thead háttérszíne
});

const textiElements = document.querySelectorAll('.texti');

document.addEventListener('DOMContentLoaded', function () {
  const textiElements = document.querySelectorAll('.texti');

  textiElements.forEach((element) => {
    element.classList.add('white-text-black-bg');
  });
});
