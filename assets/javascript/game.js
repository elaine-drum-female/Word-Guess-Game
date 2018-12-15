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


            // start the RIGHT LETTER FOR LOOP
            for (var w = 0; w < songTitle.length; w++) {

                if (lettersGuessedElement == songTitle[w]) {
                    correct = true;
                    rightLetter.push(lettersGuessedElement);
                    wins++;
                }

                // Searching for duplicates

                var count = 0;
                var found = false;


                for (r = 0; r < guessLetters.length; r++) {
                    //console.log(guessLetters[i]);
                    for (c = 0; c < removeDuplicates.length; c++) {
                        if (guessLetters[c] == removeDuplicates[c]) {
                            found = true;

                        }

                        usedAlready.push(removeDuplicates[c]);
                    }

                    count++;
                    if (count == 1 && found == false) {
                        removeDuplicates.push(guessLetters[c]);
                    }
                    count = 0;
                    found = false;
                }


                // losesElement.textContent = losses;

            }

            // ELSE for capturing ALL LETTERS and storing them in the GUESSLETTERS array


            guessLetters.push(lettersGuessedElement);
            guessLettersElement.textContent = guessLetters.join(' , ');

            losesElement.textContent = losses++;
            guessesRemainingElement.textContent = guessesRemaining--;
            winsElement.textContent = wins++;