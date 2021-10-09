export function initTicket() {
  window.addEventListener('load', () => addTicket());
}

function addTicket() {
  const form = document.getElementById('booking-form');

  form.addEventListener('click', function () {
    const item = form.querySelector('input[name="radio"]:checked').value;
    const value1 = document.getElementById('num1').value;
    const value2 = document.getElementById('num2').value;
    const price = document.getElementById('price');
    const total = item * value1 + item * value2 / 2;

    price.innerHTML = total;
    window.ticketValue1=value1;
    window.ticketValue2=value2;
    window.ticketItem=item;
    window.ticketPrime=total;
  });
}
