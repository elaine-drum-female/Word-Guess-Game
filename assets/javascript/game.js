// Create a giant wordguessgame object to hold all our logic and variables
var wordGuessGame = {
    //Object Name : chosenWord along with info such as their picture and a song clip.
    chosenWord: {
        taylorswift: {
            picture: "../WORDGUESS/assets/images/taylor-swift-album.png",
            song: "Red",
            preview: "https://open.spotify.com/track/1RvQQGwaPipiNgz8RXAKA8?si=mx4Nzt97Q0eJs3xakLjP2A"
        },

        starset: {
            picture: "../WORDGUESS/assets/images/starset-monster-album.jpg",
            song: "Monster",
            preview: "https://open.spotify.com/track/0criiQKIY1hyU0lRbVhZ8L?si=5b7bDCDlQ0ebxgjH2f1F-A"
        },

        linkinpark: {
            picture: "../WORDGUESS/assets/images/linkin-park-what-ive-done-album.jpg",
            song: "What I've Done",
            preview: "https://open.spotify.com/track/18lR4BzEs7e3qzc0KVkTpU?si=9_AMFULpRdmM4LIZ5qCs6w"
        },

        nickelback: {
            picture: "../WORDGUESS/assets/images/nickelback-silent-majority-album.jpg",
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











};