import { createImageSlider } from './createImageSlider';
import img1 from './images/wallhaven-8xz1mk.jpg';
// import img2 from './images/wallhaven-39vzm3.jpg';
// import img3 from './images/wallhaven-eywz3k.jpg';
// import img4 from './images/wallhaven-x8xjel.jpg';
// import img5 from './images/wallhaven-ym681g.jpg';
import './styles/index.css';

const rootElem = document.querySelector('div#root');
rootElem.appendChild(
  createImageSlider([
    { url: img1, description: 'Image' },
    // { url: img2, description: 'Image' },
    // { url: img3, description: 'Image' },
    // { url: img4, description: 'Image' },
    // { url: img5, description: 'Image' },
  ])
);
