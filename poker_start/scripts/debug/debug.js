function startControlTest() {
    if (doRunControlTest) {
        return;
    }
    setDebugFlags(true);
    if (scoreText) {
        scoreText.innerHTML = "Running tests...";
    }
    showScorePanel();
    newGameClicked();
}

function stopControlTest() {
    if (!doRunControlTest) {
        return;
    }
    cancelPendingPcTurn();
    setDebugFlags(false);
}

function showScorePanel() {
    if (!draggableScoreDiv || isElementAnimating(draggableScoreDiv)) {
        return;
    }
    if (isElementVisible(draggableControlsTextArea)) {
        slideToggle(draggableControlsTextArea, 100);
    }
    if (isElementHidden(draggableScoreDiv)) {
        slideToggle(draggableScoreDiv, 100);
    }
}

function updateTestScorePanel() {
    if (scoreText) {
        scoreText.innerHTML = log.split("\n").join(br);
    }
}

// if you need a specific custom deck, make to win or lose a particular hand
// uncomment createDeck() options in deck.js
function setDebugFlags(boolVar) {
    doRunControlTest = boolVar;

    if (!boolVar) {
        restoreNormalPlayFlags();
        return;
    }

    resetControlTestStats();

    // test count of games to average scores and hands
    // default    100;
    gamesToPlay = 10000;

    // show cards ui during testing
    // default           true
    doShowUIDuringTest = true;

    //auto move all card placements:
    allPCPlayers = true;

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

function resetControlTestStats() {
    gamesPlayed = 0;
    gamesHCcardPlayed = 0;
    games2kcardPlayed = 0;
    games3kcardPlayed = 0;
    gamesStcardPlayed = 0;
    gamesFlcardPlayed = 0;
    games4kcardPlayed = 0;
    gamesSFcardPlayed = 0;

    totalHCcardPoints = 0;
    total2kcardPoints = 0;
    total3kcardPoints = 0;
    totalStcardPoints = 0;
    totalFlcardPoints = 0;
    total4kcardPoints = 0;
    totalSFcardPoints = 0;

    hcScores = [];
    twokScores = [];
    threekScores = [];
    stScores = [];
    flScores = [];
    fourkScores = [];
    sfScores = [];

    accumulatedHighScore = 0;
    maxHighScore = 0;
    totalHighScore = 0;
    perfectGames = 0;
    testTimeStart = new Date().getTime();
}

function restoreNormalPlayFlags() {
    allPCPlayers = false;
    gamesToPlay = 1;
    doShowUIDuringTest = false;
    PC_TURN_DELAY = 50;

    player1isPC = false;
    player2isPC = true;
    player3isPC = true;
    player4isPC = true;
}

function setTestElements() {
    PC_TURN_DELAY = 0;
    allPCPlayers = true;
    if (tutorialDiv) {
        tutorialDiv.hidden = true;
    }
}

function setPcPlayers() {
    if (allPCPlayers === true) {
        player1isPC = true;
        player2isPC = true;
        player3isPC = true;
        player4isPC = true;
    }
}
