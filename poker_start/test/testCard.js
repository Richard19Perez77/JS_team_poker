import('../scripts/card/cardHelper.js');
import('../scripts/card/card.js');
import('../scripts/logging/print.js');
import('../scripts/logging/log.js');
import('../scripts/debug/debugvariables');

let testTextArea;

function runTests() {
    testTextArea = document.getElementById("testTextArea");
    testTextArea.value += "Tests Started";
    testUrl();
    testGetSuitChar();
    testGetFaceValue();
    testCheckHandForMatchingValues();
    testTextArea.value += "\nTests Complete";
}

function testCheckHandForMatchingValues() {
    let card = new Card(0,0,"");
    let card1 = new Card(1,0,"");
    let card2 = new Card(0,1,"");
    let card3 = new Card(0,2,"");
    let card4 = new Card(0,3,"");
    let card5 = new Card(0,4,"");
    let hand = [card1, card2, card3, card4, card5];
    let matches = checkHandForMatchingValues(card, hand);
    if (matches === 1) {
        testTextArea.value += "\n\u2705 testCheckHandForMatchingValues() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testCheckHandForMatchingValues() failed result=${matches} exp=1`;
}

function testGetSuitChar() {
    let suit = getSuitCharacter(0);
    if (suit === "&#9671;") {
        testTextArea.value += "\n\u2705 testGetSuitChar() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testGetSuit() failed result=${suit} exp=&#9671;`
}

function testGetFaceValue() {

    let value = getFaceValue(0);
    if (value === 2) {
        testTextArea.value += "\n\u2705 testGetFaceValue() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testGetFaceValue() failed result=${value} exp=2`
}

function testUrl() {
    let url = getCardImagePath(0, 0);
    if (url === "assets/cards/2d.jpg") {
        testTextArea.value += "\n\u2705 testUrl() Passed";
        return;
    }
    testTextArea.value += `\n\u274C testUrl() failed result=${url} exp=assets/cards/2d.jpg`
}
