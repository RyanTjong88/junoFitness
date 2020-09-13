const gym = {}

// create back, chest, etc array

gym.workouts = {
    
    back: [
        {
            muscleGroup: 'back',
            aim: 'tone',
        },
        {
            muscleGroup: 'back',
            aim: 'mass',
        },
        {
            muscleGroup: 'back',
            aim: 'strength',
        },

    ],
    
    chest: [
        {
            muscleGroup: 'chest',
            aim: 'tone',
        },
        {
            muscleGroup: 'chest',
            aim: 'mass',
        },
        {
            muscleGroup: 'chest',
            aim: 'strength',
        },

    ],
   
    arms: [
        {
            muscleGroup: 'arms',
            aim: 'tone',
        },
        {
            muscleGroup: 'arms',
            aim: 'mass',
        },
        {
            muscleGroup: 'arms',
            aim: 'strength',
        },

    ],
    

    legs: [
        {
            muscleGroup: 'legs',
            aim: 'tone',
        },
        {
            muscleGroup: 'legs',
            aim: 'mass',
        },
        {
            muscleGroup: 'legs',
            aim: 'strength',
        },

    ],
    

    shoulders: [
        {
            muscleGroup: 'shoulders',
            aim: 'tone',
        },
        {
            muscleGroup: 'shoulders',
            aim: 'mass',
        },
        {
            muscleGroup: 'shoulders',
            aim: 'strength',
        },

    ]
    
    
};

console.log(gym.workouts);

gym.routine = {

    tone: {
        sets: '(4 -5 Sets)',
        reps: '(10 - 15 Reps)'
    },

    mass: {
        sets: '(4 - 5 Sets)',
        reps: '(5 - 7 Reps)'
    },
    
    strength: {
        sets: '(4 -5 Sets)',
        reps: '(8 - 12 Reps)'
    }
}



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
gym.getResults = () => {


    $('form').on('submit', function(event) {

        // Prevent the html from refreshing
        event.preventDefault();
        // console.log('are we eveen submitting');

        // Save information from checked radio buttons into variables
        const muscle = $('input[name=muscle]:checked').val();
        const goal = $('input[name=goal]:checked').val();
        console.log(muscle, goal);
        // gym.regime = () => {
        // const results = [];  //[] is an empty array
        
        // for (let t = 0; t < gym.workouts.length; t++)  {
        //     // console.log(t);
            
            for (let i = 0; i < gym.workouts[muscle].length; i++) {
                console.log(muscle);
                const muscle = select
                if (muscle === gym.workouts[select] && goal === gym.workouts[select][i].aim) {
                    // gym.regime();
                    console.log('lets go');

                    // then display gym.workouts[t]muscle.exercise
                    // then display gym.workouts[t]muscle.setsReps

                }
            }
        // }
    });
};



gym.init = () => {
    gym.scroll();
    gym.getResults();
}

$(document).ready(function() {
    gym.init();
});





