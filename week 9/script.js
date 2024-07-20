// Function to create and shuffle the deck, then split it into two arrays
function splitDeck() {
    // Initialize the array with numbers 1 to 52
    let deck = [];
    for (let i = 1; i <= 52; i++) {
        deck.push(i);
    }

    // Shuffle the deck
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
    }

    // Split the deck into two arrays of 26 elements each
    let firstHalf = deck.slice(0, 26);
    let secondHalf = deck.slice(26, 52);

    return [firstHalf, secondHalf];
}

// Get the split decks
let [firstHalf, secondHalf] = splitDeck();
console.log('Player 1: ', firstHalf);
console.log('Player 2: ', secondHalf);

// Function to compare the decks and determine the winner
function callWinner(playerOneDeck, playerTwoDeck) {
    let playerOneWins = 0;
    let playerTwoWins = 0;
    let ties = 0;

    while (playerOneDeck.length > 0 && playerTwoDeck.length > 0) {
        let cardOne = playerOneDeck.shift();
        let cardTwo = playerTwoDeck.shift();

        if (cardOne > cardTwo) {
            playerOneWins++;
        } else if (cardOne < cardTwo) {
            playerTwoWins++;
        } else {
            ties++;
        }
    }

    console.log(`Player One Wins! with: ${playerOneWins}`);
    console.log(`Player Two Wins! with: ${playerTwoWins}`);
    console.log(`Ties: ${ties}`);

    if (playerOneWins > playerTwoWins) {
        console.log('Player 1 is the overall winner!');
    } else if (playerOneWins < playerTwoWins) {
        console.log('Player 2 is the overall winner!');
    } else {
        console.log('The game is a tie!');
    }
}

// Compare the decks and determine the winner
callWinner(firstHalf, secondHalf);