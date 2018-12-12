//get elements

var songListElement = document.getElementById("songlist");
var songTitle = ["you belong with me", "red", "endgame", "lovestory", "never again", "papercut"];
var randomSong;
var game;
var container;

var chosenLetter = [];
// var winsElement = document.getElementById('wins');
// var losesElement = document.getElementById('losses');

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var count = 0;

var incorrectLetters = [];
var correctLetters = [];
var underScore = [];


// function Artist (name, songs) {
//     this.name = name;
//     this.songs = songs;
// };

// var swifty = new Artist ("Taylor Swift", ["You Belong With Me","Red"]);
// var swiftyDetails = swifty.name + "these are her songs: " + songs;
// songList.textContent = swiftyDetails;


function startGame() {

    // var image = document.getElementById('imgSelect');
    // var movieimages = ["images/me-up-close.jpg", "images/new-drumset.jpg"];
    // var imageRandom = Math.floor(Math.random () * movieimages.length) + 0;
    // image.src = movieimages[imageRandom];

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