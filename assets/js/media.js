// slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = $$(".swiper-slide");
    let bullet = $$(".swiper-pagination-bullet");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].style.opacity = "0";
    }
    slideIndex++;
    delete a
    delete b
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < bullet.length; i++) {
      bullet[i].className = bullet[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.opacity = "1";
    bullet[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
  }


// click
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// function showSlides(n) {
//   let i;
//   let slides = $$(".swiper-slide");
//   let bullet = $$(".swiper-pagination-bullet");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < bullet.length; i++) {
//     bullet[i].className = bullet[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   bullet[slideIndex-1].className += " active";

// }