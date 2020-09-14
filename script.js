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
            exercises: {
                exerciseOne: 'Deadlifts',
                exerciseTwo: 'Bent Over Rows',
                exerciseThree: 'Lat Pulldowns',
            }
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
            exercises: {
                exerciseOne: 'Flat Bench',
                exerciseTwo: 'Cable Flys',
                exerciseThree: 'Decline Bench',
            }
            
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
            exercises: {
                exerciseOne: 'Bicep Curls',
                exerciseTwo: 'Skull Crushers',
                exerciseThree: 'EZ Bar Curls',
            }
            
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
            exercises: {
                exerciseOne: 'Squats',
                exerciseTwo: 'Lunges',
                exerciseThree: 'Leg Curls',
            }
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
            exercises: {
                exerciseOne: 'Shoulder Press',
                exerciseTwo: 'Lateral Raises',
                exerciseThree: 'Rear Delt Flys',
            }
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

        // Save information from checked radio buttons into variables
        const muscle = $('input[name=muscle]:checked').val();
        const goal = $('input[name=goal]:checked').val();

        // Store workouts objects into a varibale
        for (const key in gym.workouts) {

            // Cycle through the arrays index and save it in the variable [i]
            for (let i = 0; i < gym.workouts[key].length; i++) {
                // console.log(gym.workouts[key]);
                if (muscle === key && goal === gym.workouts[key][i].aim){

                    $('.contOne').html(`<h4>${key}</h4>
                    <h5 class="exercise">${gym.workouts[key][3].exercises.exerciseOne}</h5>
                    <p class="set">${gym.workouts[key][i].sets}</p> 
                    <p class="rep">${gym.workouts[key][i].reps}</p>`)

                    $('.contTwo').html(`<h5 class="exercise">${gym.workouts[key][3].exercises.exerciseTwo}</h5> 
                    <p class="set">${gym.workouts[key][i].sets}</p> 
                    <p class="rep">${gym.workouts[key][i].reps}</p>`)

                    $('.contThree').html(`<h5 class="exercise">${gym.workouts[key][3].exercises.exerciseThree}</h5> 
                    <p class="set">${gym.workouts[key][i].sets}</p>
                    <p class="rep">${gym.workouts[key][i].reps}</p>`)

                }
            }
        }
    });
};

gym.init = () => {
    gym.scroll();
    gym.getResults();
}

$(document).ready(function() {
    gym.init();
});





