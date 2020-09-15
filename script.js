const gym = {}

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
                'Deadlifts',
                'Bent Over Rows',
                'Lat Pulldowns',
                'Pull-Ups',
                'Cable Rows',
                'Lying Lateral Raise',
                'Seated Cable Row',
                'Good Mornings',
                'Pullovers',
                'Shrugs'
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
                'Flat Bench',
                'Cable Flys',
                'Decline Bench',
                'Incline Bench',
                'Peck Deck Flys',
                'Pullovers',
                'Push-Ups',
                'Incline Flys',
                'Machine Presses',
                'Dips'
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
                'Skull Crushers',
                'EZ Bar Curls',
                'Reverse Curls',
                'Dips',
                'Push-Downs',
                'Tricep Kickbacks',
                'Seated Cable Row',
                'Rope Extension',
                'Preacher Curls',
                'Hammer Curls'
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
                'Squats',
                'Lunges',
                'Leg Curls',
                'Leg Extensions',
                'Calf Raises',
                'Hack Squats',
                'Hip Abductions',
                'Seated Adductions',
                'Straight Leg Deadlifts',
                'Hip Thrusts'
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
                'Shoulder Press',
                'Lateral Raises',
                'Rear Delt Flys',
                'Arnold Presses',
                'Front Arm Raises',
                'Lying Lateral Raise',
                'Military Press',
                'Upright Rows',
                'T-Bar Rows',
                'Rear Deltoid Laterals'
            ]
        },
    ]    
};

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
            scrollTop: $(".resultsContainer").offset().top
        }, 1800);
    });

    $(".up").click(function() {
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 1800);
    });
}

// Create an event listener for a 'submit' event
gym.getResults = () => {

    // Declare a random item that will return a random item from any array
    $('form').on('submit', function(event) {

        // Prevent the html from refreshing
        event.preventDefault();

        function randomItem(array) {

            // Generate random number withihn the range of indexes in my array
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        }

        // Save information from checked radio buttons into variables
        const muscle = $('input[name=muscle]:checked').val();
        const goal = $('input[name=goal]:checked').val();

        // Store workouts objects into a varibale
        for (const key in gym.workouts) {

            // Cycle through the arrays index and save it in the variable [i]
            for (let i = 0; i < gym.workouts[key].length; i++) {

                // If selected muscle matches [key] and selected goal matches the aim key in that object 
                if (muscle === key && goal === gym.workouts[key][i].aim){

                    const exerciseArray = gym.workouts[key][3].exercises

                    // Get a random exercise for every const
                    const exerciseOne = randomItem(exerciseArray); 
                    const exerciseTwo = randomItem(exerciseArray); 
                    const exerciseThree = randomItem(exerciseArray); 
                    const exerciseFour = randomItem(exerciseArray); 
                    const exerciseFive = randomItem(exerciseArray); 

                    // Display Muscle group and exercises for it to the page
                    $('.contOne').html(`<h4>${key}</h4>
                    <h5 class="exercise">${[exerciseOne]}</h5>
                    <p class="set">${gym.workouts[key][i].sets}</p> 
                    <p class="rep">${gym.workouts[key][i].reps}</p>`)

                    $('.contTwo').html(`<h5>${[exerciseTwo]}</h5> 
                    <p class="set">${gym.workouts[key][i].sets}</p> 
                    <p class="rep">${gym.workouts[key][i].reps}</p>`)

                    $('.contThree').html(`<h5>${[exerciseThree]}</h5> 
                    <p class="set">${gym.workouts[key][i].sets}</p>
                    <p class="rep">${gym.workouts[key][i].reps}</p>`)

                    $('.contFour').html(`<h5>${[exerciseFour]}</h5> 
                    <p class="set">${gym.workouts[key][i].sets}</p>
                    <p class="rep">${gym.workouts[key][i].reps}</p>`)

                    $('.contFive').html(`<h5>${[exerciseFive]}</h5> 
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