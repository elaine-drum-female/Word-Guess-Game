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



    computerSelectsRandomElement = wordsTitle[Math.floor(Math.random() * wordsTitle.length)];

    //console.log('Random Song chosen = ' + randomSong);

    var songTitle = computerSelectsRandomElement.split('');
    console.log(songTitle);

    // Create a for loop that finds the length of the wordsArr and then computer selects at random from that array
    for (var i = 0; i < computerSelectsRandomElement.length; i++) {
        wordsArr.innerHTML = underScore.join('');
        underScore.push(' __ ');
    }

    // Capture the keys fired by the user
    document.onkeyup = function (event) {

        lettersGuessedElement = event.key;
        //console.log(lettersGuessedElement);


        //check to see if value from the users selection is of the first occurence if it is NOT more than - 1 than have the computer's index equal the same of the lettersguessed
        if (computerSelectsRandomElement.indexOf(lettersGuessedElement) > -1) {
            for (var i = 0; i < computerSelectsRandomElement.length; i++) {
                if (computerSelectsRandomElement[i] === lettersGuessedElement) {
                    underScore[i] = lettersGuessedElement;
                    wordBox.textContent = underScore.join(' ');
                }
            }
        }


        function randomImage() {
            var randomImage = document.getElementById('imgSelect');
            if (computerSelectsRandomElement == "demi") {
                randomImage.src = "demi-lovato.jpg";
            } else if (computerSelectsRandomElement == "band-pose") {
                randomImage.src = "band-pose2";
            }
        }

        randomImage();


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