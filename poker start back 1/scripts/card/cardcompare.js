function checkHCisGreater(card) {
  if (hcSlotCard == null) {
    if (doLogCardDetails) {
      addLog("Player " + (playerTurn + 1) + ": No HC card played");
    }

    return true;
  }

  if (card.value > hcSlotCard.value) {
    if (doLogCardDetails) {
      addLog("Player " + (playerTurn + 1) + ": " + printCard(card) + " > " + printCard(hcSlotCard));
    }

    return true;
  }

  if (doLogCardDetails) {
    addLog("Player " + (playerTurn + 1) + ": " + printCard(card) + " can not replace " + printCard(hcSlotCard));
  }
  return false;
}

function checkHandForMatchingValues(card, hand) {
  var kind = 0;
  var printedCards = "";
  for (var i = 0; i < hand.length; i++) {
    if (hand[i].value == card.value) {
      kind++;
      printedCards = printedCards + printCard(hand[i]);
    }
  }

  if (doLogCardDetails && kind > 1) {
    addLog("Player " + (playerTurn + 1) + ": Kind matches " + printedCards);
  }
  return kind;
}

function checkCardCanReplaceCurrent2kPlayed(tempCard) {
  // if no cards played it can replace
  if ((twoPSlotCard1 == null ||
      twoPSlotCard2 == null)) {

    if (doLogCardDetails) {
      addLog("Player " + (playerTurn + 1) + ": No 2K cards played");
    }
    return true;
  }

  if (tempCard.value > twoPSlotCard1.value &&
    tempCard.value > twoPSlotCard2.value) {

    if (doLogCardDetails) {
      addLog("Player " + (playerTurn + 1) + ": " + printCard(tempCard) + " > " + printCard(twoPSlotCard1) + printCard(twoPSlotCard2));
    }
    return true;
  }

  return false;
}

function checkHandFor3cardStraight(card, hand) {
  var oneLower = false;
  var twoLower = false;
  var oneHigher = false;
  var twoHigher = false;

  var straightArray = [];
  straightArray.push(card);

  for (var i = 0; i < hand.length; i++) {
    if (hand[i].value == (card.value + 1)) {
      straightArray.push(hand[i]);
      oneHigher = true;
    }
    if (hand[i].value == (card.value - 1)) {
      straightArray.push(hand[i]);
      oneLower = true;
    }
    if (hand[i].value == (card.value + 2)) {
      straightArray.push(hand[i]);
      twoHigher = true;
    }
    if (hand[i].value == (card.value - 2)) {
      straightArray.push(hand[i]);
      twoLower = true;
    }
  }

  straightArray = straightArray.sort(function(a, b) {
    return a.value - b.value;
  });

  if (oneLower == true && oneHigher == true) {
    if (doLogCardDetails) {
      addLog("Player " + (playerTurn + 1) + ": Straight found " + printCardArr(straightArray));
    }
    return true;
  }

  if (oneLower == true && twoLower == true) {
    if (doLogCardDetails) {
      addLog("Player " + (playerTurn + 1) + ": Straight found " + printCardArr(straightArray));
    }
    return true;
  }

  if (oneHigher == true && twoHigher == true) {
    if (doLogCardDetails) {
      addLog("Player " + (playerTurn + 1) + ": Straight found " + printCardArr(straightArray));
    }
    return true;
  }

  return false;
}

function checkBetterFlush(cardArr) {
  //addLog("cardArr=" + printCardArr(cardArr));
  if (cardArr.length < 5) {
    return false;
  }

  var placed = getFlushScore();
  var curr = cardArr[0].value +
    cardArr[1].value +
    cardArr[2].value +
    cardArr[3].value +
    cardArr[4].value +
    10;
  //addLog("curr=" + curr + ", placed=" + placed);
  return curr > placed;
}

function checkCardFlushCount(card, hand) {
  var flush = 0;
  var printedFlush = "";
  for (var i = 0; i < hand.length; i++) {
    if (hand[i].suit == card.suit) {
      flush++;
      printedFlush = printedFlush + printCard(hand[i]);
    }
  }

  if (doLogCardDetails && flush > 2) {
    addLog("Player " + (playerTurn + 1) + ": Flush " + printedFlush);
  }
  return flush;
}

