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

let doLogPlacedCards = true;
let doDebugLog = false;
let doLogPlayerTurn = true;
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

function printTestScores() {
    //reset game log for scores
    log = "";
    addLog("Game Count = " + gamesPlayed);
    addLog("");

    addLog("hc card played average " + Number(gamesHCcardPlayed / gamesPlayed).toFixed(2));
    if (doDebugLog) addLog("hc card scores " + printScoreArray(hcScores));
    addLog("hc card score average " + Number(totalHCcardPoints / gamesHCcardPlayed).toFixed(2));
    addLog("");

    addLog("2k card played average " + Number(games2kcardPlayed / gamesPlayed).toFixed(2));
    if (doDebugLog) addLog("2k card scores " + printScoreArray(twokScores));
    addLog("2k card score average " + Number(total2kcardPoints / games2kcardPlayed).toFixed(2));
    addLog("");

    addLog("3k card played average " + Number(games3kcardPlayed / gamesPlayed).toFixed(2));
    if (doDebugLog) addLog("3k card scores " + printScoreArray(threekScores));
    addLog("3k card score average " + Number(total3kcardPoints / games3kcardPlayed).toFixed(2));
    addLog("");

    addLog("St card played average " + Number(gamesStcardPlayed / gamesPlayed).toFixed(2));
    if (doDebugLog) addLog("st card scores " + printScoreArray(stScores));
    addLog("St card score average " + Number(totalStcardPoints / gamesStcardPlayed).toFixed(2));
    addLog("");

    addLog("fl card played average " + Number(gamesFlcardPlayed / gamesPlayed).toFixed(2));
    if (doDebugLog) addLog("fl card scores " + printScoreArray(flScores));
    addLog("fl card score average " + Number(totalFlcardPoints / gamesFlcardPlayed).toFixed(2));
    addLog("");

    addLog("4k card played average " + Number(games4kcardPlayed / gamesPlayed).toFixed(2));
    if (doDebugLog) addLog("4k card scores " + printScoreArray(fourkScores));
    addLog("4k card score average " + Number(total4kcardPoints / games4kcardPlayed).toFixed(2));
    addLog("");

    addLog("sf card played average " + Number(gamesSFcardPlayed / gamesPlayed).toFixed(2));
    addLog("sf card score average " + Number(totalSFcardPoints / gamesSFcardPlayed).toFixed(2));
    addLog("");

    if (totalHighScore > maxHighScore) {
        maxHighScore = totalHighScore;
    }

    accumulatedHighScore += totalHighScore;
    addLog("total score average " + Number(accumulatedHighScore / gamesPlayed).toFixed(2));
    addLog("max high score " + maxHighScore);
    addLog("perfect game average " + Number(perfectGames / gamesPlayed).toFixed(2));
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
