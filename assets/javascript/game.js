// Word List

var bands = ['arcturus', 'burzum', 'darkthrone', 'emperor', 'enslaved', 'gorgoroth', 'immortal', 'mayhem', 'satyricon', 'ulver'];

// Computer chooses a word
var computerChoice = bands[Math.floor(Math.random() * bands.length)];

// Global Variables
var guesses = 12;
var remaining = computerChoice.length;
var wordArray = Array.from(computerChoice);
var lettersGuessed = [];


// Computer creates blank spaces based on the word it chose

var answers = [];
for (var i = 0; i < computerChoice.length; i++) {
    answers[i] = "_";
   }
   document.getElementById("currentWord").textContent = answers.join(" ");
console.log(Array.from(computerChoice));


//Runs function when key is pressed

document.onkeypress = function(game) {

// Determines which key user pressed

var userGuess = game.key;

// Function that replaces array items from choiceArray to blankSpaces

// if (userGuess.length > 0) {

    for (var i = 0; i < computerChoice.length; i++) {

        if (computerChoice[i] === userGuess) 
        {
            remaining--;
            answers[i] = userGuess;
            document.getElementById("currentWord").textContent = answers.join(" ");
        }
        }
        if (computerChoice[i] !== userGuess) {
            --guesses;
            document.getElementById("guesses").textContent = guesses;
            lettersGuessed.push(userGuess);
            document.getElementById("lettersGuess").textContent = lettersGuessed.join(" "); 
        }
    };
    
        
       
    
   

