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
