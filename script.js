const gym = {}



gym.scroll = () => {
    // scroll down/up code taken from Ahmad Yousef on codepen
    $(".start").click(function() {
        $('html, body').animate({
            scrollTop: $(".main").offset().top
        }, 1500);
    });

    $('input[type="submit"]').click(function() {
        $('html, body').animate({
            scrollTop: $(".results").offset().top
        }, 1500);
    });

    $(".up.start").click(function() {
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 1800);
    });
}

gym.init = () => {
    gym.scroll();
}

$(document).ready(function() {
    gym.init();
});





