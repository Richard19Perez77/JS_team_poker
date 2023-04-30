let gamesPlayed = 0;
let gamesToPlay = 1;

let allPCPlayers = false;

let gamesHCcardPlayed = 0;
let games2kcardPlayed = 0;
let games3kcardPlayed = 0;
let gamesStcardPlayed = 0;
let gamesFlcardPlayed = 0;
let games4kcardPlayed = 0;
let gamesSFcardPlayed = 0;

let totalHCcardPoints = 0;
let total2kcardPoints = 0;
let total3kcardPoints = 0;
let totalStcardPoints = 0;
let totalFlcardPoints = 0;
let total4kcardPoints = 0;
let totalSFcardPoints = 0;

let runAutoHc = true;
let runAuto2k = true;
let runAuto3k = true;
let runAutoSt = true;
let runAutoFl = true;
let runAuto4k = true;
let runAutoSF = true;

let doLogPlacedCards = false;
let doLogPlayerTurn = true;
let doAutoHideTutorial = false;
let doLogCardDetails = false;
let doRunControlTest = false;
let doShowUIDuringTest = false;

let totalHighScore = 0;
let accumulatedHighScore = 0;
let maxHighScore = 0;

let hcScores = [];
let twokScores = [];
let threekScores = [];
let stScores = [];
let flScores = [];
let fourkScores = [];
let sfScores = [];

// uncomment during debug
function printScoreArray(arr) {
    let printed = "";
    for (let i = 0; i < arr.length; i++) {
        printed = printed + arr[i];
    }

    return printed;
}

function printTestScores() {
    //reset game log for scores
    log = "";
    addLog("Game Count = " + gamesPlayed);
    addLog("");

    addLog("hc card played average " + gamesHCcardPlayed / gamesPlayed);
    //addLog("hc card scores " + printScoreArray(hcScores));
    addLog("hc card score average " + totalHCcardPoints / gamesHCcardPlayed);
    addLog("");

    addLog("2k card played average " + games2kcardPlayed / gamesPlayed);
    //addLog("2k card scores " + printScoreArray(twokScores));
    addLog("2k card score average " + total2kcardPoints / games2kcardPlayed);
    addLog("");

    addLog("3k card played average " + games3kcardPlayed / gamesPlayed);
    //addLog("3k card scores " + printScoreArray(threekScores));
    addLog("3k card score average " + total3kcardPoints / games3kcardPlayed);
    addLog("");

    addLog("St card played average " + gamesStcardPlayed / gamesPlayed);
    //addLog("st card scores " + printScoreArray(stScores));
    addLog("St card score average " + totalStcardPoints / gamesStcardPlayed);
    addLog("");

    addLog("fl card played average " + gamesFlcardPlayed / gamesPlayed);
    //addLog("fl card scores " + printScoreArray(flScores));
    addLog("fl card score average " + totalFlcardPoints / gamesFlcardPlayed);
    addLog("");

    addLog("4k card played average " + games4kcardPlayed / gamesPlayed);
    //addLog("4k card scores " + printScoreArray(fourkScores));
    addLog("4k card score average " + total4kcardPoints / games4kcardPlayed);
    addLog("");

    addLog("sf card played average " + gamesSFcardPlayed / gamesPlayed);
    addLog("sf card score average " + totalSFcardPoints / gamesSFcardPlayed);
    addLog("");

    if (totalHighScore > maxHighScore) {
        maxHighScore = totalHighScore;
    }

    accumulatedHighScore += totalHighScore;
    addLog("total score average " + accumulatedHighScore / gamesPlayed);
    addLog("max high score " + maxHighScore);
    addLog("perfect game average " + perfectGames / gamesPlayed);
    addLog("" + new Date());
    testTimeEnd = new Date().getTime();
    let duration = testTimeEnd - testTimeStart;
    addLog("test duration (seconds)= " + duration / 1000);
}

function totalTestScores() {

    let hcScore = getHighCardScore();
    hcScores.push("(" + hcScore + ")");
    let perfectStill = true;
    if (hcScore > 0) {
        gamesHCcardPlayed++;
        totalHCcardPoints += hcScore + HC_BONUS;
        totalHighScore += hcScore + HC_BONUS;
    } else {
        perfectStill = false;
    }

    let twokScore = get2kCardScore();
    twokScores.push("(" + twokScore + ")");
    if (twokScore > 0) {
        games2kcardPlayed++;
        total2kcardPoints += twokScore + TWO_K_BONUS;
        totalHighScore += twokScore + TWO_K_BONUS;
    } else {
        perfectStill = false;
    }

    let threekScore = get3kCardScore();
    threekScores.push("(" + threekScore + ")");
    if (threekScore > 0) {
        games3kcardPlayed++;
        total3kcardPoints += threekScore + THREE_K_BONUS;
        totalHighScore += threekScore + THREE_K_BONUS;
    } else {
        perfectStill = false;
    }

    let stScore = getStraightScore();
    stScores.push("(" + stScore + ")");
    if (stScore > 0) {
        gamesStcardPlayed++;
        totalStcardPoints += stScore + STRAIGHT_BONUS;
        totalHighScore += stScore + STRAIGHT_BONUS;
    } else {
        perfectStill = false;
    }

    let flScore = getFlushScore();
    flScores.push("(" + flScore + ")");
    if (flScore > 0) {
        gamesFlcardPlayed++;
        totalFlcardPoints += flScore + FLUSH_BONUS;
        totalHighScore += flScore + FLUSH_BONUS;
    } else {
        perfectStill = false;
    }

    let fourkScore = get4kCardScore();
    fourkScores.push("(" + fourkScore + ")");
    if (fourkScore > 0) {
        games4kcardPlayed++;
        total4kcardPoints += fourkScore + FOUR_K_BONUS;
        totalHighScore += fourkScore + FOUR_K_BONUS;
    } else {
        perfectStill = false;
    }

    let sfScore = getStraightFlushScore();
    sfScores.push("(" + sfScore + ")");
    if (sfScore > 0) {
        gamesSFcardPlayed++;
        totalSFcardPoints += sfScore + STRAIGHT_FLUSH_BONUS;
        totalHighScore += sfScore + STRAIGHT_FLUSH_BONUS;
    } else {
        perfectStill = false;
    }

    if (perfectStill) {
        perfectGames++;
    }
}

function debugCardBitmaps(cardArr) {
    for (let i = 0; i < cardArr.length; i++) {
        if (cardArr[i] != null) {
            if (cardArr[i].bitmap == null) {
                //addLog("debug Player " + (playerTurn + 1) + " " + printTargetHand() + " Error: " + printCard(cardArr[i]));
            }
        }

        if (cardArr[i] == null) {
            //addLog("debug Player " + (playerTurn + 1) + " " + printTargetHand() + " Error null card: " + i);
        }
    }
}
