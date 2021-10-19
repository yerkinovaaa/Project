// window.addEventListener('scroll',function(){
//     console.log("Scrollin");
// })
// var scroll = window.requestAnimationFrame || function(callback){
//     window.setTimeout(callback, 1000/60)
// };
// var elementsToShow = document.querySelectorAll('show-on-scroll');

// function loop(){
//     elementsToShow.forEach(function(element){
//         if(isElementInViewport(element)){
//             element.classList.add('is-visible');
//         }else{
//             element.classList.remove('is-visible');
//         }
//     })
//     scroll(loop);
// }
// loop();

// function isElementInViewport(el){
//     if(typeof jQuery == "function" && el instanceof jQuery){
//         el = el[0];
//     }
//     var rect = el.getBoundingClientRect();
//     return (
//         (rect.top <= 0
//             && rect.bottom >= 0 )
//             ||
//             (rect.bottom >=(window.innerHeight || document.documentElement.clientHeight) && 
//             rect.top <=(window.innerHeight || document.documentElement.clientHeight))
//             ||
//             (rect.top >= 0 && 
//                 rect.bottom <=(window.innerHeight || document.documentElement.clientHeight))
//     );
// }
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) { slidePosition = 1 }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePosition - 1].style.display = "block";
    circles[slidePosition - 1].className += " enable";
}
var slidePosition = 0;
SlideShow();

function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("Containers");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > slides.length) { slidePosition = 1 }
    slides[slidePosition - 1].style.display = "block";
    setTimeout(SlideShow, 3000); // Change image every 2 seconds
}