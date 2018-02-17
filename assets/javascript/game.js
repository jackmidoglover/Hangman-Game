//Global Variables
var wins = 0;
var userWon = false;
var bands = ['arcturus', 'burzum', 'darkthrone', 'emperor', 'enslaved', 'gorgoroth', 'immortal', 'mayhem', 'satyricon', 'ulver'];
var computerChoice;
var guesses;
var lettersGuessed;
var remaining;
var answers;
var failMessage = 
"<p>Sorry! You have run out of guesses. </p>" + 
"<p>The word was " + computerChoice + "</p>" +
"<p> Click anywhere to try again! :D </p>";

// Function that pushes values to globals
function reset() {
    computerChoice = bands[Math.floor(Math.random() * bands.length)];
    guesses = 12;
    remaining = computerChoice.length;
    lettersGuessed = [];
// creates blank spaces in answers
    answers = [];
    for (var i = 0; i < computerChoice.length; i++) {
        answers[i] = "_";
    }
    console.log(Array.from(computerChoice));
    document.getElementById("currentWord").textContent = answers.join(" ");
}

//initial assignment of values on document load
reset();


//Primary hangman game function
var hangman = function(){

document.onkeypress = function(game) {
    var userGuess = game.key;

//game conditions
if (userWon == false) {
if ((answers.includes(userGuess)) && (userWon == false)) {


}
//If the user isn't pressing an already correct answer, then:
else { 
//cycle through the index of the arrays computerChoice & answers 
    for (var i = 0; i < computerChoice.length; i++) {
//Replaces the corresponding _ with userGuess if correct + game scoring mechanism
        if (computerChoice[i] === userGuess) {
            answers[i] = userGuess;
            document.getElementById("currentWord").textContent = answers.join(" ");
            console.log(guesses);
            remaining--;
            console.log('reamaining', remaining);
                }
            }
// if userGuess is not in computerChoice, this subtracts from guesses and adds to lettersGuessed
        if ((computerChoice.includes(userGuess) !== true) && (lettersGuessed.includes(userGuess) !== true)) {
            guesses--;
            document.getElementById("guesses").textContent = guesses;
            lettersGuessed.push(userGuess);
            document.getElementById("lettersGuess").textContent = lettersGuessed.join(" "); 

        }
    }
    //Winning condition
    if (remaining == 0) {
        wins++;
        document.getElementById("winsCount").textContent = wins;
        userWon = true;
        console.log(computerChoice);
        document.getElementById("bandName").textContent= computerChoice;
        document.getElementById("winMessage").textContent = "You won! Click anywhere to play again.";
            }
    //Continues game play
    document.onclick = function(){
        if (userWon == true) {
                userWon = false;
                reset();
                document.getElementById("winMessage").textContent = ""; 
                document.getElementById("lettersGuess").textContent = lettersGuessed.join(" ");
                document.getElementById("guesses").textContent = guesses; 
                }
            }
    // losing condition
if (guesses == 0)  {
    document.getElementById("currentWord").innerHTML = failMessage;
    document.onclick = function(){
        reset();
            }
        }
    }

}
}
//runs game
if (userWon!==true) {
hangman();
};

