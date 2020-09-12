const gym = {}

// create back, chest, etc array


// Create a scroll down and up function
gym.scroll = () => {
    // scroll down/up code taken from Ahmad Yousef on codepen
    $(".start").click(function() {
        $('html, body').animate({
            scrollTop: $("h3").offset().top
        }, 1500);
    });

    $('input[type="submit"]').click(function() {
        $('html, body').animate({
            scrollTop: $(".results").offset().top
        }, 1500);
    });

    $(".up").click(function() {
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 1800);
    });
}

// Create an event listener for a 'submit' event
$('form').on('submit', function(event) {
    // Prevent the html from refreshing
    event.preventDefault();
    console.log('are we eveen submitting');
// Save information from checked radio buttons into variables
const muscle = $('input[name=muscle]:checked').val();
const goal = $('input[name=goal]:checked').val();
console.log(muscle, goal);
});

gym.init = () => {
    gym.scroll();
}

$(document).ready(function() {
    gym.init();
});





