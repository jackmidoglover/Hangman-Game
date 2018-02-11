// Current Word Object
var computerChoice = bands[Math.floor(Math.random() * bands.length)];
var createSpaces = currentWord.createSpaces();

var currentWord = {
    choiceArray : function() {
        Array.from(computerChoice);
    },
    createSpaces : function(x) {
        var spaces = [];
        for (var i = 0; i < x.length; i++) {
            spaces.push(" _ ");
        }
        document.querySelector("#currentWord").textContent = spaces.join(' ');
        console.log(x);     
    }
    
}

createSpaces(computerChoice);
document.getElementById("currentWord").textContent = currentWord.createSpaces(computerChoice);
