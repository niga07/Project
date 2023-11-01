// window.onload = function() {
//     document.body.classList.add('loaded_hiding');
//     window.setTimeout(function() {
//         document.bode.classList.add('loaded');
//         document.body.classList.add('loadeed_hiding');
//     }, 500);
// }


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('#anm');


for (let elms of elements) {
    observer.observe(elms);
}



const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;



prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);


function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}


function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}


function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}


updateSlider();


setInterval(() => {
    showNextSlide()
}, 5000);


function validateform() {
    var email = document.myform.email.value;

    if (email == null || email == "") {
        alert("Email can't be blank")
        return false;


    }

    if (email.includes("@")) {
        return true;
    } else {
        alert("You wrore your Email uncorrectly! Email should have '@'")
        return false;
    }

}