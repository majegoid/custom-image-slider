import './styles/image-slider.css';

/** Takes an array of image objects: string url, string description */
export function createImageSlider(
  imageDataList = [
    {
      url: 'images/wallhaven-8xz1mk.jpg',
      description: 'Image 1',
    },
  ],
  transitionDelayMs = 5000
) {
  const imageSlides = [];
  let activeImageSlide = null;
  let nextSlideIntervalTimerId = null;

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
  previousSlideButton.onclick = () => {
    const activeSlideIndex = imageSlides.indexOf(activeImageSlide);
    let nextSlideIndex = activeSlideIndex - 1;
    if (nextSlideIndex < 0) {
      nextSlideIndex = imageSlides.length - 1;
    }
    changeActiveImageSlide(nextSlideIndex);
  };
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
  activeImageSlide.classList.add('visible'); //make initial image visible

  function changeActiveImageSlide(imageSlideIndex = 0) {
    const nextImageSlide = imageSlides[imageSlideIndex];
    activeImageSlide.classList.remove('visible');
    nextImageSlide.classList.add('visible');
    activeImageSlide = nextImageSlide;
    resetMoveToNextSlideTimer();
  }

  const nextSlideButton = document.createElement('button');
  nextSlideButton.classList.add('image-slider-button', 'next-slide-button');
  nextSlideButton.textContent = '>';
  nextSlideButton.onclick = () => {
    const activeSlideIndex = imageSlides.indexOf(activeImageSlide);
    const nextSlideIndex = (activeSlideIndex + 1) % imageSlides.length;
    changeActiveImageSlide(nextSlideIndex);
  };
  imageSlider.appendChild(nextSlideButton);

  function resetMoveToNextSlideTimer() {
    clearInterval(nextSlideIntervalTimerId);
    startMoveToNextSlideTimer(transitionDelayMs);
  }

  // every 5 seconds, go to the next slide
  function startMoveToNextSlideTimer(delayMilliseconds = 5000) {
    nextSlideIntervalTimerId = setInterval(() => {
      const activeSlideIndex = imageSlides.indexOf(activeImageSlide);
      const nextSlideIndex = (activeSlideIndex + 1) % imageSlides.length;
      changeActiveImageSlide(nextSlideIndex);
    }, delayMilliseconds);
  }

  startMoveToNextSlideTimer(transitionDelayMs);

  return imageSlider;
}
