function totalScoreOfHands() {

  var totalScore = 0;
  var scoreLog1 = "SCORE" + br + br;
  addToScoreLog(scoreLog1);

  var hcScore = getHighCardScore();
  if (hcScore > 0) {
    totalScore += hcScore;
    scoreLog1 = scoreLog1 + spanL1 + "High Card:" + endSpan + spanR1 + hcScore + " + " + HC_BONUS + endSpan + br;
    totalScore += HC_BONUS;
  } else {
    totalScore += hcScore;
    scoreLog1 = scoreLog1 + spanL1 + "High Card:" + endSpan + spanR1 + hcScore + endSpan + br;
  }
  addToScoreLog(scoreLog1);

  var twoKScore = get2kCardScore();
  if (twoKScore > 0) {
    totalScore += twoKScore;
    scoreLog1 = scoreLog1 + spanL1 + "2 of a Kind:" + endSpan + spanR1 + twoKScore + " + " + TWO_K_BONUS + endSpan + br;
    totalScore += TWO_K_BONUS;
  } else {
    totalScore += twoKScore;
    scoreLog1 = scoreLog1 + spanL1 + "2 of a Kind:" + endSpan + spanR1 + twoKScore + endSpan + br;
  }
  addToScoreLog(scoreLog1);

  var threeKScore = get3kCardScore();
  if (threeKScore > 0) {
    totalScore += threeKScore;
    scoreLog1 = scoreLog1 + spanL1 + "3 of a Kind:" + endSpan + spanR1 + threeKScore + " + " + THREE_K_BONUS + endSpan + br;
    totalScore += THREE_K_BONUS;
  } else {
    totalScore += threeKScore;
    scoreLog1 = scoreLog1 + spanL1 + "3 of a Kind:" + endSpan + spanR1 + threeKScore + endSpan + br;
  }
  addToScoreLog(scoreLog1);

  var straightScore = getStraightScore();
  if (straightScore > 0) {
    totalScore += straightScore;
    scoreLog1 = scoreLog1 + spanL1 + "Straight:" + endSpan + spanR1 + straightScore + " + " + STRAIGHT_BONUS + endSpan + br;
    totalScore += STRAIGHT_BONUS;
  } else {
    totalScore += straightScore;
    scoreLog1 = scoreLog1 + spanL1 + "Straight:" + endSpan + spanR1 + straightScore + endSpan + br;
  }
  addToScoreLog(scoreLog1);

  var flushScore = getFlushScore();
  if (flushScore > 0) {
    totalScore += flushScore;
    scoreLog1 = scoreLog1 + spanL1 + "Flush:" + endSpan + spanR1 + flushScore + " + " + FLUSH_BONUS + endSpan + br;
    totalScore += FLUSH_BONUS;
  } else {
    totalScore += flushScore;
    scoreLog1 = scoreLog1 + spanL1 + "Flush:" + endSpan + spanR1 + flushScore + endSpan + br;
  }
  addToScoreLog(scoreLog1);

  var fourKScore = get4kCardScore();
  if (fourKScore > 0) {
    totalScore += fourKScore;
    scoreLog1 = scoreLog1 + spanL1 + "4 of a Kind:" + endSpan + spanR1 + fourKScore + " + " + FOUR_K_BONUS + endSpan + br;
    totalScore += FOUR_K_BONUS;
  } else {
    totalScore += fourKScore;
    scoreLog1 = scoreLog1 + spanL1 + "4 of a Kind:" + endSpan + spanR1 + fourKScore + endSpan + br;
  }
  addToScoreLog(scoreLog1);

  var straightFlushScore = getStraightFlushScore();
  if (straightFlushScore > 0) {
    totalScore += straightFlushScore;
    scoreLog1 = scoreLog1 + spanL1 + "Straight Flush:" + endSpan + spanR1 + straightFlushScore + " + " + STRAIGHT_FLUSH_BONUS + endSpan + br + br;
    totalScore += STRAIGHT_FLUSH_BONUS;
  } else {
    totalScore += straightFlushScore;
    scoreLog1 = scoreLog1 + spanL1  + "Straight Flush:" + endSpan + spanR1 + straightFlushScore + endSpan + br + br;
  }
  addToScoreLog(scoreLog1);

  scoreLog1 = scoreLog1 + spanL1 + "Total Score:" + endSpan + spanR1 + totalScore + endSpan + br + br;
  addToScoreLog(scoreLog1);

  scoreLog1 = scoreLog1 + spanL1 + "High Score:" + endSpan + spanR1 + highScore + endSpan + br + br;
  addToScoreLog(scoreLog1);

  if (totalScore > highScore) {
    highScore = totalScore;

    var scoreSave = {
      highScore: highScore
    };

    if (isLocalStorageSupported()) {
      localStorage["scoreSave"] = JSON.stringify(scoreSave);
    }
  }
}

