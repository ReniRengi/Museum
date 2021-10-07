export function initForm() {
  window.addEventListener('load', () => loadForm());
}

function loadForm() {
  let modal = document.getElementById('byTicketModal');
  let btn = document.getElementById('total-button');
  let span = document.getElementsByClassName('close')[0];
  const hideModal = () => modal.classList.add('hidden');
  const showModal = () => modal.classList.remove('hidden');
if (btn && span) {
    btn.onclick = () => showModal();
    span.onclick = () => hideModal();
  }


const form=document.getElementById("ticket-form");
const nameP=document.getElementById("name");
const email=document.getElementById("email");
const date=document.getElementById("date");
const time=document.getElementById("time");
const phone=document.getElementById("phone");
const ticketType=document.getElementById("ticket-type");

let regTel=/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/ //проверка номера телефона
let regEm=/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
let regNam=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[А-Я])(?=.*[а-я])(?=.*[A-Z])(?=.*[а-я])(?=.*\s)/;

/*form.addEventListener('submit', function (e) {
  e.preventDefault();

});*/


const isRequired = value => value === '' ? false : true; // проверка значения на пустоту;

const isBetween = (length, min, max) => length < min || length > max ? false : true;//проверка на длину;

const isNameValid = (nameP) => {
 let re=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[А-Я])(?=.*[а-я])(?=.*[A-Z])(?=.*[а-я])(?=.*\s)")
 return re.test(nameP);
}


  
  // createRipple();
}

/*
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
  button.addEventListener('click', createRipple);
}



form.addEventListener('submit', function (e) {
  e.preventDefault();

});

const isRequired = value => value === '' ? false : true; // проверка значения на пустоту;

const isBetween = (length, min, max) => length < min || length > max ? false : true;//проверка на длинуж

const isNameValid = (nameP) => {

}
 */