// Word List

var bands = ['arcturus', 'burzum', 'darkthrone', 'emperor', 'enslaved', 'gorgoroth', 'immortal', 'mayhem', 'satyricon', 'ulver'];

// Computer chooses a word
var computerChoice = bands[Math.floor(Math.random() * bands.length)];

// Global Variables
var guesses = 12;
var remaining = computerChoice.length;
var wordArray = Array.from(computerChoice);
var lettersGuessed = [];
var alphabet = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "m","n","o", "p", "q","r","s","t","u","v","w","x","y","z"]


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





    for (var i = 0; i < computerChoice.length; i++) {

        if (computerChoice[i] === userGuess) 
        {
            remaining--;
            answers[i] = userGuess;
            document.getElementById("currentWord").textContent = answers.join(" ");
            console.log(remaining);
        }
        }
    
        if (computerChoice.valueOf() != userGuess.valueOf()) {
            guesses--;
            document.getElementById("guesses").textContent = guesses;
            lettersGuessed.push(userGuess);
            document.getElementById("lettersGuess").textContent = lettersGuessed.join(" "); 
        }
    };

    
    
        
       
    
   

