import './index.css';
import JS_IMAGE from './assets/JavaScript.png';

console.log('Hello World!');

const h1 = document.createElement('h1');
const body = document.querySelector('body');
h1.textContent = 'I love JavaScript';
body.append(h1);

const imageHtml = document.createElement('img');
imageHtml.src = JS_IMAGE;
imageHtml.className = 'image';
body.append(imageHtml);
