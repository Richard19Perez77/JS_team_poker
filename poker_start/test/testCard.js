let testTextArea;

function runTests() {
    testTextArea = document.getElementById("testTextArea");
    testTextArea.value = "";
    testTextArea.value += "Tests Started";
    testUrl();
    testUrlEmpty();
    testGetSuitChar();
    testGetSuitCharEmpty();
    testGetFaceValue();
    testGetFaceValueEmpty();
    testCheckHandForMatchingValues1();
    testCheckHandForMatchingValues2();
    testCheckHandForMatchingValues3();
    testCheckHandForMatchingValues4();
    testCheckHandForMatchingValues5();
    testTextArea.value += "\nTests Complete";
}

function testCheckHandForMatchingValues5() {
    let card = new Card(0,0,"");
    let card1 = new Card(1,0,"");
    let card2 = new Card(2,0,"");
    let card3 = new Card(3,0,"");
    let card4 = new Card(4,0,"");
    let card5 = new Card(5,0,"");
    let hand = [card1, card2, card3, card4, card5];
    let matches = checkHandForMatchingValues(card, hand);
    if (matches === 5) {
        testTextArea.value += "\n\u2705 testCheckHandForMatchingValues5() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testCheckHandForMatchingValues5() failed result=${matches} exp=5`;
}


function testCheckHandForMatchingValues3() {
    let card = new Card(0,0,"");
    let card1 = new Card(1,0,"");
    let card2 = new Card(2,0,"");
    let card3 = new Card(3,0,"");
    let card4 = new Card(0,3,"");
    let card5 = new Card(0,4,"");
    let hand = [card1, card2, card3, card4, card5];
    let matches = checkHandForMatchingValues(card, hand);
    if (matches === 3) {
        testTextArea.value += "\n\u2705 testCheckHandForMatchingValues3() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testCheckHandForMatchingValues3() failed result=${matches} exp=3`;
}

function testCheckHandForMatchingValues4() {
    let card = new Card(0,0,"");
    let card1 = new Card(1,0,"");
    let card2 = new Card(2,0,"");
    let card3 = new Card(3,0,"");
    let card4 = new Card(4,0,"");
    let card5 = new Card(0,4,"");
    let hand = [card1, card2, card3, card4, card5];
    let matches = checkHandForMatchingValues(card, hand);
    if (matches === 4) {
        testTextArea.value += "\n\u2705 testCheckHandForMatchingValues4() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testCheckHandForMatchingValues4() failed result=${matches} exp=4`;
}



function testCheckHandForMatchingValues1() {
    let card = new Card(0,0,"");
    let card1 = new Card(1,0,"");
    let card2 = new Card(0,1,"");
    let card3 = new Card(0,2,"");
    let card4 = new Card(0,3,"");
    let card5 = new Card(0,4,"");
    let hand = [card1, card2, card3, card4, card5];
    let matches = checkHandForMatchingValues(card, hand);
    if (matches === 1) {
        testTextArea.value += "\n\u2705 testCheckHandForMatchingValues1() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testCheckHandForMatchingValues1() failed result=${matches} exp=1`;
}

function testCheckHandForMatchingValues2() {
    let card = new Card(0,0,"");
    let card1 = new Card(1,0,"");
    let card2 = new Card(2,0,"");
    let card3 = new Card(0,2,"");
    let card4 = new Card(0,3,"");
    let card5 = new Card(0,4,"");
    let hand = [card1, card2, card3, card4, card5];
    let matches = checkHandForMatchingValues(card, hand);
    if (matches === 2) {
        testTextArea.value += "\n\u2705 testCheckHandForMatchingValues2() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testCheckHandForMatchingValues2() failed result=${matches} exp=2`;
}


function testGetSuitChar() {
    let suit = getSuitCharacter(0);
    if (suit === "&#9671;") {
        testTextArea.value += "\n\u2705 testGetSuitChar() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testGetSuit() failed result=${suit} exp=&#9671;`
}

function testGetSuitCharEmpty() {
    let suit = getSuitCharacter(-1);
    if (suit === "") {
        testTextArea.value += "\n\u2705 testGetSuitCharEmpty() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testGetSuitCharEmpty() failed result=${suit} exp=""`
}

function testGetFaceValue() {

    let value = getFaceValue(0);
    if (value === 2) {
        testTextArea.value += "\n\u2705 testGetFaceValue() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testGetFaceValue() failed result=${value} exp=2`
}

function testGetFaceValueEmpty() {

    let value = getFaceValue(-1);
    if (value === "") {
        testTextArea.value += "\n\u2705 testGetFaceValueEmpty() Passed";
        return;
    }

    testTextArea.value += `\n\u274C testGetFaceValueEmpty() failed result=${value} exp=""`
}

function testUrl() {
    let url = getCardImagePath(0, 0);
    if (url === "assets/cards/2d.jpg") {
        testTextArea.value += "\n\u2705 testUrl() Passed";
        return;
    }
    testTextArea.value += `\n\u274C testUrl() failed result=${url} exp=assets/cards/2d.jpg`
}

function testUrlEmpty() {
    let url = getCardImagePath(-1, -1);
    if (url === "") {
        testTextArea.value += "\n\u2705 testUrlEmpty() Passed";
        return;
    }
    testTextArea.value += `\n\u274C testUrlEmpty() failed result=${url} exp=""`
}
