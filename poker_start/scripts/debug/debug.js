function isTesting() {
    return doRunControlTest;
}// if you need a specific custom deck, make to win or lose a particular hand
// uncomment createDeck() options in deck.js
function setDebugFlags(boolVar) {
    if (!boolVar)
        return;

    doRunControlTest = boolVar;

    maxHighScore = 0;

    // test count of games to average scores and hands
    // default    100;
    gamesToPlay = 10000;

    // show cards ui during testing
    // default           true
    doShowUIDuringTest = true;

    //auto move all card placements:
    // default     false
    allPCPlayers = false;

    // log the cards placed in activity box:
    // default         true
    doLogPlacedCards = true;

    // log player turn log:
    // default        true
    doLogPlayerTurn = true;

    // log details of card comparing:
    // default         false
    doLogCardDetails = false;

    // defaults true
    runAutoHc = true;
    runAuto2k = true;
    runAuto3k = true;
    runAutoSt = true;
    runAutoFl = true;
    runAuto4k = true;
    runAutoSF = true;

    setPcPlayers();
    setTestElements();
}

function setTestElements() {
    PC_TURN_DELAY = 0;
    allPCPlayers = true;
    tutorialDiv.hidden = true;
}

function setPcPlayers() {
    if (allPCPlayers === true) {
        player1isPC = true;
        player2isPC = true;
        player3isPC = true;
        player4isPC = true;
    }
}