function checkCardValueHasBeenPlayed(temp) {
  //addLog("checkCardValueHasBeenPlayed()" + printCard(temp));
  var value = temp.value;

  //check hc card value
  if (hcSlotCard != null && hcSlotCard.value == value) {
    //addLog("hc played " + printCard(hcSlotCard) + printCard(temp));
    return true;
  }

  // check 2k card values
  if (twoPSlotCard1 != null && twoPSlotCard1.value == value) {
    //addLog("2k played " + printCard(twoPSlotCard1) + printCard(temp));
    return true;
  }

  if (twoPSlotCard2 != null && twoPSlotCard2.value == value) {
    //addLog("2k played " + printCard(twoPSlotCard2) + printCard(temp));
    return true;
  }

  //check 3k card values
  if (threePSlotCard1 != null && threePSlotCard1.value == value) {
    //addLog("3k played " + printCard(threePSlotCard1) + printCard(temp));
    return true;
  }

  if (threePSlotCard2 != null && threePSlotCard2.value == value) {
    //addLog("3k played " + printCard(threePSlotCard2) + printCard(temp));
    return true;
  }

  if (threePSlotCard3 != null && threePSlotCard3.value == value) {
    //addLog("3k played " + printCard(threePSlotCard3) + printCard(temp));
    return true;
  }

  // straight card values
  if (straightSlotCard1 != null && straightSlotCard1.value == value) {
    //addLog("str played " + printCard(straightSlotCard1) + printCard(temp));
    return true;
  }

  if (straightSlotCard2 != null && straightSlotCard2.value == value) {
    //addLog("str played " + printCard(straightSlotCard2) + printCard(temp));
    return true;
  }

  if (straightSlotCard3 != null && straightSlotCard3.value == value) {
    //addLog("str played " + printCard(straightSlotCard3) + printCard(temp));
    return true;
  }

  if (straightSlotCard4 != null && straightSlotCard4.value == value) {
    //addLog("str played " + printCard(straightSlotCard4) + printCard(temp));
    return true;
  }

  if (straightSlotCard5 != null && straightSlotCard5.value == value) {
    //addLog("str played " + printCard(straightSlotCard5) + printCard(temp));
    return true;
  }

  //flush card values
  if (flushSlotCard1 != null && flushSlotCard1.value == value) {
    //addLog("flush played " + printCard(flushSlotCard1) + printCard(temp));
    return true;
  }
  if (flushSlotCard2 != null && flushSlotCard2.value == value) {
    //addLog("flush played " + printCard(flushSlotCard2) + printCard(temp));
    return true;
  }
  if (flushSlotCard3 != null && flushSlotCard3.value == value) {
    //addLog("flush played " + printCard(flushSlotCard3) + printCard(temp));
    return true;
  }
  if (flushSlotCard4 != null && flushSlotCard4.value == value) {
    //addLog("flush played " + printCard(flushSlotCard4) + printCard(temp));
    return true;
  }
  if (flushSlotCard5 != null && flushSlotCard5.value == value) {
    //addLog("flush played " + printCard(flushSlotCard5) + printCard(temp));
    return true;
  }

  //four k values
  if (fourkSlotCard1 != null && fourkSlotCard1.value == value) {
    //addLog("4k played " + printCard(fourkSlotCard1) + printCard(temp));
    return true;
  }
  if (fourkSlotCard2 != null && fourkSlotCard2.value == value) {
    //addLog("4k played " + printCard(fourkSlotCard2) + printCard(temp));
    return true;
  }
  if (fourkSlotCard3 != null && fourkSlotCard3.value == value) {
    //addLog("4k played " + printCard(fourkSlotCard3) + printCard(temp));
    return true;
  }
  if (fourkSlotCard4 != null && fourkSlotCard4.value == value) {
    //addLog("4k played " + printCard(fourkSlotCard4) + printCard(temp));
    return true;
  }

  // str flush values
  if (strFlushSlotCard1 != null && strFlushSlotCard1.value == value) {
    //addLog("str flush played " + printCard(strFlushSlotCard1) + printCard(temp));
    return true;
  }
  if (strFlushSlotCard2 != null && strFlushSlotCard2.value == value) {
    //addLog("str flush played " + printCard(strFlushSlotCard2) + printCard(temp));
    return true;
  }
  if (strFlushSlotCard3 != null && strFlushSlotCard3.value == value) {
    //addLog("str flush played " + printCard(strFlushSlotCard3) + printCard(temp));
    return true;
  }
  if (strFlushSlotCard4 != null && strFlushSlotCard4.value == value) {
    //addLog("str flush played " + printCard(strFlushSlotCard4) + printCard(temp));
    return true;
  }
  if (strFlushSlotCard5 != null && strFlushSlotCard5.value == value) {
    //addLog("str flush played " + printCard(strFlushSlotCard5) + printCard(temp));
    return true;
  }

  return false;
}

