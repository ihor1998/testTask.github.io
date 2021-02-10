const events = JSON.parse(window.localStorage.getItem('events')) || [];

const cells = Array.from(document.querySelectorAll('[data-day]'));

function createElement() {
  events.forEach((elem) => {
    const cell = cells.find((el) => {
      return el.getAttribute('data-day') === elem.day &&
        el.getAttribute('data-time') === elem.time
    });
    cell.style.padding = 0;
    cell.innerHTML = `
        <div class="table__event">
            <span>${elem.name}</span>
            <i class="fa fa-times table__btn"></i>
        </div>
    `;
  });
}

createElement();
