let galaxy = document.getElementById('galaxy');
let tech = document.getElementById('tech');
let star = document.getElementById('star');
let btn = document.getElementById('btn');
let text = document.getElementById('element');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    star.style.left = value * 0.25 + 'px';
    text.style.marginTop = value * 0.25 + 'px';
    btn.style.marginTop = value * 0.25 + 'px';
})


// Animation in HomePage
function reveal() {
    var reveals = document.querySelectorAll(".reveal,.reveal2");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0;

        if (elementTop < windowHeight) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load",reveal);
