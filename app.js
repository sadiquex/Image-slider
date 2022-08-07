// bring in elements
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let activeSlide = 0;

// next button
rightButton.addEventListener("click", () => {
  activeSlide++;

  // if images are exhausted, reset the active slide to 0
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

// prev button
leftButton.addEventListener("click", () => {
  activeSlide--;

  // if images are exhausted, reset the active slide to 0
  if (activeSlide < 0) {
    activeSlide = slides.length-1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

// function to set background image same as foreground
function setBgToBody() {
  // set the background image of the index of each slide to the number on active slide
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[activeSlide].classList.add("active");
}
