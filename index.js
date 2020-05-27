// RESPONDING TO CLICK ON MOBILE MENU ICON
$("#toggler").change(() => {
    $("body").toggleClass("no-scroll");

    if ($("#toggler").prop("checked")) {
        $(".header__nav-icon").prop("src", "images/icon-close.svg");
    }
    else {
        $(".header__nav-icon").prop("src", "images/icon-hamburger.svg");
    }
})


// INITIALIZING THE SWIPERJS SLIDER
$(document).ready(function () {
    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        init: true,
        slidesPerView: slides(),
        spaceBetween: 30,
        freeMode: setFreeMode(),

        // Adding pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        // Adding scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true
        },
    });
});

// Setting the number of slides per view according to screen width
function slides() {
    if ($(window).width() > 1050) {
        return 2.5;
    }
    else {
        return 1;
    }
}


// Setting free mode to the slider on desktop
function setFreeMode() {
    if ($(window).width() > 1050) {
        return true;
    }
    else {
        return false;
    }
}