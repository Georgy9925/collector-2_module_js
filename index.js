console.log('Hello world!')

import jsLogo from './assets/Logojs.jpeg';
import './index.css'
const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';

const img = document.createElement('img');
img.src = jsLogo;
img.alt = 'JavaScript Logo';

document.body.append(h1, img);