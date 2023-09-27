

window.addEventListener('scroll', function () {
    let value = window.scrollY;

})


function fun() {
    window.location.reload();
}


// Animation in HomePage
function reveal() {
    var reveals = document.querySelectorAll(".reveal,.reveal2");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        // var elementVisible = 0;

        if (elementTop < windowHeight) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
            
        }
    }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to event handlers here
    }
  });