function findStraightFlushCards(card, cardArr) {
  //addLog("findPartialStraightFlush()" + printCardArr(cardArr));

  var partialArr = [];
  partialArr.push(card);

  for (var i = 0; i < cardArr.length; i++) {
    var tempCard = cardArr[i];
    if (card.suit == tempCard.suit) {
      if (card.value == tempCard.value - 1 || card.value == tempCard.value + 1) {
        partialArr.push(tempCard);
      }
      if (card.value == tempCard.value - 2 || card.value == tempCard.value + 2) {
        partialArr.push(tempCard);
      }
      if (card.value == tempCard.value - 3 || card.value == tempCard.value + 3) {
        partialArr.push(tempCard);
      }
      if (card.value == tempCard.value - 4 || card.value == tempCard.value + 4) {
        partialArr.push(tempCard);
      }
    }
  }

  partialArr = partialArr.sort(function(a, b) {
    return a.value - b.value;
  });

  var removeIndexes = [];
  if (partialArr.length > 1) {
    //addLogLine("partialArr=" + printCardArr(partialArr));
    var startIndex = 0;
    for (var i = 0; i < partialArr.length; i++) {
      if (card.value == partialArr[i].value) {
        startIndex = i;
      }
    }
    //addLogLine("startIndex=" + startIndex);

    var acc = 1;
    for (var i = startIndex - 1; i >= 0; i--) {
      if (partialArr[i].value + acc != card.value) {
        removeIndexes.push(partialArr[i]);
      }
      acc++;
    }

    acc = 1;
    for (var i = startIndex + 1; i < partialArr.length; i++) {
      if (partialArr[i].value - acc != card.value) {
        removeIndexes.push(partialArr[i]);
      }
      acc++;
    }

    for (var i = 0; i < removeIndexes.length; i++) {
      var removeMe = removeIndexes[i];
      removeCardFromArray(removeMe, partialArr);
    }
  }

  return partialArr;
}

