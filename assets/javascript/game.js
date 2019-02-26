$(document).ready(function() {

    // Create a giant wordguessgame object to hold all our logic and variables
var wordGuessGame = {
    //Object Name : chosenWord along with info such as their picture and a song clip.
    chosenWord: {
        
        taylorswift: {
            picture: "../images/taylor-swift-album.png",
            song: "Red",
            preview: "https://open.spotify.com/track/1RvQQGwaPipiNgz8RXAKA8?si=mx4Nzt97Q0eJs3xakLjP2A"
        },

        starset: {
            picture: "../images/starset-monster-album.jpg",
            song: "Monster",
            preview: "https://open.spotify.com/track/0criiQKIY1hyU0lRbVhZ8L?si=5b7bDCDlQ0ebxgjH2f1F-A"
        },

        linkinpark: {
            picture: "../images/linkin-park-what-ive-done-album.jpg",
            song: "What I've Done",
            preview: "https://open.spotify.com/track/18lR4BzEs7e3qzc0KVkTpU?si=9_AMFULpRdmM4LIZ5qCs6w"
        },

        nickelback: {
            picture: "../images/nickelback-silent-majority-album.jpg",
            song: "Silent Majority",
            preview: "https://open.spotify.com/track/1LxMjTswgQqMjynxUdUO2g?si=7wxl3FLjQci3_unAKwcvuA"
        }

    },

    // Variables that will be used in the game.

    // Pick out the word chosen at play in random fashion
    wordPlay: null,
    // Need to store the secret word's letters in an array
    secretWordLetters: [],
    //Separate the matched letters from the guessed letters
    matchedLetters: [],
    guessedLetters: [],
    // Decrease / increase number of guesses left
    guessesLeft: 0,
    // Include total number of guesses
    totalGuesses: 0,
    // Decide on the letter guessed based on keypress
    letterGuessed: null,
    // Wins or loses
    wins: 0,

    // SetUp game METHOD when the page first loads

    //create a setupGame method function
    setupGame: function () {
        // create a variable to store a word from the object
        var objKeys = Object.keys(this.chosenWord);

        // take this word and reference the object's word to use with the Math.floor(Math.random()) method
        this.wordPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

        // split the chosen word into individual letters and store as our secret word
        this.secretWordLetters = this.wordPlay.split('');

        // Start the game off with ("_ _ _ _").
        this.wordGuessView();

        // This function renders number of guesses the user gets and displays to the HTML
        this.updateTotalGuesses();
    },

    // this function is run whenever the user guesses a letter

    updateGame: function (letter) {

        //Check to see if the user has no more guesses left, then restart game
        if (this.guessesLeft === 0) {
            this.restartGame();

        } else {
            //Check and update incorrect guesses
            this.updateletterGuesses(letter);

            // Check and update correct guesses

            this.updateSuccessfulGuess(letter);

            // Rebuild the view of the word

            this.wordGuessView();

            // If the user wins, restart game

            if (this.updateHasWon() === true) {
                this.restartGame();
            }
        }

    },

    // This function method happens when user makes an incorrect guess (that has not been guessed before).

    updateletterGuesses: function (letter) {

        // If letter is not in the guessedLetters array, AND the letter is not in the secretWordLetters away.
        if ((this.guessedLetters.indexOf(letter) === -1) && (this.secretWordLetters.indexOf(letter) === -1)) {

            //Add letter to the guessedLetters array.
            this.guessedLetters.push(letter);

            // Decrease guesses by one.

            this.guessesLeft--;

            // Update the guesses remaining and guessed letter on the page.

            document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
            document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(', ');

        }

    },

    // This function sets initial guesses the user gets.
    updateTotalGuesses: function () {

        // The user will get more guesses the longer the word is.

        this.totalGuesses = this.secretWordLetters.length + 5;
        this.guessesLeft = this.totalGuesses;

        // Render the guesses left on the page

        document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;

    },

    // This is what will happen if the user makes successful guess.

    updateSuccessfulGuess: function (letter) {

        // Cycle through the letters of the revealing from the secret word
        for (var i = 0; i < this.secretWordLetters.length; i++) {

            //If the guessed letter is in the revealing and exists in the matched letters array but has not been guessed already...
            if ((letter === this.secretWordLetters[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
                // Push the new guessed letter into the matched array.
                this.matchedLetters.push(letter);
            }
        }
    },

    wordGuessView: function () {
        // start our page off with empty wordguessview
        var wordguessView = "";

        // loop through the letters that are being guessed
        for (var i = 0; i < this.secretWordLetters.length; i++) {

            // check to see if the current letter(s) exist and has been guessed in said array 
            if (this.matchedLetters.indexOf(this.secretWordLetters[i]) !== -1) {
                //update wordguessview with that letter
                wordguessView += this.secretWordLetters[i];
            }
            // if it has not been guessed, display a "_" instead
            else {
                wordguessView += "&nbsp;_&nbsp;";
            }
        }

        // update the page with new string

        document.querySelector("#current-word").innerHTML = wordguessView;

    },

     // function METHOD that restarts game

     restartGame: function () {
        document.querySelector("#guessed-letters").innerHTML = "";

        this.wordPlay = null;
        this.secretWordLetters = [];
        this.matchedLetters = [];
        this.guessedLetters = [];
        this.guessesLeft = 0;
        this.totalGuesses = 0;
        this.letterGuessed = null;
        this.setupGame();
        this.wordGuessView();
    },

    // check to see if the user has won

    updateHasWon: function () {
        var wins;

        // If user has not guessed correctly a letter in the word, set win to false
        if (this.matchedLetters.length === 0) {
            wins = false;
        } else {
            wins = true;
        }

        //Cycle through the secretWordLetter array and check whether a letter appears in the array. If it does not match/exist in the matchedLetters array, set the win to false

        for (var i = 0; i < this.secretWordLetters.length; i++) {
            if (this.matchedLetters.indexOf(this.secretWordLetters[i]) === -1) {
                wins = false;
            }
        }

        // if win is true...
        if (wins) {
            // increment wins

            this.wins = this.wins + 1;

            //Update wins on page

            document.querySelector("#wins").innerHTML = this.wins;

            //Update the song title and the band on the page of the chosen word object

            document.querySelector("#music").innerHTML = this.chosenWord[this.wordPlay].song + " By " + this.wordPlay;

            // Update the image of the band

            document.querySelector("#band-div").innerHTML = "<img class='band-image' src='../images/" +
                this.chosenWord[this.wordPlay].picture + " ' alt=' " + this.chosenWord[this.wordPlay].song + "'>";

            // Play audio track of the band

            var audio = new Audio(this.chosenWord[this.wordPlay].preview);
            audio.play();

            // Return true, which triggers the restart of the game in the updateGame

            return true;
        }

        // If win is false, return false and the game goes on:
        return false;
    }

};

// Initialize the game when the page loads

wordGuessGame.setupGame();

// When a key is pressed.

document.onkeyup = function (event) {
    // Capture pressed key, make lowercase.
    wordGuessGame.letterGuessed = String.fromCharCode(event.which).toLowerCase();
    // Pass the guessed letter value into our updateGame function

    wordGuessGame.updateGame(wordGuessGame.letterGuessed);


};



});

