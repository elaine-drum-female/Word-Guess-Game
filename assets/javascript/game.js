
var songList = document.getElementById("songlist");
var letter = document.getElementsByClassName('letter').value;
var songTitle = ["you belong with me", "red", "endgame", "lovestory", "never again", "papercut"];
var game = document.getElementById("game");
var container = document.getElementById("container");

var chosenLetter = [];
var results = [];
var winsElement = document.getElementById('wins');
var losesElement = document.getElementById('losses');

var wins = 0;
var losses = 0;

var incorrectLetters = [];
var guessesLeft = 10;
var randomSong;
var underScore = [];
var winCounter = 0;

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
    console.log('Random Song chosen = ' + randomSong);
    for (var i = 0; i < randomSong.length; i++) {
        document.getElementById('songlist').innerHTML = underScore.join('');
        underScore.push(' ___ ');
        //console.log(underScore); 
    }


    document.onkeyup = function (e) {
        chosenLetter = event.key;
        if (randomSong.indexOf(chosenLetter) > - 1) {
            for (var i = 0; i < randomSong.length; i++) {
                if (randomSong[i] === chosenLetter) {
                    //   underScore[i].replace('i', 'chosenLetter');

                    underScore[i] = chosenLetter;

                    //document.getElementById(songlist).innerHTML = results.join('');
                    console.log(underScore);
                }
            }
        }

        else {
            LoseGame();
        }


        function LoseGame() {
            incorrectLetters.push(chosenLetter);
            var selected = document.getElementById('choseLetter').innerHTML = incorrectLetters;
            guessesLeft--;
            console.log("You have this many guesses left: " + guessesLeft);
            if (guessesLeft === 0) {
                alert("Sorry. You lose");
            }

        }

        winsElement.textContent = wins;
        losesElement.textContent = losses;

    }

}

startGame();

/*

having trouble setting the letter in the underscore once the user has chosen the right letter

the wins count is counting every single letter that is chosen and i want it to only win when the user has guessed it correctly and to automatically change to a new word

same for losses, i want the user to lose when they are all out guesses

i want the countdown of the guesses remaining to drop every time a letter is guessed wrong

*/