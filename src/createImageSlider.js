import './styles/image-slider.css';

export function createImageSlider(
  imageDataList = [
    {
      url: 'images/wallhaven-8xz1mk.jpg',
      description: 'Image 1',
    },
  ]
) {
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
    imageContainer.appendChild(image);
  }

  const nextSlideButton = document.createElement('button');
  nextSlideButton.classList.add('image-slider-button', 'next-slide-button');
  nextSlideButton.textContent = '>';
  imageSlider.appendChild(nextSlideButton);

  return imageSlider;
}