function checkValuePlayedCount(value) {
  var acc = 0;
  if (hcSlotCard != null && hcSlotCard.value == value) {
    acc++;
  }

  if (twoPSlotCard1 != null && twoPSlotCard1.value == value) {
    acc++;
  }
  if (twoPSlotCard2 != null && twoPSlotCard2.value == value) {
    acc++;
  }

  if (threePSlotCard1 != null && threePSlotCard1.value == value) {
    acc++;
  }
  if (threePSlotCard2 != null && threePSlotCard2.value == value) {
    acc++;
  }
  if (threePSlotCard3 != null && threePSlotCard3.value == value) {
    acc++;
  }

  if (straightSlotCard1 != null && straightSlotCard1.value == value) {
    acc++;
  }
  if (straightSlotCard2 != null && straightSlotCard2.value == value) {
    acc++;
  }
  if (straightSlotCard3 != null && straightSlotCard3.value == value) {
    acc++;
  }
  if (straightSlotCard4 != null && straightSlotCard4.value == value) {
    acc++;
  }
  if (straightSlotCard5 != null && straightSlotCard5.value == value) {
    acc++;
  }

  if (flushSlotCard1 != null && flushSlotCard1.value == value) {
    acc++;
  }
  if (flushSlotCard2 != null && flushSlotCard2.value == value) {
    acc++;
  }
  if (flushSlotCard3 != null && flushSlotCard3.value == value) {
    acc++;
  }
  if (flushSlotCard4 != null && flushSlotCard4.value == value) {
    acc++;
  }
  if (flushSlotCard5 != null && flushSlotCard5.value == value) {
    acc++;
  }

  if (fourkSlotCard1 != null && fourkSlotCard1.value == value) {
    acc++;
  }
  if (fourkSlotCard2 != null && fourkSlotCard2.value == value) {
    acc++;
  }
  if (fourkSlotCard3 != null && fourkSlotCard3.value == value) {
    acc++;
  }
  if (fourkSlotCard4 != null && fourkSlotCard4.value == value) {
    acc++;
  }

  if (strFlushSlotCard1 != null && strFlushSlotCard1.value == value) {
    acc++;
  }
  if (strFlushSlotCard2 != null && strFlushSlotCard2.value == value) {
    acc++;
  }
  if (strFlushSlotCard3 != null && strFlushSlotCard3.value == value) {
    acc++;
  }
  if (strFlushSlotCard4 != null && strFlushSlotCard4.value == value) {
    acc++;
  }
  if (strFlushSlotCard5 != null && strFlushSlotCard5.value == value) {
    acc++;
  }

  return acc;
}

function isPartialArrayValidAttemptAtStraightFlush(value3, value4, value5, suit) {

  var card1 = new Card(suit, value3 - 2, null);
  var card2 = new Card(suit, value3 - 1, null);
  var card6 = new Card(suit, value5 + 1, null);
  var card7 = new Card(suit, value5 + 2, null);

  // 0, 1, 2 can only be blocked with 3 or 4 played
  if (value3 == 0) {
    if (checkCardHasBeenPlayed(card6)) {
      return false;
    }

    if (checkCardHasBeenPlayed(card7)) {
      return false;
    }
  }

  if (value3 == 1) {
    if (checkCardHasBeenPlayed(card6)) {
      return false;
    }

    if (checkCardHasBeenPlayed(card2) &&
      checkCardHasBeenPlayed(card7)) {
      return false;
    }
  }

  // check card 4 to 10, sf cards needed are two up two down or 1 up and 1 down
  if (value3 == 2 || value3 == 3 || value3 == 4 || value3 == 5 ||
    value3 == 6 || value3 == 7 || value3 == 8) {

    if (checkCardHasBeenPlayed(card2) &&
      checkCardHasBeenPlayed(card6)) {
      return false;
    }

    if (checkCardHasBeenPlayed(card1) &&
      checkCardHasBeenPlayed(card6)) {
      return false;
    }

    if (checkCardHasBeenPlayed(card2) &&
      checkCardHasBeenPlayed(card7)) {
      return false;
    }
  }

  if (value3 == 9) {
    if (checkCardHasBeenPlayed(card2)) {
      return false;
    }

    if (checkCardHasBeenPlayed(card1) &&
      checkCardHasBeenPlayed(card6)) {
      return false;
    }
  }

  if (value3 == 10) {
    if (checkCardHasBeenPlayed(card1)) {
      return false;
    }
    if (checkCardHasBeenPlayed(card2)) {
      return false;
    }
  }

  return true;
}

