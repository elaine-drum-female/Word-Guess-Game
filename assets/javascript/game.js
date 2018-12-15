var guessesRemainingElement = document.getElementById('guessesRemaining');
var losesElement = document.getElementById('losses');
var winsElement = document.getElementById('wins');
var guessLettersElement = document.getElementById('guessedLetter');
//var letterUsed = document.getElementById('usedLetter');
var wins = 0;
var losses = 0;
var guessesRemaining = 10;

var wrongLetter = [];

var rightLetter = [];

var removeDuplicates = [];

var guessLetters = [];

var usedAlready = [];

var underScore = [];



var wordBox = document.getElementById('wordsArr');
var wordsTitle = ["red", "thank u next", "sorry", "wreckingball", "confident"];


var computerSelectsRandomElement;

// Start the game


function startGame() {

 

    randomSong = songTitle[Math.floor(Math.random() * songTitle.length)];
    songTitle.trim;
    console.log('Random Song chosen = ' + randomSong);
    for (var i = 0; i < randomSong.length; i++) {
        document.getElementById('songlist').innerHTML = underScore.join(' ');
        underScore.push(' ___ ');
    }


    document.onkeyup = function (e) {
        chosenLetter = event.key;
        if (randomSong.indexOf(chosenLetter) > -1) {
            for (var i = 0; i < randomSong.length; i++) {
                if (randomSong[i] === chosenLetter) {
                    underScore[i] = chosenLetter;
                    songListElement.textContent = underScore.join(' ');
                }
            }

            



        } else {
            LoseGame();
        }


        function LoseGame() {
            incorrectLetters.push(chosenLetter);
            console.log(incorrectLetters)
            document.getElementById('choseLetter').innerHTML = incorrectLetters;
            guessesLeft--;
            document.getElementById('guesses-left').textContent = guessesLeft;
            console.log("You have this many guesses left: " + guessesLeft);
            if (guessesLeft < 0) {
               alert("You lose");
               return randomSong;
            }

        }

        
        // losesElement.textContent = losses;

    }

}
startGame();

/*

having trouble setting the letter in the underscore once the user has chosen the right letter

the wins count is counting every single letter that is chosen and i want it to only win when the user has guessed it correctly and to automatically change to a new word

same for losses, i want the user to lose when they are all out guesses

i want the countdown of the guesses remaining to drop every time a letter is guessed wrong

*/