// here i've written write bdd test

// as the computer I should play a card that is high

// i want the score to be as high as posible while keeping possiblities open for other hands to score

// so that the user can obtaina  high score

// given: the board is empty, what is the highest smartest card to play

// when the game starts there are no cards played but I have my hand

// the outome is that I have played the highest card available that can score and be picked up by other's
function runBDDTests() {
    testTextArea = document.getElementById("testTextArea");
    testTextArea.value += "\nBDD Tests Started";
    highCardNull();
    highCardPlayed();
    highCardReplacedForHC();
    highCardReplacedFor2K();
    complete3kNotOverwrittenByPairs();
    complete3kReplacedByHigher3k();
    complete3kNotOverwrittenByHigherPair();
    empty3kCanStartWithPair();
    testTextArea.value += "\nBDD Tests Complete";
    publishTestResults();
}

function makeTestCard(suit, value) {
    return new Card(suit, value, getCardImagePath(suit, value));
}

function boardIsThreeOfAKind(expectedValue) {
    if (threePSlotCard1 == null || threePSlotCard2 == null || threePSlotCard3 == null) {
        return false;
    }
    if (threePSlotCard1.value !== threePSlotCard2.value ||
        threePSlotCard2.value !== threePSlotCard3.value) {
        return false;
    }
    if (expectedValue != null && threePSlotCard1.value !== expectedValue) {
        return false;
    }
    return true;
}

function complete3kNotOverwrittenByPairs() {
    // given a finished 5-high 3K
    // when the PC has two triplets that the old filter could mix into 6,6,10
    // then the board must remain a real 3K, never a pair plus an odd card
    playerTurn = 0;
    threePSlotCard1 = makeTestCard(0, 3);
    threePSlotCard2 = makeTestCard(1, 3);
    threePSlotCard3 = makeTestCard(2, 3);

    player1Cards = [
        makeTestCard(2, 4),
        makeTestCard(0, 4),
        makeTestCard(1, 4),
        makeTestCard(2, 8),
        makeTestCard(0, 8),
        makeTestCard(3, 8),
        makeTestCard(2, 6)
    ];

    find3Kcard();

    if (boardIsThreeOfAKind()) {
        testTextArea.value += "\n\u2705 complete3kNotOverwrittenByPairs() Passed";
        return;
    }

    testTextArea.value += "\n\u274C complete3kNotOverwrittenByPairs() failed board=" +
        printCard(threePSlotCard1) + printCard(threePSlotCard2) + printCard(threePSlotCard3);
}

function complete3kReplacedByHigher3k() {
    // given a finished 8-high 3K
    // when the PC has three aces
    // then the 3K should be replaced by aces
    playerTurn = 0;
    threePSlotCard1 = makeTestCard(0, 6);
    threePSlotCard2 = makeTestCard(1, 6);
    threePSlotCard3 = makeTestCard(2, 6);

    player1Cards = [
        makeTestCard(0, 12),
        makeTestCard(1, 12),
        makeTestCard(2, 12),
        makeTestCard(0, 0),
        makeTestCard(1, 1),
        makeTestCard(2, 2),
        makeTestCard(3, 3)
    ];

    find3Kcard();

    if (boardIsThreeOfAKind(12)) {
        testTextArea.value += "\n\u2705 complete3kReplacedByHigher3k() Passed";
        return;
    }

    testTextArea.value += "\n\u274C complete3kReplacedByHigher3k() failed board=" +
        printCard(threePSlotCard1) + printCard(threePSlotCard2) + printCard(threePSlotCard3);
}

