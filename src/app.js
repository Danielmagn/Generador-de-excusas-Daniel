import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/chihuahuaphoto.jpg";


  //write your code here
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExcuse() {
  let aleatWho = getRandomElement(who);
  let aleatAction = getRandomElement(action);
  let aleatWhat = getRandomElement(what);
  let aleatWhen = getRandomElement(when);

  return `${aleatWho} ${aleatAction} ${aleatWhat} ${aleatWhen}.`;
}

window.onload = () => {
  const contenedor = document.getElementById('contenedor-excusas');

  for (let i = 0; i < 3; i++) {
    const p = document.createElement('p');
    p.textContent = generateExcuse();
    p.style.display = 'inline-block';
    p.style.margin = '0 15px';
    contenedor.appendChild(p);
  }
};
