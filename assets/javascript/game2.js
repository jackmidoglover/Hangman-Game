//Game Object 
var bands = ['arcturus', 'burzum', 'darkthrone', 'emperor', 'enslaved', 'gorgoroth', 'immortal', 'mayhem', 'satyricon', 'ulver'];
var hangman = {
    wins: 0,
    bands: ['arcturus', 'burzum', 'darkthrone', 'emperor', 'enslaved', 'gorgoroth', 'immortal', 'mayhem', 'satyricon', 'ulver'],
    guesses: 12,
    lettersGuessed: [],
    answers: [],
    wordPull: function () {
        var computerChoice = bands[Math.floor(Math.random() * bands.length)];
        var remaining = computerChoice.length;
    },
    blankSpaces: function() {
        for (var i = 0; i < computerChoice.length; i++) {
            answers[i] = "_";
           }
           document.getElementById("currentWord").textContent = answers.join(" ");
    },
    keyPress: function() {
        var userGuess = game.key;
    }

}

    hangman.wordPull();
    hangman.blankSpaces();


document.onkeypress = function(game) {
    
    if (remaining > 0) {
        if (answers.includes(userGuess)) {
        
        
        }
        
        else { 
            for (var i = 0; i < computerChoice.length; i++) {
                //assigns userGuess to answers(_'s) and subtracts from remaining answers 
                if (computerChoice[i] === userGuess) 
                {
                    answers[i] = userGuess;
                    document.getElementById("currentWord").textContent = answers.join(" ");
                    console.log(guesses);
                    remaining--;
                    console.log('reamaining', remaining);
                    }
        }       
    }
    if ((computerChoice.includes(userGuess) !== true) && (lettersGuessed.includes(userGuess) !== true)) {
        guesses--;
        document.getElementById("guesses").textContent = guesses;
        lettersGuessed.push(userGuess);
        document.getElementById("lettersGuess").textContent = lettersGuessed.join(" "); 
    }
}


if (remaining < 1) {
wins++;
document.getElementById("winsCount").textContent = wins;
hangman.wordPull();
hangman.blankSpaces();
document.game();

}
var failMessage = 
"<p>Sorry! You have run out of guesses. </p>" + 
"<p>The word was " + computerChoice + "</p>" +
"<p> Refresh to try again! :D </p>"
if (guesses == 0) {
document.getElementById("currentWord").innerHTML = failMessage;
}
}