function complete3kNotOverwrittenByHigherPair() {
    // given a finished queen 3K
    // when the PC only has a higher pair
    // then the 3K must not be broken into a 2K
    playerTurn = 0;
    threePSlotCard1 = makeTestCard(0, 10);
    threePSlotCard2 = makeTestCard(1, 10);
    threePSlotCard3 = makeTestCard(2, 10);

    player1Cards = [
        makeTestCard(0, 12),
        makeTestCard(1, 12),
        makeTestCard(0, 0),
        makeTestCard(1, 1),
        makeTestCard(2, 2),
        makeTestCard(3, 3),
        makeTestCard(0, 5)
    ];

    find3Kcard();

    if (boardIsThreeOfAKind(10)) {
        testTextArea.value += "\n\u2705 complete3kNotOverwrittenByHigherPair() Passed";
        return;
    }

    testTextArea.value += "\n\u274C complete3kNotOverwrittenByHigherPair() failed board=" +
        printCard(threePSlotCard1) + printCard(threePSlotCard2) + printCard(threePSlotCard3);
}

function empty3kCanStartWithPair() {
    // given empty 3K slots
    // when the PC has a pair and no 3K
    // then it may start the 3K row with that pair
    playerTurn = 0;
    threePSlotCard1 = null;
    threePSlotCard2 = null;
    threePSlotCard3 = null;

    player1Cards = [
        makeTestCard(0, 7),
        makeTestCard(1, 7),
        makeTestCard(0, 0),
        makeTestCard(1, 1),
        makeTestCard(2, 3),
        makeTestCard(3, 5),
        makeTestCard(0, 12)
    ];

    find3Kcard();

    if (threePSlotCard1 != null &&
        threePSlotCard2 != null &&
        threePSlotCard3 == null &&
        threePSlotCard1.value === 7 &&
        threePSlotCard2.value === 7) {
        testTextArea.value += "\n\u2705 empty3kCanStartWithPair() Passed";
        return;
    }

    testTextArea.value += "\n\u274C empty3kCanStartWithPair() failed board=" +
        printCard(threePSlotCard1) + printCard(threePSlotCard2) + printCard(threePSlotCard3);
}

function highCardNull() {

    // given a new game
    // when the game is initialized
    // I should see an emnpty high card slot
    if (hcSlotCard === null) {
        testTextArea.value += "\n\u2705 highCardNull() Passed";
        return;
    }

    testTextArea.value += `\n\u274C highCardNull() failed result=${hcSlotCard.value} exp=null`;
}

function highCardPlayed() {
    // given a empty hc slot
    // and I have one ace
    // when that ace doesn't ruin far better hands
    // I should play that ace

    // inject space button press for setup to start
    var e = new KeyboardEvent('keydown', { 'keyCode': 32, 'which': 32 });

    // may need to update player turn
    // pc should have cards, call findHCCard()
    player1Cards = [];
    let suit = 0;
    let value = 2;
    let path1 = getCardImagePath(suit, value);
    let card1 = new Card(suit, value, path1);
    // card1.bitmap.src = card1.imagePath;
    player1Cards[0] = card1;

    value = 3;
    let path2 = getCardImagePath(suit, value);
    let card2 = new Card(suit, value, path2);
    // card2.bitmap.src = card2.imagePath;
    player1Cards[1] = card2;

    value = 4;
    let path3 = getCardImagePath(suit, value);
    let card3 = new Card(suit, value, path3);
    // card3.bitmap.src = card3.imagePath;
    player1Cards[2] = card3;

    value = 5;
    let path4 = getCardImagePath(suit, value);
    let card4 = new Card(suit, value, path4);
    // card4.bitmap.src = card4.imagePath;
    player1Cards[3] = card4;

    value = 6;
    let path5 = getCardImagePath(suit, value);
    let card5 = new Card(suit, value, path5);
    // card5.bitmap.src = card5.imagePath;
    player1Cards[4] = card5;

    value = 7;
    let path6 = getCardImagePath(suit, value);
    let card6 = new Card(suit, value, path6);
    // card7.bitmap.src = card5.imagePath;
    player1Cards[5] = card6;

    suit = 1;
    value = 14;
    let path7 = getCardImagePath(suit, value);
    let card7 = new Card(suit, value, path7);
    // card8.bitmap.src = card7.imagePath;
    player1Cards[6] = card7;

    findHCcard();

    // hcSlotCard should have a 14 value card
    if (hcSlotCard.value === 14) {
        testTextArea.value += "\n\u2705 highCardPlayed() Passed";
        return;
    }

    testTextArea.value += `\n\u274C highCardPlayed() failed result=${hcSlotCard.value} exp=14`;
}

