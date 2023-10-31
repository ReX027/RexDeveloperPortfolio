
window.addEventListener("beforeunload", function() {
  document.documentElement.scrollTop = 0;
});
// Logo reload
function fun() {
  window.location.reload();
}

document.getElementById("linkedinlink").addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/tusharvaid/", "_blank");
});

// Animation in HomePage

var reveal1 = document.getElementById("reveal1");
var reveal2 = document.getElementById("reveal2");

var windowHeight = document.documentElement.clientHeight;

var reval1Y = reveal1.getBoundingClientRect().y;
var reval2Y = reveal2.getBoundingClientRect().y;

var carousel = document.getElementById('carouselExample');
window.addEventListener("scroll", function () {
  
  // carousel animation
  var carouselY = carousel.getBoundingClientRect().y;
  // var carouselYbottom = carousel.getBoundingClientRect().bottom;
  var carouselHeight = carousel.getBoundingClientRect().height;
  if(windowHeight >carouselY + carouselHeight*1/3){
    carousel.style.animation = 'transformcarousel 2s ease forwards';
  }
  // else if(windowHeight> carouselHeight){
  //   carousel.style.animation = 'transformcarouselback 2s ease backwards';
  // }
});
