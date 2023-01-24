import './styles/image-slider.css';

export function createImageSlider(
  imageDataList = [
    {
      url: 'images/wallhaven-8xz1mk.jpg',
      description: 'Image 1',
    },
  ]
) {
  const imageSlides = [];
  let activeImageSlide = null;

  // <div class="image-slider">
  //   <button class="image-slider-button previous-slide-button"></button>
  //   <div>
  //     <img src="" />
  //     <img src="images/wallhaven-8xz1mk.jpg" alt="2" />
  //     <img src="images/wallhaven-eywz3k.png" alt="3" />
  //     <img src="images/wallhaven-x8xjel.png" alt="4" />
  //     <img src="images/wallhaven-ym681g.jpg" alt="5" />
  //   </div>
  //   <button class="image-slider-button next-slide-button"></buttonc>
  // </div>

  const imageSlider = document.createElement('div');
  imageSlider.className = 'image-slider';

  const previousSlideButton = document.createElement('button');
  previousSlideButton.classList.add(
    'image-slider-button',
    'previous-slide-button'
  );
  previousSlideButton.textContent = '<';
  imageSlider.appendChild(previousSlideButton);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  imageSlider.appendChild(imageContainer);

  for (const imageData of imageDataList) {
    const image = document.createElement('img');
    image.classList = 'image-slide';
    image.src = imageData.url;
    image.alt = imageData.description;
    imageSlides.push(image); //add image to image array
    imageContainer.appendChild(image);
  }
  activeImageSlide = imageSlides[0]; //set initial image slide to be the first one
  activeImageSlide.classList.add('visible');

  function changeActiveImageSlide(imageSlideIndex = 0) {
    activeImageSlide.classList.remove('visible');
    const nextImageSlide = imageSlides[imageSlideIndex];
    nextImageSlide.classList.add('visible');
    activeImageSlide = nextImageSlide;
  }

  const nextSlideButton = document.createElement('button');
  nextSlideButton.classList.add('image-slider-button', 'next-slide-button');
  nextSlideButton.textContent = '>';
  nextSlideButton.onclick = () => {
    console.log('next');
    console.log(activeImageSlide);

    const activeSlideIndex = imageSlides.indexOf(activeImageSlide);
    const nextSlideIndex = (activeSlideIndex + 1) % imageSlides.length;
    changeActiveImageSlide(nextSlideIndex);
  };
  imageSlider.appendChild(nextSlideButton);

  return imageSlider;
}