function highCardReplacedForHC() {
    // given a card in the hc slot
    // and I can use that card to gain a lot of points
    // when I have another high card
    // I should play that high card

    // reset game instance
    newGameClicked();

    // set player one to play a Q
    player1Cards = [];
    let suit = 0;
    let value = 2;
    let path1 = getCardImagePath(suit, value);
    let card1 = new Card(suit, value, path1);
    // card1.bitmap.src = card1.imagePath;
    player1Cards[0] = card1;

    value = 3;
    let path2 = getCardImagePath(suit, value);
    let card2 = new Card(suit, value, path2);
    // card2.bitmap.src = card2.imagePath;
    player1Cards[1] = card2;

    value = 4;
    let path3 = getCardImagePath(suit, value);
    let card3 = new Card(suit, value, path3);
    // card3.bitmap.src = card3.imagePath;
    player1Cards[2] = card3;

    value = 5;
    let path4 = getCardImagePath(suit, value);
    let card4 = new Card(suit, value, path4);
    // card4.bitmap.src = card4.imagePath;
    player1Cards[3] = card4;

    value = 6;
    let path5 = getCardImagePath(suit, value);
    let card5 = new Card(suit, value, path5);
    // card5.bitmap.src = card5.imagePath;
    player1Cards[4] = card5;

    value = 7;
    let path6 = getCardImagePath(suit, value);
    let card6 = new Card(suit, value, path6);
    // card7.bitmap.src = card5.imagePath;
    player1Cards[5] = card6;

    suit = 1;
    value = 13;
    let path7 = getCardImagePath(suit, value);
    let card7 = new Card(suit, value, path7);
    // card8.bitmap.src = card7.imagePath;
    player1Cards[6] = card7;

    findHCcard();

    if (hcSlotCard.value === 13) {

        playerTurn++;

        // set player 2 to trade the Q for a K
        player1Cards = [];
        suit = 0;
        value = 2;
        path1 = getCardImagePath(suit, value);
        card1 = new Card(suit, value, path1);
        // card1.bitmap.src = card1.imagePath;
        player2Cards[0] = card1;

        value = 3;
        path2 = getCardImagePath(suit, value);
        card2 = new Card(suit, value, path2);
        // card2.bitmap.src = card2.imagePath;
        player2Cards[1] = card2;

        value = 4;
        path3 = getCardImagePath(suit, value);
        card3 = new Card(suit, value, path3);
        // card3.bitmap.src = card3.imagePath;
        player2Cards[2] = card3;

        value = 5;
        path4 = getCardImagePath(suit, value);
        card4 = new Card(suit, value, path4);
        // card4.bitmap.src = card4.imagePath;
        player2Cards[3] = card4;

        value = 6;
        path5 = getCardImagePath(suit, value);
        card5 = new Card(suit, value, path5);
        // card5.bitmap.src = card5.imagePath;
        player2Cards[4] = card5;

        value = 7;
        path6 = getCardImagePath(suit, value);
        card6 = new Card(suit, value, path6);
        // card7.bitmap.src = card5.imagePath;
        player2Cards[5] = card6;

        suit = 1;
        value = 14;
        path7 = getCardImagePath(suit, value);
        card7 = new Card(suit, value, path7);
        // card8.bitmap.src = card7.imagePath;
        player2Cards[6] = card7;

        // should have played the queen, now play the king over it
        findHCcard();

        if (hcSlotCard.value === 14) {
            testTextArea.value += "\n\u2705 highCardReplacedForHC() Passed";
            return;
        }

    } else {
        testTextArea.value += `\n\u274C highCardReplacedForHC() failed result=${hcSlotCard.value} exp=14`;
        return;
    }

    testTextArea.value += `\n\u274C highCardReplacedForHC() failed result=${hcSlotCard.value} exp=14`;
}

