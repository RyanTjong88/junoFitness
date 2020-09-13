const gym = {}

// create back, chest, etc array

gym.workouts = {
    
    back: [
        {
            muscleGroup: 'back',
            aim: 'tone',
            sets: '(4 - 5 Sets)',
            reps: '(10 - 15 Reps)',
        },
        {
            muscleGroup: 'back',
            aim: 'mass',
            sets: '(3 - 4 Sets)',
            reps: '(5 - 7 Reps)'
        },
        {
            muscleGroup: 'back',
            aim: 'strength',
            sets: '(3 - 4 Sets)',
            reps: '(10 - 15 Reps)',
        },
        {
            exercises: [
                {
                    exerciseOne: 'Deadlifts',
                    exerciseTwo: 'Bent Over Rows',
                    exerciseThree: 'Lat Pulldowns',
                }
            ]
        },
    ],

    chest: [
        {
            muscleGroup: 'chest',
            aim: 'tone',
            sets: '(4 - 5 Sets)',
            reps: '(10 - 15 Reps)',
        },
        {
            muscleGroup: 'chest',
            aim: 'mass',
            sets: '(3 - 4 Sets)',
            reps: '(5 - 7 Reps)'
        },
        {
            muscleGroup: 'chest',
            aim: 'strength',
            sets: '(3 - 4 Sets)',
            reps: '(10 - 15 Reps)',
        },
        {
            exercises: [
                {
                    exerciseOne: 'Flat Bench',
                    exerciseTwo: 'Cable Flys',
                    exerciseThree: 'Decline Bench',
                }
            ]
        },
    ],
    
    arms: [
        {
            muscleGroup: 'arms',
            aim: 'tone',
            sets: '(4 - 5 Sets)',
            reps: '(10 - 15 Reps)',
        },
        {
            muscleGroup: 'arms',
            aim: 'mass',
            sets: '(3 - 4 Sets)',
            reps: '(5 - 7 Reps)'
        },
        {
            muscleGroup: 'arms',
            aim: 'strength',
            sets: '(3 - 4 Sets)',
            reps: '(10 - 15 Reps)',
        },
        {
            exercises: [
                {
                    exerciseOne: 'Bicep Curls',
                    exerciseTwo: 'Skull Crushers',
                    exerciseThree: 'EZ Bar Curls',
                }
            ]
        },
    ],
    
    legs: [
        {
            muscleGroup: 'legs',
            aim: 'tone',
            sets: '(4 - 5 Sets)',
            reps: '(10 - 15 Reps)',
        },
        {
            muscleGroup: 'legs',
            aim: 'mass',
            sets: '(3 - 4 Sets)',
            reps: '(5 - 7 Reps)'
        },
        {
            muscleGroup: 'legs',
            aim: 'strength',
            sets: '(3 - 4 Sets)',
            reps: '(10 - 15 Reps)',
        },
        {
            exercises: [
                {
                    exerciseOne: 'Squats',
                    exerciseTwo: 'Lunges',
                    exerciseThree: 'Leg Curls',
                }
            ]
        },
    ],
    
    shoulders: [
        {
            muscleGroup: 'shoulders',
            aim: 'tone',
            sets: '(4 - 5 Sets)',
            reps: '(10 - 15 Reps)',
        },
        {
            muscleGroup: 'shoulders',
            aim: 'mass',
            sets: '(3 - 4 Sets)',
            reps: '(5 - 7 Reps)'
        },
        {
            muscleGroup: 'shoulders',
            aim: 'strength',
            sets: '(3 - 4 Sets)',
            reps: '(10 - 15 Reps)',
        },
        {
            exercises: [
                {
                    exerciseOne: 'Shoulder Press',
                    exerciseTwo: 'Lateral Raises',
                    exerciseThree: 'Rear Delt Flys',
                }
            ]
        },
    ]    
};

console.log(gym.workouts);

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

                if (muscle === gym.workouts[muscle] && goal === gym.workouts[muscle][i].aim) {
                    // gym.regime();
                    console.log('lets go');

                    $('.contOne').text(`<h4 class="choice">${gym.workouts[muscle][i].exercises.exerciseOne}</h4>`)
                    $('.contOne').text(`<p class="choice">${gym.workouts[muscle][i].sets}</p>`)
                    $('.contOne').text(`<p class="choice">${gym.workouts[muscle][i].reps}</p>`)

                    $('.contTwo').text(`<h4 class="choice">${gym.workouts[muscle][i].exercises.exerciseTwo}</h4>`)
                    $('.contTwo').text(`<p class="choice">${gym.workouts[muscle][i].sets}</p>`)
                    $('.contTwo').text(`<p class="choice">${gym.workouts[muscle][i].reps}</p>`)

                    $('.contThree').text(`<h4 class="choice">${gym.workouts[muscle][i].exercises.exerciseThree}</h4>`)
                    $('.contThree').text(`<p class="choice">${gym.workouts[muscle][i].sets}</p>`)
                    $('.contThree').text(`<p class="choice">${gym.workouts[muscle][i].reps}</p>`)

                    // then display gym.workouts[t]muscle.exercise
                    // then display gym.workouts[t]muscle.setsReps

                }
            }
            console.log(gym.workouts[muscle]);
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





