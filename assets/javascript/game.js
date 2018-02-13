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



    //cycles through the index of the arrays computerChoice & lettersGuessed 
    for (var i = 0; i < computerChoice.length; i++) {
        //assigns userGuess to answers(_'s) and subtracts from remaining answers 
        if (computerChoice[i] === userGuess) 
        {
            remaining--;
            answers[i] = userGuess;
            document.getElementById("currentWord").textContent = answers.join(" ");
            console.log(remaining);
            console.log(guesses);
        }

        // if userGuess is not in computerChoice, this subtracts from guesses
        // remaining and adds to letters guessed, but does not repeatedly do so
        // upon the key event
        if ((computerChoice.includes(userGuess) !== true) && (lettersGuessed.includes(userGuess) !== true)) {
            guesses--;
            document.getElementById("guesses").textContent = guesses;
            lettersGuessed.push(userGuess);
            document.getElementById("lettersGuess").textContent = lettersGuessed.join(" "); 
            break;
        }
        
       
            
        }
    }

// losing condition
var failMessage = 
    "<p>Sorry! You have run out of guesses. </p>" + 
    "<p>The word was " + computerChoice + "</p>" +
    "<p> Refresh to try again! :D </p>"
if (guesses == 0) {
    document.getElementById("currentWord").innerHTML = failMessage;
}
        
       
    
   