function checkCardHasBeenPlayed(card) {
  var value = card.value;
  var suit = card.suit;

  //check hc card value
  if (hcSlotCard != null && hcSlotCard.value == value && hcSlotCard.suit == suit) {
    //addLogLine("hc played " + printCard(card));
    return true;
  }

  // check 2k card values
  if (twoPSlotCard1 != null && twoPSlotCard1.value == value && twoPSlotCard1.suit == suit) {
    //addLogLine("2k played " + printCard(card));
    return true;
  }

  if (twoPSlotCard2 != null && twoPSlotCard2.value == value && twoPSlotCard2.suit == suit) {
    //addLogLine("2k played " + printCard(card));
    return true;
  }

  //check 3k card values
  if (threePSlotCard1 != null && threePSlotCard1.value == value && threePSlotCard1.suit == suit) {
    //addLogLine("3k played " + printCard(card));
    return true;
  }

  if (threePSlotCard2 != null && threePSlotCard2.value == value && threePSlotCard2.suit == suit) {
    //addLogLine("3k played " + printCard(card));
    return true;
  }

  if (threePSlotCard3 != null && threePSlotCard3.value == value && threePSlotCard3.suit == suit) {
    //addLogLine("3k played " + printCard(card));
    return true;
  }

  // straight card values
  if (straightSlotCard1 != null && straightSlotCard1.value == value && straightSlotCard1.suit == suit) {
    //addLogLine("str played " + printCard(card));
    return true;
  }

  if (straightSlotCard2 != null && straightSlotCard2.value == value && straightSlotCard2.suit == suit) {
    //addLogLine("str played " + printCard(card));
    return true;
  }

  if (straightSlotCard3 != null && straightSlotCard3.value == value && straightSlotCard3.suit == suit) {
    //addLogLine("str played " + printCard(card));
    return true;
  }

  if (straightSlotCard4 != null && straightSlotCard4.value == value && straightSlotCard4.suit == suit) {
    //addLogLine("str played " + printCard(card));
    return true;
  }

  if (straightSlotCard5 != null && straightSlotCard5.value == value && straightSlotCard5.suit == suit) {
    //addLogLine("str played " + printCard(card));
    return true;
  }

  //flush card values
  if (flushSlotCard1 != null && flushSlotCard1.value == value && flushSlotCard1.suit == suit) {
    //addLogLine("flush played " + printCard(card));
    return true;
  }
  if (flushSlotCard2 != null && flushSlotCard2.value == value && flushSlotCard2.suit == suit) {
    //addLogLine("flush played " + printCard(card));
    return true;
  }
  if (flushSlotCard3 != null && flushSlotCard3.value == value && flushSlotCard3.suit == suit) {
    //addLogLine("flush played " + printCard(card));
    return true;
  }
  if (flushSlotCard4 != null && flushSlotCard4.value == value && flushSlotCard4.suit == suit) {
    //addLogLine("flush played " + printCard(card));
    return true;
  }
  if (flushSlotCard5 != null && flushSlotCard5.value == value && flushSlotCard5.suit == suit) {
    //addLogLine("flush played " + printCard(card));
    return true;
  }

  //four k values
  if (fourkSlotCard1 != null && fourkSlotCard1.value == value && fourkSlotCard1.suit == suit) {
    //addLogLine("4k played " + printCard(card));
    return true;
  }
  if (fourkSlotCard2 != null && fourkSlotCard2.value == value && fourkSlotCard2.suit == suit) {
    //addLogLine("4k played " + printCard(card));
    return true;
  }
  if (fourkSlotCard3 != null && fourkSlotCard3.value == value && fourkSlotCard3.suit == suit) {
    //addLogLine("4k played " + printCard(card));
    return true;
  }
  if (fourkSlotCard4 != null && fourkSlotCard4.value == value && fourkSlotCard4.suit == suit) {
    //addLogLine("4k played " + printCard(card));
    return true;
  }

  // str flush values
  if (strFlushSlotCard1 != null && strFlushSlotCard1.value == value && strFlushSlotCard1.suit == suit) {
    //addLogLine("str flush played " + printCard(card));
    return true;
  }
  if (strFlushSlotCard2 != null && strFlushSlotCard2.value == value && strFlushSlotCard2.suit == suit) {
    //addLogLine("str flush played " + printCard(card));
    return true;
  }
  if (strFlushSlotCard3 != null && strFlushSlotCard3.value == value && strFlushSlotCard3.suit == suit) {
    //addLogLine("str flush played " + printCard(card));
    return true;
  }
  if (strFlushSlotCard4 != null && strFlushSlotCard4.value == value && strFlushSlotCard4.suit == suit) {
    //addLogLine("str flush played " + printCard(card));
    return true;
  }
  if (strFlushSlotCard5 != null && strFlushSlotCard5.value == value && strFlushSlotCard5.suit == suit) {
    //addLogLine("str flush played " + printCard(card));
    return true;
  }

  return false;
}