function highCardReplacedFor2K() {
    // given a card in the hc slot is K
    // when I can replace it for a pair even if lower
    // Then replace the K with the to be paired card, this incstance a K

    // start a new game
    newGameClicked();

    player1Cards = [];
    let suit = 0;
    let value = 2;
    let path1 = getCardImagePath(suit, value);
    let card1 = new Card(suit, value, path1);
    // card1.bitmap.src = card1.imagePath;
    player1Cards[0] = card1;

    value = 3;
    let path2 = getCardImagePath(suit, value);
    let card2 = new Card(suit, value, path2);
    // card2.bitmap.src = card2.imagePath;
    player1Cards[1] = card2;

    value = 4;
    let path3 = getCardImagePath(suit, value);
    let card3 = new Card(suit, value, path3);
    // card3.bitmap.src = card3.imagePath;
    player1Cards[2] = card3;

    value = 5;
    let path4 = getCardImagePath(suit, value);
    let card4 = new Card(suit, value, path4);
    // card4.bitmap.src = card4.imagePath;
    player1Cards[3] = card4;

    value = 6;
    let path5 = getCardImagePath(suit, value);
    let card5 = new Card(suit, value, path5);
    // card5.bitmap.src = card5.imagePath;
    player1Cards[4] = card5;

    value = 7;
    let path6 = getCardImagePath(suit, value);
    let card6 = new Card(suit, value, path6);
    // card7.bitmap.src = card5.imagePath;
    player1Cards[5] = card6;

    suit = 1;
    value = 14;
    let path7 = getCardImagePath(suit, value);
    let card7 = new Card(suit, value, path7);
    // card8.bitmap.src = card7.imagePath;
    player1Cards[6] = card7;

    findHCcard();

    if (hcSlotCard.value === 14) {

        playerTurn++;

        player1Cards = [];
        suit = 2;
        value = 2;
        path1 = getCardImagePath(suit, value);
        card1 = new Card(suit, value, path1);
        // card1.bitmap.src = card1.imagePath;
        player2Cards[0] = card1;

        value = 3;
        path2 = getCardImagePath(suit, value);
        card2 = new Card(suit, value, path2);
        // card2.bitmap.src = card2.imagePath;
        player2Cards[1] = card2;

        value = 4;
        path3 = getCardImagePath(suit, value);
        card3 = new Card(suit, value, path3);
        // card3.bitmap.src = card3.imagePath;
        player2Cards[2] = card3;

        value = 5;
        path4 = getCardImagePath(suit, value);
        card4 = new Card(suit, value, path4);
        // card4.bitmap.src = card4.imagePath;
        player2Cards[3] = card4;

        value = 6;
        path5 = getCardImagePath(suit, value);
        card5 = new Card(suit, value, path5);
        // card5.bitmap.src = card5.imagePath;
        player2Cards[4] = card5;

        suit = 4;
        value = 14;
        path6 = getCardImagePath(suit, value);
        card6 = new Card(suit, value, path6);
        // card7.bitmap.src = card5.imagePath;
        player2Cards[5] = card6;

        suit = 3;
        value = 13;
        path7 = getCardImagePath(suit, value);
        card7 = new Card(suit, value, path7);
        // card8.bitmap.src = card7.imagePath;
        player2Cards[6] = card7;

        // should have played the queen, now play the king over it
        findHCcard();

        let matches = 0;
        player2Cards.forEach(function (card) {
            if (card.value === 14) {
                matches++;
            }
        });

        if (matches === 2) {
            testTextArea.value += "\n\u2705 highCardReplacedFor2K() Passed";
            return;
        } else {
            testTextArea.value += `\n\u274C highCardReplacedFor2K() failed result=${matches} exp=2`;
            return;
        }

    } else {
        testTextArea.value += `\n\u274C highCardReplacedFor2K() failed result=${hcSlotCard.value} exp=14`;
        return;
    }
}