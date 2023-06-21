// write bdd test

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
    testTextArea.value += "\nBDD Tests Complete";
}

function highCardNull() {
    // given a new game
    // when the game is initialized
    // I should see an emnpty high card slot

    // call findHCcard()
    // hcSlotCard should have a 14 value card

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

    findHCcard()
    
    // hcSlotCard should have a 14 value card
    if (hcSlotCard.value === 14) {
        testTextArea.value += "\n\u2705 highCardPlayed() Passed";
        return;
    }

    testTextArea.value += `\n\u274C highCardPlayed() failed result=${hcSlotCard.value} exp=14`;
}

// function highCardReplacedForHC() {
//     // given a card in the hc slot
//     // and I can use that card to gain a lot of points
//     // when I have another high card
//     // I should play that high card

//     // set hcSlotCard with K
//     // replace K with A

//     if (hcSlotCard.value === 14) {
//         testTextArea.value += "\n\u2705 highCardPlayed() Passed";
//         return;
//     }

//     testTextArea.value += `\n\u274C highCardPlayed() failed result=${hcSlotCard.value} exp=14`;
// }

// function highCardReplacedFor2K() {
//     // given a card in the hc slot
//     // and I can use that card to gain a lot of points
//     // when I have another high card
//     // I should play that high card

//     // set hcSlotCard with K
//     // replace K with Q for second K in hand
//     if (hcSlotCard.value === 13) {
//         testTextArea.value += "\n\u2705 highCardPlayed() Passed";
//         return;
//     }

//     testTextArea.value += `\n\u274C highCardPlayed() failed result=${hcSlotCard.value} exp=13`;

//     // validate hand has 2K of value 13
// }