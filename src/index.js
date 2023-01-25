import { createImageSlider } from './createImageSlider';
import img2 from './images/wallhaven-39vzm3.jpg';
import img1 from './images/wallhaven-8xz1mk.jpg';
import img3 from './images/wallhaven-eywz3k.png';
import img4 from './images/wallhaven-x8xjel.png';
import img5 from './images/wallhaven-ym681g.jpg';
import './styles/index.css';

const rootElem = document.querySelector('div#root');
const imageSlider = createImageSlider(
  [
    { url: img1, description: 'Image' },
    { url: img2, description: 'Image' },
    { url: img3, description: 'Image' },
    { url: img4, description: 'Image' },
    { url: img5, description: 'Image' },
  ],
  5000,
  '500px',
  '500px'
);
rootElem.appendChild(imageSlider);
