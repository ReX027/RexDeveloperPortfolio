
window.addEventListener('scroll', function () {
    let value = window.scrollY;
})


function fun(){
    window.location.reload();
}


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
