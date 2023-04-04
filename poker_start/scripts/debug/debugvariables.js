var gamesPlayed = 0;
var gamesToPlay = 1;

var allPCPlayers = false;

var gamesHCcardPlayed = 0;
var games2kcardPlayed = 0;
var games3kcardPlayed = 0;
var gamesStcardPlayed = 0;
var gamesFlcardPlayed = 0;
var games4kcardPlayed = 0;
var gamesSFcardPlayed = 0;

var totalHCcardPoints = 0;
var total2kcardPoints = 0;
var total3kcardPoints = 0;
var totalStcardPoints = 0;
var totalFlcardPoints = 0;
var total4kcardPoints = 0;
var totalSFcardPoints = 0;

var runAutoHc = true;
var runAuto2k = true;
var runAuto3k = true;
var runAutoSt = true;
var runAutoFl = true;
var runAuto4k = true;
var runAutoSF = true;

var doLogPlacedCards = false;
var doNeverEndGame = false;
var doLogPlayerTurn = true;
var doAutoHideTutorial = false;
var doLogCardDetails = false;
var doRunControlTest = false;
var doShowUIDuringTest = false;

var totalHighScore = 0;

var hcScores = [];
var twokScores = [];
var threekScores = [];
var stScores = [];
var flScores = [];
var fourkScores = [];
var sfScores = [];

function printScoreArray(arr) {
  var printed = "";
  for (var i = 0; i < arr.length; i++) {
    printed = printed + arr[i];
  }

  return printed;
}

function printTestScores() {
  //reset game log for scores
  log = "";
  addLog("Game Count = " + gamesToPlay);
  addLog("");

  addLog("hc card played average " + gamesHCcardPlayed / gamesToPlay);
  //addLog("hc card scores " + printScoreArray(hcScores));
  addLog("hc card score average " + totalHCcardPoints / gamesHCcardPlayed);
  addLog("hc card score bonus average " + (totalHCcardPoints / gamesHCcardPlayed));
  addLog("");

  addLog("2k card played average " + games2kcardPlayed / gamesToPlay);
  //addLog("2k card scores " + printScoreArray(twokScores));
  addLog("2k card score average " + total2kcardPoints / games2kcardPlayed);
  addLog("2k card score bonus average " + (total2kcardPoints / gamesHCcardPlayed));
  addLog("");

  addLog("3k card played average " + games3kcardPlayed / gamesToPlay);
  //addLog("3k card scores " + printScoreArray(threekScores));
  addLog("3k card score average " + total3kcardPoints / games3kcardPlayed);
  addLog("3k card score bonus average " + (total3kcardPoints / games3kcardPlayed));
  addLog("");

  addLog("St card played average " + gamesStcardPlayed / gamesToPlay);
  //addLog("st card scores " + printScoreArray(stScores));
  addLog("St card score average " + totalStcardPoints / gamesStcardPlayed);
  addLog("st card score bonus average " + (totalStcardPoints / gamesStcardPlayed));
  addLog("");

  addLog("fl card played average " + gamesFlcardPlayed / gamesToPlay);
  //addLog("fl card scores " + printScoreArray(flScores));
  addLog("fl card score average " + totalFlcardPoints / gamesFlcardPlayed);
  addLog("fl card score bonus average " + (totalFlcardPoints / gamesFlcardPlayed));
  addLog("");

  addLog("4k card played average " + games4kcardPlayed / gamesToPlay);
  //addLog("4k card scores " + printScoreArray(fourkScores));
  addLog("4k card score average " + total4kcardPoints / games4kcardPlayed);
  addLog("4k card score bonus average " + (total4kcardPoints / games4kcardPlayed));
  addLog("");

  addLog("sf card played average " + gamesSFcardPlayed / gamesToPlay);
  addLog("sf card score average " + totalSFcardPoints / gamesSFcardPlayed);
  addLog("sf card score bonus average " + (totalSFcardPoints / gamesSFcardPlayed));
  addLog("");

  addLog("total score average " + totalHighScore / gamesToPlay);
  addLog("perfect game average " + perfectGames / gamesToPlay);
  addLog("" + new Date());
}

function totalTestScores() {

  var hcScore = getHighCardScore();
  hcScores.push("(" + hcScore + ")");
  var perfectStill = true;
  if (hcScore > 0) {
    gamesHCcardPlayed++;
    totalHCcardPoints += hcScore + HC_BONUS;
    totalHighScore += hcScore + HC_BONUS;
  } else {
    perfectStill = false;
  }

  var twokScore = get2kCardScore();
  twokScores.push("(" + twokScore + ")");
  if (twokScore > 0) {
    games2kcardPlayed++;
    total2kcardPoints += twokScore + TWO_K_BONUS;
    totalHighScore += twokScore + TWO_K_BONUS;
  } else {
    perfectStill = false;
  }

  var threekScore = get3kCardScore();
  threekScores.push("(" + threekScore + ")");
  if (threekScore > 0) {
    games3kcardPlayed++;
    total3kcardPoints += threekScore + THREE_K_BONUS;
    totalHighScore += threekScore + THREE_K_BONUS;
  } else {
    perfectStill = false;
  }

  var stScore = getStraightScore();
  stScores.push("(" + stScore + ")");
  if (stScore > 0) {
    gamesStcardPlayed++;
    totalStcardPoints += stScore + STRAIGHT_BONUS;
    totalHighScore += stScore + STRAIGHT_BONUS;
  } else {
    perfectStill = false;
  }

  var flScore = getFlushScore();
  flScores.push("(" + flScore + ")");
  if (flScore > 0) {
    gamesFlcardPlayed++;
    totalFlcardPoints += flScore + FLUSH_BONUS;
    totalHighScore += flScore + FLUSH_BONUS;
  } else {
    perfectStill = false;
  }

  var fourkScore = get4kCardScore();
  fourkScores.push("(" + fourkScore + ")");
  if (fourkScore > 0) {
    games4kcardPlayed++;
    total4kcardPoints += fourkScore + FOUR_K_BONUS;
    totalHighScore += fourkScore + FOUR_K_BONUS;
  } else {
    perfectStill = false;
  }

  var sfScore = getStraightFlushScore();
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
  for (var i = 0; i < cardArr.length; i++) {
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
