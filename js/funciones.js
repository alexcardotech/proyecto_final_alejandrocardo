var swiper = new swiper(".mySwiper-1" , {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clikable:true
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});
var swiper = new swiper(".mySwiper-2" ,{
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWhitBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener('change',function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});