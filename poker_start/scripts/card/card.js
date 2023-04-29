function Card(s, v, p) {
  this.suit = s;
  this.value = v;
  this.imagePath = p;
  this.bitmap = new Image();
}

function getCardImagePath(suit, value) {
  //addLog("getCardImagePath(" + suit + "," + value + ")");
  let path = "";
  switch (suit) {
    case 0:
      switch (value) {
        case 0:
          path = 'assets/cards/2d.jpg';
          break;
        case 1:
          path = 'assets/cards/3d.jpg';
          break;
        case 2:
          path = 'assets/cards/4d.jpg';
          break;
        case 3:
          path = 'assets/cards/5d.jpg';
          break;
        case 4:
          path = 'assets/cards/6d.jpg';
          break;
        case 5:
          path = 'assets/cards/7d.jpg';
          break;
        case 6:
          path = 'assets/cards/8d.jpg';
          break;
        case 7:
          path = 'assets/cards/9d.jpg';
          break;
        case 8:
          path = 'assets/cards/10d2.jpg';
          break;
        case 9:
          path = 'assets/cards/jd.jpg';
          break;
        case 10:
          path = 'assets/cards/qd2.jpg';
          break;
        case 11:
          path = 'assets/cards/kd.jpg';
          break;
        case 12:
          path = 'assets/cards/ad.jpg';
          break;
      }
      break;
    case 1:
      switch (value) {
        case 0:
          path = 'assets/cards/2c.jpg';
          break;
        case 1:
          path = 'assets/cards/3c.jpg';
          break;
        case 2:
          path = 'assets/cards/4c.jpg';
          break;
        case 3:
          path = 'assets/cards/5c.jpg';
          break;
        case 4:
          path = 'assets/cards/6c.jpg';
          break;
        case 5:
          path = 'assets/cards/7c.jpg';
          break;
        case 6:
          path = 'assets/cards/8c.jpg';
          break;
        case 7:
          path = 'assets/cards/9c.jpg';
          break;
        case 8:
          path = 'assets/cards/10c2.jpg';
          break;
        case 9:
          path = 'assets/cards/jc.jpg';
          break;
        case 10:
          path = 'assets/cards/qc2.jpg';
          break;
        case 11:
          path = 'assets/cards/kc.jpg';
          break;
        case 12:
          path = 'assets/cards/ac.jpg';
          break;
      }
      break;
    case 2:
      switch (value) {
        case 0:
          path = 'assets/cards/2h.jpg';
          break;
        case 1:
          path = 'assets/cards/3h.jpg';
          break;
        case 2:
          path = 'assets/cards/4h.jpg';
          break;
        case 3:
          path = 'assets/cards/5h.jpg';
          break;
        case 4:
          path = 'assets/cards/6h.jpg';
          break;
        case 5:
          path = 'assets/cards/7h.jpg';
          break;
        case 6:
          path = 'assets/cards/8h.jpg';
          break;
        case 7:
          path = 'assets/cards/9h.jpg';
          break;
        case 8:
          path = 'assets/cards/10h2.jpg';
          break;
        case 9:
          path = 'assets/cards/jh.jpg';
          break;
        case 10:
          path = 'assets/cards/qh2.jpg';
          break;
        case 11:
          path = 'assets/cards/kh.jpg';
          break;
        case 12:
          path = 'assets/cards/ah.jpg';
          break;
      }
      break;
    case 3:
      switch (value) {
        case 0:
          path = 'assets/cards/2s.jpg';
          break;
        case 1:
          path = 'assets/cards/3s.jpg';
          break;
        case 2:
          path = 'assets/cards/4s.jpg';
          break;
        case 3:
          path = 'assets/cards/5s.jpg';
          break;
        case 4:
          path = 'assets/cards/6s.jpg';
          break;
        case 5:
          path = 'assets/cards/7s.jpg';
          break;
        case 6:
          path = 'assets/cards/8s.jpg';
          break;
        case 7:
          path = 'assets/cards/9s.jpg';
          break;
        case 8:
          path = 'assets/cards/10s2.jpg';
          break;
        case 9:
          path = 'assets/cards/js.jpg';
          break;
        case 10:
          path = 'assets/cards/qs2.jpg';
          break;
        case 11:
          path = 'assets/cards/ks.jpg';
          break;
        case 12:
          path = 'assets/cards/as.jpg';
          break;
      }
      break;
  }

  return path;
}

