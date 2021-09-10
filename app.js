/* const lis = document.querySelectorAll('li');
lis.forEach((li, index) => {
  if (index > 0) {
    if (li.textContent === '') {
      li.textContent = '-';
    };
  };
}); */

const media = window.matchMedia('(max-width: 769px)');
const days = document.querySelectorAll('.day');

if (media.matches) { document.addEventListener('DOMContentLoaded', setDay()) }

function setDay() {
  const time = new Date();
  switch (time.getDay()) {
    case 1: removeDays(1); break;
    case 2: removeDays(2); break;
    case 3: removeDays(3); break;
    case 4: removeDays(4); break;
    case 5: removeDays(5); break;
    case 6: removeDays(6); break;
    case 0: removeDays(0); break;
  }

  function removeDays(i) {
    if (i > 0 && i < 6) {
      days.forEach((day, index) => {
        if (index !== i - 1) {
          day.style.display = 'none';
        }
      });
    }
  }
}
