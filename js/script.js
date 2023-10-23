

// window.addEventListener('scroll', function () {
//   var secondsection = document.querySelector(".secondsection");
//   var windowpos = window.scrollY;
//   var pos = secondsection.position();
//   console.log(pos.top);
//   if (windowpos > pos.top && pos.top+500 >=windowpos) {
//     secondsection.classList.add('visible');
//   } else {
//     secondsection.classList.remove('visible');
//   }

// })

// Logo reload
function fun() {
  window.location.reload();
}

document.getElementById("linkedinlink").addEventListener("click", function() {
  // window.location.href = "https://www.linkedin.com/in/tusharvaid/"; 
     window.open("https://www.linkedin.com/in/tusharvaid/","_blank");
});

// Animation in HomePage
window.addEventListener("load", function () {
  var reveals = document.querySelectorAll('.reveal, .reveal2');
  var reveals3 = document.querySelectorAll('.reveal3');
  console.log("HI");
  function handleReveal() {
    var windowHeight = window.innerHeight;

    for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top;

      if (elementTop < windowHeight) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }

    for (var i = 0; i < reveals3.length; i++) {
      var elementTop = reveals3[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if (elementTop < windowHeight - revealpoint) {
        reveals3[i].classList.add("active2");
      } else {
        reveals3[i].classList.remove("active2");
      }
    }
  }

  // Call handleReveal initially
  handleReveal();

  // Add a scroll event listener
  window.addEventListener("scroll", handleReveal);
});

// window.addEventListener("scroll", revealcontent);
// function reveal() {
//   console.log("HIII");
//   var reveals = document.querySelectorAll('.reveal,.reveal2');
//   // var reveals3 = document.querySelectorAll('.reveal3');
//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     // var elementVisible = 0;
//     // var revealpoint = 150;

//     if (elementTop < windowHeight) {
//       reveals[i].classList.add("active");
//       // reveals3[i].classList.add("active2");
//     }
//     else {
//       reveals[i].classList.remove("active");
//       // reveals3[i].classList.remove("active2");

//     }
//   }
// }
// function revealcontent() {
//   var reveal = document.querySelector('.reveal3');
//   for (var i = 0; i < reveal.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveal[i].getBoundingClientRect().top;
//     // var elementVisible = 0;
//     var revealpoint = 150;
//     if (elementTop < windowHeight - revealpoint) {
//       reveal[i].classList.add("active2");
//     }
//     else {
//       reveal[i].classList.remove("active2");
//     }
//   }
// }

