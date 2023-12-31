
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

// navbar animation
const menulinks = document.querySelectorAll('nav ul li > a');
function removeActiveClass() {
  document.querySelector('.activebtn').classList.remove('activebtn');
}
menulinks.forEach(menulinks =>{
  menulinks.addEventListener('click',()=>{
    removeActiveClass();
    menulinks.classList.add('activebtn');
  })
  if(document.documentElement.scrollTop===0){
    // document.querySelector('.activebtn').classList.remove('activebtn');
    removeActiveClass();
    document.querySelector('.homelink').classList.add('activebtn');
  }
})

const offcanvasbtn = document.querySelector('.offcanvas button');
offcanvasbtn.addEventListener('click', () => {
  document.querySelector('.activebtn').classList.remove('activebtn');
  document.querySelector('.homelink').classList.add('activebtn');
});

const contactlink = document.querySelector('.contactlink');
contactlink.addEventListener('click',()=>{
  document.querySelector('.activebtn').classList.remove('activebtn');
  document.querySelector('.homelink').classList.add('activebtn');
})
// Animation in HomePage

const windowHeight = document.documentElement.clientHeight;

// firstsection reveal variables
const reveal1 = document.getElementById("reveal1");
const reveal2 = document.getElementById("reveal2");
const reveal1Y = reveal1.getBoundingClientRect().y;
const reveal2Y = reveal2.getBoundingClientRect().y;
const reveal1Height = reveal1.getBoundingClientRect().height;
const reveal2Height = reveal2.getBoundingClientRect().height;

// Carousel variables
const carousel = document.getElementById('carouselExample');
const carouselY = carousel.getBoundingClientRect().y;
const carouselHeight = carousel.getBoundingClientRect().height;

// scroll event listener
const currentScrollPos = window.scrollY;
const projectTop = document.querySelector('#Project').offsetTop;
const offcanvas = document.querySelector('.offcanvas');
window.addEventListener("scroll", function () {
  // navbar scroll animation
  offcanvas.addEventListener('hide.bs.offcanvas', () => {
    if (currentScrollPos >= 2/3*projectTop) {
      document.querySelector('a[href="#Project"]').classList.add('activebtn');
      document.querySelector('.homelink').classList.remove('activebtn');
    }else{
      document.querySelector('.homelink').classList.add('activebtn');
      document.querySelector('.activebtn').classList.remove('activebtn');
    }
  });
  if(currentScrollPos >= 2/3*projectTop){
    document.querySelector('.homelink').classList.remove('activebtn');
    document.querySelector('a[href="#Project"]').classList.add('activebtn');
  }else{
    document.querySelector('a[href="#Project"]').classList.remove('activebtn');
    document.querySelector('.homelink').classList.add('activebtn');
  }
  // carousel animation
  if(windowHeight > carouselHeight*1/3){
    carousel.style.animation = 'transformcarousel 2s ease forwards';
  }
});

