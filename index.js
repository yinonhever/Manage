$("#toggler").change(() => {
    $("body").toggleClass("no-scroll");

    if ($("#toggler").prop("checked")) {
        $(".header__nav-icon").prop("src", "images/icon-close.svg");
    }
    else {
        $(".header__nav-icon").prop("src", "images/icon-hamburger.svg");
    }
})