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
};