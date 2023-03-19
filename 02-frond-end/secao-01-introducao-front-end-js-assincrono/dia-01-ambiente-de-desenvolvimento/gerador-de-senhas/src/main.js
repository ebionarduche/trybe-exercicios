import { nanoid } from 'nanoid';
import './style.css';

const passwordBt = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
console.log(passwordBt);

passwordBt.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});