function getSuitCharacter(suit) {
  switch (suit) {
    case 0:
      return "&#9671;";
    case 1:
      return "&#9831;";
    case 2:
      return "&#9825;";
    case 3:
      return "&#9828;";
  }
}

function getFaceValue(value) {
  switch (value) {
    case 0:
      return 2;
    case 1:
      return 3;
    case 2:
      return 4;
    case 3:
      return 5;
    case 4:
      return 6;
    case 5:
      return 7;
    case 6:
      return 8;
    case 7:
      return 9;
    case 8:
      return 10;
    case 9:
      return "J";
    case 10:
      return "Q";
    case 11:
      return "K";
    case 12:
      return "A";
  }
}

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
  let kind = 0;
  let printedCards = "";
  for (let i = 0; i < hand.length; i++) {
    if (hand[i].value === card.value) {
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
  if ((twoPSlotCard1 === null ||
      twoPSlotCard2 === null)) {

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
  let oneLower = false;
  let twoLower = false;
  let oneHigher = false;
  let twoHigher = false;

  let straightArray = [];
  straightArray.push(card);

  for (let i = 0; i < hand.length; i++) {
    if (hand[i].value === (card.value + 1)) {
      straightArray.push(hand[i]);
      oneHigher = true;
    }
    if (hand[i].value === (card.value - 1)) {
      straightArray.push(hand[i]);
      oneLower = true;
    }
    if (hand[i].value === (card.value + 2)) {
      straightArray.push(hand[i]);
      twoHigher = true;
    }
    if (hand[i].value === (card.value - 2)) {
      straightArray.push(hand[i]);
      twoLower = true;
    }
  }

  straightArray = straightArray.sort(function(a, b) {
    return a.value - b.value;
  });

  if (oneLower === true && oneHigher === true) {
    if (doLogCardDetails) {
      addLog("Player " + (playerTurn + 1) + ": Straight found " + printCardArr(straightArray));
    }
    return true;
  }

  if (oneLower === true && twoLower === true) {
    if (doLogCardDetails) {
      addLog("Player " + (playerTurn + 1) + ": Straight found " + printCardArr(straightArray));
    }
    return true;
  }

  if (oneHigher === true && twoHigher === true) {
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

  let placed = getFlushScore();
  let curr = cardArr[0].value +
    cardArr[1].value +
    cardArr[2].value +
    cardArr[3].value +
    cardArr[4].value +
    10;
  //addLog("curr=" + curr + ", placed=" + placed);
  return curr > placed;
}

function checkCardFlushCount(card, hand) {
  let flush = 0;
  let printedFlush = "";
  for (let i = 0; i < hand.length; i++) {
    if (hand[i].suit === card.suit) {
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
  let value = temp.value;

  //check hc card value
  if (hcSlotCard != null && hcSlotCard.value === value) {
    //addLog("hc played " + printCard(hcSlotCard) + printCard(temp));
    return true;
  }

  // check 2k card values
  if (twoPSlotCard1 != null && twoPSlotCard1.value === value) {
    //addLog("2k played " + printCard(twoPSlotCard1) + printCard(temp));
    return true;
  }

  if (twoPSlotCard2 != null && twoPSlotCard2.value === value) {
    //addLog("2k played " + printCard(twoPSlotCard2) + printCard(temp));
    return true;
  }

  //check 3k card values
  if (threePSlotCard1 != null && threePSlotCard1.value === value) {
    //addLog("3k played " + printCard(threePSlotCard1) + printCard(temp));
    return true;
  }

  if (threePSlotCard2 != null && threePSlotCard2.value === value) {
    //addLog("3k played " + printCard(threePSlotCard2) + printCard(temp));
    return true;
  }

  if (threePSlotCard3 != null && threePSlotCard3.value === value) {
    //addLog("3k played " + printCard(threePSlotCard3) + printCard(temp));
    return true;
  }

  // straight card values
  if (straightSlotCard1 != null && straightSlotCard1.value === value) {
    //addLog("str played " + printCard(straightSlotCard1) + printCard(temp));
    return true;
  }

  if (straightSlotCard2 != null && straightSlotCard2.value === value) {
    //addLog("str played " + printCard(straightSlotCard2) + printCard(temp));
    return true;
  }

  if (straightSlotCard3 != null && straightSlotCard3.value === value) {
    //addLog("str played " + printCard(straightSlotCard3) + printCard(temp));
    return true;
  }

  if (straightSlotCard4 != null && straightSlotCard4.value === value) {
    //addLog("str played " + printCard(straightSlotCard4) + printCard(temp));
    return true;
  }

  if (straightSlotCard5 != null && straightSlotCard5.value === value) {
    //addLog("str played " + printCard(straightSlotCard5) + printCard(temp));
    return true;
  }

  //flush card values
  if (flushSlotCard1 != null && flushSlotCard1.value === value) {
    //addLog("flush played " + printCard(flushSlotCard1) + printCard(temp));
    return true;
  }
  if (flushSlotCard2 != null && flushSlotCard2.value === value) {
    //addLog("flush played " + printCard(flushSlotCard2) + printCard(temp));
    return true;
  }
  if (flushSlotCard3 != null && flushSlotCard3.value === value) {
    //addLog("flush played " + printCard(flushSlotCard3) + printCard(temp));
    return true;
  }
  if (flushSlotCard4 != null && flushSlotCard4.value === value) {
    //addLog("flush played " + printCard(flushSlotCard4) + printCard(temp));
    return true;
  }
  if (flushSlotCard5 != null && flushSlotCard5.value === value) {
    //addLog("flush played " + printCard(flushSlotCard5) + printCard(temp));
    return true;
  }

  //four k values
  if (fourkSlotCard1 != null && fourkSlotCard1.value === value) {
    //addLog("4k played " + printCard(fourkSlotCard1) + printCard(temp));
    return true;
  }
  if (fourkSlotCard2 != null && fourkSlotCard2.value === value) {
    //addLog("4k played " + printCard(fourkSlotCard2) + printCard(temp));
    return true;
  }
  if (fourkSlotCard3 != null && fourkSlotCard3.value === value) {
    //addLog("4k played " + printCard(fourkSlotCard3) + printCard(temp));
    return true;
  }
  if (fourkSlotCard4 != null && fourkSlotCard4.value === value) {
    //addLog("4k played " + printCard(fourkSlotCard4) + printCard(temp));
    return true;
  }

  // str flush values
  if (strFlushSlotCard1 != null && strFlushSlotCard1.value === value) {
    //addLog("str flush played " + printCard(strFlushSlotCard1) + printCard(temp));
    return true;
  }
  if (strFlushSlotCard2 != null && strFlushSlotCard2.value === value) {
    //addLog("str flush played " + printCard(strFlushSlotCard2) + printCard(temp));
    return true;
  }
  if (strFlushSlotCard3 != null && strFlushSlotCard3.value === value) {
    //addLog("str flush played " + printCard(strFlushSlotCard3) + printCard(temp));
    return true;
  }
  if (strFlushSlotCard4 != null && strFlushSlotCard4.value === value) {
    //addLog("str flush played " + printCard(strFlushSlotCard4) + printCard(temp));
    return true;
  }
  return strFlushSlotCard5 != null && strFlushSlotCard5.value === value;
}

function findStraightFlushCards(card, cardArr) {
  //addLog("findPartialStraightFlush()" + printCardArr(cardArr));

  let partialArr = [];
  partialArr.push(card);

  for (let i = 0; i < cardArr.length; i++) {
    let tempCard = cardArr[i];
    if (card.suit === tempCard.suit) {
      if (card.value === tempCard.value - 1 || card.value === tempCard.value + 1) {
        partialArr.push(tempCard);
      }
      if (card.value === tempCard.value - 2 || card.value === tempCard.value + 2) {
        partialArr.push(tempCard);
      }
      if (card.value === tempCard.value - 3 || card.value === tempCard.value + 3) {
        partialArr.push(tempCard);
      }
      if (card.value === tempCard.value - 4 || card.value === tempCard.value + 4) {
        partialArr.push(tempCard);
      }
    }
  }

  partialArr = partialArr.sort(function(a, b) {
    return a.value - b.value;
  });

  let removeIndexes = [];
  if (partialArr.length > 1) {
    //addLogLine("partialArr=" + printCardArr(partialArr));
    let startIndex = 0;
    for (let i = 0; i < partialArr.length; i++) {
      if (card.value === partialArr[i].value) {
        startIndex = i;
      }
    }
    //addLogLine("startIndex=" + startIndex);

    let acc = 1;
    for (let i = startIndex - 1; i >= 0; i--) {
      if (partialArr[i].value + acc !== card.value) {
        removeIndexes.push(partialArr[i]);
      }
      acc++;
    }

    acc = 1;
    for (let i = startIndex + 1; i < partialArr.length; i++) {
      if (partialArr[i].value - acc !== card.value) {
        removeIndexes.push(partialArr[i]);
      }
      acc++;
    }

    for (let i = 0; i < removeIndexes.length; i++) {
      let removeMe = removeIndexes[i];
      removeCardFromArray(removeMe, partialArr);
    }
  }

  return partialArr;
}

function checkValuePlayedCount(value) {
  let acc = 0;
  if (hcSlotCard != null && hcSlotCard.value === value) {
    acc++;
  }

  if (twoPSlotCard1 != null && twoPSlotCard1.value === value) {
    acc++;
  }
  if (twoPSlotCard2 != null && twoPSlotCard2.value === value) {
    acc++;
  }

  if (threePSlotCard1 != null && threePSlotCard1.value === value) {
    acc++;
  }
  if (threePSlotCard2 != null && threePSlotCard2.value === value) {
    acc++;
  }
  if (threePSlotCard3 != null && threePSlotCard3.value === value) {
    acc++;
  }

  if (straightSlotCard1 != null && straightSlotCard1.value === value) {
    acc++;
  }
  if (straightSlotCard2 != null && straightSlotCard2.value === value) {
    acc++;
  }
  if (straightSlotCard3 != null && straightSlotCard3.value === value) {
    acc++;
  }
  if (straightSlotCard4 != null && straightSlotCard4.value === value) {
    acc++;
  }
  if (straightSlotCard5 != null && straightSlotCard5.value === value) {
    acc++;
  }

  if (flushSlotCard1 != null && flushSlotCard1.value === value) {
    acc++;
  }
  if (flushSlotCard2 != null && flushSlotCard2.value === value) {
    acc++;
  }
  if (flushSlotCard3 != null && flushSlotCard3.value === value) {
    acc++;
  }
  if (flushSlotCard4 != null && flushSlotCard4.value === value) {
    acc++;
  }
  if (flushSlotCard5 != null && flushSlotCard5.value === value) {
    acc++;
  }

  if (fourkSlotCard1 != null && fourkSlotCard1.value === value) {
    acc++;
  }
  if (fourkSlotCard2 != null && fourkSlotCard2.value === value) {
    acc++;
  }
  if (fourkSlotCard3 != null && fourkSlotCard3.value === value) {
    acc++;
  }
  if (fourkSlotCard4 != null && fourkSlotCard4.value === value) {
    acc++;
  }

  if (strFlushSlotCard1 != null && strFlushSlotCard1.value === value) {
    acc++;
  }
  if (strFlushSlotCard2 != null && strFlushSlotCard2.value === value) {
    acc++;
  }
  if (strFlushSlotCard3 != null && strFlushSlotCard3.value === value) {
    acc++;
  }
  if (strFlushSlotCard4 != null && strFlushSlotCard4.value === value) {
    acc++;
  }
  if (strFlushSlotCard5 != null && strFlushSlotCard5.value === value) {
    acc++;
  }

  return acc;
}

function isPartialArrayValidAttemptAtStraightFlush(value3, value4, value5, suit) {

  let card1 = new Card(suit, value3 - 2, null);
  let card2 = new Card(suit, value3 - 1, null);
  let card6 = new Card(suit, value5 + 1, null);
  let card7 = new Card(suit, value5 + 2, null);

  // 0, 1, 2 can only be blocked with 3 or 4 played
  if (value3 === 0) {
    if (checkCardHasBeenPlayed(card6)) {
      return false;
    }

    if (checkCardHasBeenPlayed(card7)) {
      return false;
    }
  }

  if (value3 === 1) {
    if (checkCardHasBeenPlayed(card6)) {
      return false;
    }

    if (checkCardHasBeenPlayed(card2) &&
      checkCardHasBeenPlayed(card7)) {
      return false;
    }
  }

  // check card 4 to 10, sf cards needed are two up two down or 1 up and 1 down
  if (value3 === 2 || value3 === 3 || value3 === 4 || value3 === 5 ||
    value3 === 6 || value3 === 7 || value3 === 8) {

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

  if (value3 === 9) {
    if (checkCardHasBeenPlayed(card2)) {
      return false;
    }

    if (checkCardHasBeenPlayed(card1) &&
      checkCardHasBeenPlayed(card6)) {
      return false;
    }
  }

  if (value3 === 10) {
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
  let value = card.value;
  let suit = card.suit;

  //check hc card value
  if (hcSlotCard != null && hcSlotCard.value === value && hcSlotCard.suit === suit) {
    //addLogLine("hc played " + printCard(card));
    return true;
  }

  // check 2k card values
  if (twoPSlotCard1 != null && twoPSlotCard1.value === value && twoPSlotCard1.suit === suit) {
    //addLogLine("2k played " + printCard(card));
    return true;
  }

  if (twoPSlotCard2 != null && twoPSlotCard2.value === value && twoPSlotCard2.suit === suit) {
    //addLogLine("2k played " + printCard(card));
    return true;
  }

  //check 3k card values
  if (threePSlotCard1 != null && threePSlotCard1.value === value && threePSlotCard1.suit === suit) {
    //addLogLine("3k played " + printCard(card));
    return true;
  }

  if (threePSlotCard2 != null && threePSlotCard2.value === value && threePSlotCard2.suit === suit) {
    //addLogLine("3k played " + printCard(card));
    return true;
  }

  if (threePSlotCard3 != null && threePSlotCard3.value === value && threePSlotCard3.suit === suit) {
    //addLogLine("3k played " + printCard(card));
    return true;
  }

  // straight card values
  if (straightSlotCard1 != null && straightSlotCard1.value === value && straightSlotCard1.suit === suit) {
    //addLogLine("str played " + printCard(card));
    return true;
  }

  if (straightSlotCard2 != null && straightSlotCard2.value === value && straightSlotCard2.suit === suit) {
    //addLogLine("str played " + printCard(card));
    return true;
  }

  if (straightSlotCard3 != null && straightSlotCard3.value === value && straightSlotCard3.suit === suit) {
    //addLogLine("str played " + printCard(card));
    return true;
  }

  if (straightSlotCard4 != null && straightSlotCard4.value === value && straightSlotCard4.suit === suit) {
    //addLogLine("str played " + printCard(card));
    return true;
  }

  if (straightSlotCard5 != null && straightSlotCard5.value === value && straightSlotCard5.suit === suit) {
    //addLogLine("str played " + printCard(card));
    return true;
  }

  //flush card values
  if (flushSlotCard1 != null && flushSlotCard1.value === value && flushSlotCard1.suit === suit) {
    //addLogLine("flush played " + printCard(card));
    return true;
  }
  if (flushSlotCard2 != null && flushSlotCard2.value === value && flushSlotCard2.suit === suit) {
    //addLogLine("flush played " + printCard(card));
    return true;
  }
  if (flushSlotCard3 != null && flushSlotCard3.value === value && flushSlotCard3.suit === suit) {
    //addLogLine("flush played " + printCard(card));
    return true;
  }
  if (flushSlotCard4 != null && flushSlotCard4.value === value && flushSlotCard4.suit === suit) {
    //addLogLine("flush played " + printCard(card));
    return true;
  }
  if (flushSlotCard5 != null && flushSlotCard5.value === value && flushSlotCard5.suit === suit) {
    //addLogLine("flush played " + printCard(card));
    return true;
  }

  //four k values
  if (fourkSlotCard1 != null && fourkSlotCard1.value === value && fourkSlotCard1.suit === suit) {
    //addLogLine("4k played " + printCard(card));
    return true;
  }
  if (fourkSlotCard2 != null && fourkSlotCard2.value === value && fourkSlotCard2.suit === suit) {
    //addLogLine("4k played " + printCard(card));
    return true;
  }
  if (fourkSlotCard3 != null && fourkSlotCard3.value === value && fourkSlotCard3.suit === suit) {
    //addLogLine("4k played " + printCard(card));
    return true;
  }
  if (fourkSlotCard4 != null && fourkSlotCard4.value === value && fourkSlotCard4.suit === suit) {
    //addLogLine("4k played " + printCard(card));
    return true;
  }

  // str flush values
  if (strFlushSlotCard1 != null && strFlushSlotCard1.value === value && strFlushSlotCard1.suit === suit) {
    //addLogLine("str flush played " + printCard(card));
    return true;
  }
  if (strFlushSlotCard2 != null && strFlushSlotCard2.value === value && strFlushSlotCard2.suit === suit) {
    //addLogLine("str flush played " + printCard(card));
    return true;
  }
  if (strFlushSlotCard3 != null && strFlushSlotCard3.value === value && strFlushSlotCard3.suit === suit) {
    //addLogLine("str flush played " + printCard(card));
    return true;
  }
  if (strFlushSlotCard4 != null && strFlushSlotCard4.value === value && strFlushSlotCard4.suit === suit) {
    //addLogLine("str flush played " + printCard(card));
    return true;
  }
  return strFlushSlotCard5 != null && strFlushSlotCard5.value === value && strFlushSlotCard5.suit === suit;
}

function cardPlacedAction() {
  cardSelected = -1;

  removeCardHighlights();

  cardPlayed = true;
  turnPassed = 0;

  totalScoreOfHands();

  drawBoard();
}

function removeCardHighlights(){
  playercardPressed = -1;
  placeholderPressed = -1;
  arrowPlayerCardSelected = -1;
  arrowPlaceholderCardSelected = -1;
  placeHolderMouseOverCardIndex = -1;
}

function removeCardFromArray(card, cardArr) {
  if (card === null) {
    return;
  }
  let index = -1;
  for (let i = 0; i < cardArr.length; i++) {
    if (card.value === cardArr[i].value &&
      card.suit === cardArr[i].suit) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    cardArr.splice(index, 1);
  }
}

function checkForFullHand(cardArr) {
  let acc = cardArr.length;
  let dealtCards = [];
  while (acc < MAX_PLAYER_CARDS) {
    if (deckCards.length > 0) {
      cardArr[acc] = deckCards.shift();
      dealtCards.push(cardArr[acc]);
      acc = cardArr.length;
    } else {
      //addLog("Out of Deck Cards");
      //addLog(printCardArr(dealtCards));
      return;
    }
  }
  if (dealtCards.length > 0) {
    //addLog(printCardArr(dealtCards));
  }
}

function dealToPlayer1() {
  for (let i = 0; i < MAX_PLAYER_CARDS; i++) {
    player1Cards[i] = deckCards.shift();
    player1Cards[i].bitmap.onload = function() {
      imagesLoaded++;
      checkImagesLoadedCount();
      drawBoard();
    }
  }
}

function dealToPlayer2() {
  for (let i = 0; i < MAX_PLAYER_CARDS; i++) {
    player2Cards[i] = deckCards.shift();
    player2Cards[i].bitmap.onload = function() {
      imagesLoaded++;
      checkImagesLoadedCount();
      drawBoard();
    }
  }
}

function dealToPlayer3() {
  for (let i = 0; i < MAX_PLAYER_CARDS; i++) {
    player3Cards[i] = deckCards.shift();
    player3Cards[i].bitmap.onload = function() {
      imagesLoaded++;
      checkImagesLoadedCount();
      drawBoard();
    }
  }
}

function dealToPlayer4() {
  for (let i = 0; i < MAX_PLAYER_CARDS; i++) {
    player4Cards[i] = deckCards.shift();
    player4Cards[i].bitmap.onload = function() {
      imagesLoaded++;
      checkImagesLoadedCount();
      drawBoard();
    }
  }
}

function getPlayerCards() {
  switch (playerTurn) {
    case 0:
      return player1Cards;
    case 1:
      return player2Cards;
    case 2:
      return player3Cards;
    case 3:
      return player4Cards;
  }
}

function sortCardsAscendingOrder() {
  player1Cards = player1Cards.sort(function(a, b) {
    return a.value - b.value;
  });
  sortedByValue = true;

  player2Cards = player2Cards.sort(function(a, b) {
    return a.value - b.value;
  });

  player3Cards = player3Cards.sort(function(a, b) {
    return a.value - b.value;
  });

  player4Cards = player4Cards.sort(function(a, b) {
    return a.value - b.value;
  });
}

function sortCardsSuitAscendingOrder() {
  player1Cards = player1Cards.sort(function(a, b) {
    return a.suit - b.suit;
  });
  sortedByValue = false;

  player2Cards = player2Cards.sort(function(a, b) {
    return a.suit - b.suit;
  });

  player3Cards = player3Cards.sort(function(a, b) {
    return a.suit - b.suit;
  });

  player4Cards = player4Cards.sort(function(a, b) {
    return a.suit - b.suit;
  });
}

function organizePlayerCards() {
  switch (targetHand) {
    case 0:
    case 1:
    case 2:
    case 3:
      sortCardsAscendingOrder();
      break;
    case 4:
      sortCardsAscendingOrder();
      //sortCardsSuitAscendingOrder();
      break;
    case 5:
      sortCardsAscendingOrder();
      break;
    case 6:
      sortCardsAscendingOrder();
      //sortCardsSuitAscendingOrder();
      break;
  }
}

function addSetAndRemoveCard(placeholderCard, playerCard, cardArr) {
  addCardToHand(placeholderCard, cardArr);
  removeCardFromArray(playerCard, cardArr);
}

function addCardToHand(card, cardArr) {
  if (card != null && cardArr != null) {
    cardArr.push(card);
  }
}

function sortCardsToggle() {
  if (sortedByValue) {
    sortCardsAscendingOrder();
    sortCardsSuitAscendingOrder();
  } else {
    sortCardsAscendingOrder();
  }

  drawBoard();
}