function getStraightFlushScore() {
  if (strFlushSlotCard1 == null ||
    strFlushSlotCard2 == null ||
    strFlushSlotCard3 == null ||
    strFlushSlotCard4 == null ||
    strFlushSlotCard5 == null) {
    return 0;
  }

  if (strFlushSlotCard1.suit != strFlushSlotCard2.suit ||
    strFlushSlotCard2.suit != strFlushSlotCard3.suit ||
    strFlushSlotCard3.suit != strFlushSlotCard4.suit ||
    strFlushSlotCard4.suit != strFlushSlotCard5.suit) {
    return 0;
  }

  if (strFlushSlotCard1.value != strFlushSlotCard2.value - 1 ||
    strFlushSlotCard2.value != strFlushSlotCard3.value - 1 ||
    strFlushSlotCard3.value != strFlushSlotCard4.value - 1 ||
    strFlushSlotCard4.value != strFlushSlotCard5.value - 1) {
    return 0;
  }

  return strFlushSlotCard1.value +
    strFlushSlotCard2.value +
    strFlushSlotCard3.value +
    strFlushSlotCard4.value +
    strFlushSlotCard5.value +
    10;
}

function getFlushScore() {
  if (flushSlotCard1 == null ||
    flushSlotCard2 == null ||
    flushSlotCard3 == null ||
    flushSlotCard4 == null ||
    flushSlotCard5 == null) {
    return 0;
  }

  if (flushSlotCard1.suit != flushSlotCard2.suit ||
    flushSlotCard2.suit != flushSlotCard3.suit ||
    flushSlotCard3.suit != flushSlotCard4.suit ||
    flushSlotCard4.suit != flushSlotCard5.suit) {
    return 0;
  }

  return flushSlotCard1.value +
    flushSlotCard2.value +
    flushSlotCard3.value +
    flushSlotCard4.value +
    flushSlotCard5.value +
    10;
}

function getStraightScore() {
  if (straightSlotCard1 == null ||
    straightSlotCard2 == null ||
    straightSlotCard3 == null ||
    straightSlotCard4 == null ||
    straightSlotCard5 == null) {
    return 0;
  }

  if (straightSlotCard1.value != straightSlotCard2.value - 1 ||
    straightSlotCard2.value != straightSlotCard3.value - 1 ||
    straightSlotCard3.value != straightSlotCard4.value - 1 ||
    straightSlotCard4.value != straightSlotCard5.value - 1) {
    return 0;
  }

  return straightSlotCard1.value +
    straightSlotCard2.value +
    straightSlotCard3.value +
    straightSlotCard4.value +
    straightSlotCard5.value +
    10;
}

function get4kCardScore() {
  //addLog("get4kCardScore()");
  if (fourkSlotCard1 == null ||
    fourkSlotCard2 == null ||
    fourkSlotCard3 == null ||
    fourkSlotCard4 == null) {
    return 0;
  }

  if (fourkSlotCard1.value != fourkSlotCard2.value ||
    fourkSlotCard2.value != fourkSlotCard3.value ||
    fourkSlotCard3.value != fourkSlotCard4.value) {
    return 0;
  }

  //addLog("4k values the same");

  return fourkSlotCard1.value +
    fourkSlotCard2.value +
    fourkSlotCard3.value +
    fourkSlotCard4.value +
    8;
}

function get3kCardScore() {
  if (threePSlotCard1 == null ||
    threePSlotCard2 == null ||
    threePSlotCard3 == null) {
    return 0;
  }

  if (threePSlotCard1.value != threePSlotCard2.value ||
    threePSlotCard2.value != threePSlotCard3.value) {
    return 0;
  }

  return threePSlotCard1.value +
    threePSlotCard2.value +
    threePSlotCard3.value +
    6;
}

function getHighCardScore() {
  if (hcSlotCard == null) {
    return 0;
  }

  return hcSlotCard.value + 2;
}

function get2kCardScore() {
  if (twoPSlotCard1 == null ||
    twoPSlotCard2 == null) {
    return 0;
  }

  if (twoPSlotCard1.value != twoPSlotCard2.value) {
    return 0;
  }

  return twoPSlotCard1.value +
    twoPSlotCard2.value +
    4;
}

function addToScoreLog(newLog1) {
  scoreText.innerHTML = newLog1;
}
