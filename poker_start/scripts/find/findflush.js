function findFlushCard() {
  let playerCards = getPlayerCards();

  let possibleCards = [];

  for (let i = 0; i < playerCards.length; i++) {
    let card = playerCards[i];

    let partialArr = findStraightFlushCards(card, playerCards);
    if (partialArr != null && partialArr.length >= 3) {

      //validate play is valid for str flush
      let isValidStrFlushPlay = isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)
      if (isValidStrFlushPlay) {
        continue;
      }
    }

    let sameValueCount = checkHandForMatchingValues(card, playerCards);
    if (sameValueCount >= 2) {
      let hasAValuePlayed = checkCardValueHasBeenPlayed(card);
      if (hasAValuePlayed) {
        continue;
      }
    }

    possibleCards.push(card);
  }

  let currFlushCount = 0;
  currFlushCount = countFlushCardsPlayed();

  switch (currFlushCount) {
    case 3:
      let found = find4thFlushCard(possibleCards);
      if (found) {
        organizeFlush();
        find5thFlushCard(possibleCards);
        return;
      }
      break;
    case 4:
      let fifthFound = find5thFlushCard(possibleCards);
      if (fifthFound) {
        return;
      }
      break;
  }


  let a = [];
  let b = [];
  let c = [];
  let d = [];

  for (let i = 0; i < possibleCards.length; i++) {
    let suit = possibleCards[i].suit;
    switch (suit) {
      case 0:
        a.push(possibleCards[i]);
        break;
      case 1:
        b.push(possibleCards[i]);
        break;
      case 2:
        c.push(possibleCards[i]);
        break;
      case 3:
        d.push(possibleCards[i]);
        break;
    }
  }

  // check for 5 card flush to play
  if (a.length == 5) {
    let hasBetterFlushScore = checkBetterFlush(a);
    if (hasBetterFlushScore) {
      placeFlush(a);
      return;
    }
  } else if (b.length == 5) {
    let hasBetterFlushScore = checkBetterFlush(b);
    if (hasBetterFlushScore) {
      placeFlush(b);
      return;
    }
  } else if (c.length == 5) {
    let hasBetterFlushScore = checkBetterFlush(c);
    if (hasBetterFlushScore) {
      placeFlush(c);
      return;
    }
  } else if (d.length == 5) {
    let hasBetterFlushScore = checkBetterFlush(d);
    if (hasBetterFlushScore) {
      placeFlush(d);
      return;
    }
  }

  // check for 4 card flush to play
  if (a.length == 4) {

    //place 4 cards if only 3 are played
    if (currFlushCount <= 3) {
      place4CardFlush(a);
      return;
    }
  } else if (b.length == 4) {

    //place 4 cards if only 3 are played
    if (currFlushCount <= 3) {
      place4CardFlush(b);
      return;
    }
  } else if (c.length == 4) {

    //place 4 cards if only 3 are played
    if (currFlushCount <= 3) {
      place4CardFlush(c);
      return;
    }
  } else if (d.length == 4) {

    //place 4 cards if only 3 are played
    if (currFlushCount <= 3) {
      place4CardFlush(d);
      return;
    }
  }

  // check for 3 card flush to play
  if (a.length == 3) {

    //place 3 cards if none are played
    if (currFlushCount == 0) {
      place3CardFlush(a);
      return;
    }
  } else if (b.length == 3) {

    //place 3 cards if none are played
    if (currFlushCount == 0) {
      place3CardFlush(b);
      return;
    }
  } else if (c.length == 3) {

    //place 3 cards if none are played
    if (currFlushCount == 0) {
      place3CardFlush(c);
      return;
    }
  } else if (d.length == 3) {

    //place 3 cards if none are played
    if (currFlushCount == 0) {
      place3CardFlush(d);
      return;
    }
  }

  fullFlushCardReplace(possibleCards);
}

function place4CardFlush(flushArr) {
  let playerCards = getPlayerCards();

  //should only have to add three cards to hand
  addCardToHand(flushSlotCard1, playerCards);
  flushSlotCard1 = flushArr[0];
  removeCardFromArray(flushSlotCard1, playerCards);

  addCardToHand(flushSlotCard2, playerCards);
  flushSlotCard2 = flushArr[1];
  removeCardFromArray(flushSlotCard2, playerCards);

  addCardToHand(flushSlotCard3, playerCards);
  flushSlotCard3 = flushArr[2];
  removeCardFromArray(flushSlotCard3, playerCards);

  addCardToHand(flushSlotCard4, playerCards);
  flushSlotCard4 = flushArr[3];
  removeCardFromArray(flushSlotCard4, playerCards);

  if (doLogPlacedCards == true) {
    addLog("Player " + (playerTurn + 1) + ": Plays 4 card flush " + printCard(flushSlotCard1) + printCard(flushSlotCard2) + printCard(flushSlotCard3) + printCard(flushSlotCard4) + printCard(flushSlotCard5));
  }
  cardPlacedAction();
}

function place3CardFlush(flushArr) {
  let playerCards = getPlayerCards();

  addCardToHand(flushSlotCard1, playerCards);
  flushSlotCard1 = flushArr[0];
  removeCardFromArray(flushSlotCard1, playerCards);

  addCardToHand(flushSlotCard2, playerCards);
  flushSlotCard2 = flushArr[1];
  removeCardFromArray(flushSlotCard2, playerCards);

  addCardToHand(flushSlotCard3, playerCards);
  flushSlotCard3 = flushArr[2];
  removeCardFromArray(flushSlotCard3, playerCards);

  if (doLogPlacedCards == true) {
    addLog("Player " + (playerTurn + 1) + ": Plays 3 card flush " + printCard(flushSlotCard1) + printCard(flushSlotCard2) + printCard(flushSlotCard3) + printCard(flushSlotCard4) + printCard(flushSlotCard5));
  }
  cardPlacedAction();
}

function placeFlush(cardArr) {
  let playerCards = getPlayerCards();

  //addLog("Flush Played " + printCardArr(cardArr));
  addCardToHand(flushSlotCard1, playerCards);
  flushSlotCard1 = cardArr[0];
  removeCardFromArray(flushSlotCard1, playerCards);

  addCardToHand(flushSlotCard2, playerCards);
  flushSlotCard2 = cardArr[1];
  removeCardFromArray(flushSlotCard2, playerCards);

  addCardToHand(flushSlotCard3, playerCards);
  flushSlotCard3 = cardArr[2];
  removeCardFromArray(flushSlotCard3, playerCards);

  addCardToHand(flushSlotCard4, playerCards);
  flushSlotCard4 = cardArr[3];
  removeCardFromArray(flushSlotCard4, playerCards);

  addCardToHand(flushSlotCard5, playerCards);
  flushSlotCard5 = cardArr[4];
  removeCardFromArray(flushSlotCard5, playerCards);

  if (doLogPlacedCards == true) {
    addLog("Player " + (playerTurn + 1) + ": Plays 5 card flush " + printCard(flushSlotCard1) + printCard(flushSlotCard2) + printCard(flushSlotCard3) + printCard(flushSlotCard4) + printCard(flushSlotCard5));
  }
  cardPlacedAction();
}

function countFlushCardsPlayed() {
  let acc = 0;

  if (flushSlotCard1 != null) {
    acc++;
  }

  if (flushSlotCard2 != null) {
    acc++;
  }

  if (flushSlotCard3 != null) {
    acc++;
  }

  if (flushSlotCard4 != null) {
    acc++;
  }

  if (flushSlotCard5 != null) {
    acc++;
  }

  return acc;
}

function find4thFlushCard(cardArr) {
  //addLog("find4thFlushCard() ");
  let suit = -1;
  if (flushSlotCard1.suit == flushSlotCard2.suit &&
    flushSlotCard2.suit == flushSlotCard3.suit) {

    // store the suit and gather player cards with same suit
    suit = flushSlotCard1.suit;
    let possibleCards = [];
    for (let i = 0; i < cardArr.length; i++) {
      if (cardArr[i].suit == suit) {
        possibleCards.push(cardArr[i]);
      }
    }

    // check card is not part of 4k or straight flush
    for (let i = 0; i < possibleCards.length; i++) {
      let fourthCard = possibleCards[i];

      addCardToHand(flushSlotCard4, getPlayerCards());
      flushSlotCard4 = fourthCard;
      removeCardFromArray(fourthCard, getPlayerCards());

      //remove from possible since we are re using it
      removeCardFromArray(fourthCard, cardArr);

      if (doLogPlacedCards == true) {
        addLog("Player " + (playerTurn + 1) + ": Plays 4th flush card" + printCard(flushSlotCard1) + printCard(flushSlotCard2) + printCard(flushSlotCard3) + printCard(flushSlotCard4) + printCard(flushSlotCard5));
      }
      cardPlacedAction();

      return true;
    }
  }

  return false;
}

function find5thFlushCard(cardArr) {
  //addLog("find5thFlushCard() ");
  let suit = -1;
  if (flushSlotCard1.suit === flushSlotCard2.suit &&
    flushSlotCard2.suit === flushSlotCard3.suit &&
    flushSlotCard3.suit === flushSlotCard4.suit) {

    // store the suit and gather player cards with same suit
    suit = flushSlotCard1.suit;
    let possibleCards = [];
    for (let i = 0; i < cardArr.length; i++) {
      if (cardArr[i].suit == suit) {
        possibleCards.push(cardArr[i]);
      }
    }

    // check card is not part of 4k or straight flush
    for (let i = 0; i < possibleCards.length; i++) {

      let tempCard = possibleCards[i];
      addCardToHand(flushSlotCard5, getPlayerCards());
      flushSlotCard5 = tempCard;
      removeCardFromArray(tempCard, getPlayerCards());

      if (doLogPlacedCards == true) {
        addLog("Player " + (playerTurn + 1) + ": Plays 5th flush card" + printCard(flushSlotCard1) + printCard(flushSlotCard2) + printCard(flushSlotCard3) + printCard(flushSlotCard4) + printCard(flushSlotCard5));
      }
      cardPlacedAction();

      return;
    }
  }
}

function fullFlushCardReplace(cardArr) {

  // check for 5 cards played for flush
  let currFlushCount = countFlushCardsPlayed();
  //addLog("currFlushCount " + currFlushCount);
  if (currFlushCount == 5) {

    let oneKcard;
    let twoKcard;
    let threeKcard;

    let threeStrFlush;
    let fourStrFlush;
    let fiveStrFlush;

    let switchCard;
    let card;
    let strFlushArr;

    function flushCardSwitch(flushCard) {
      // check same suit but higher value
      if (card.value > flushCard.value && card.suit == flushCard.suit) {

        let strFlushCards = checkStrFlushSwitch(card, flushCard, cardArr);

        // addLog("strFlushCards: " + printCardArr(strFlushCards));
        if (strFlushCards != null) {
          let len = strFlushCards.length;
          switch (len) {
            case 3:
              // addLog("set threeStrFlush: " + printCard(flushCard));
              threeStrFlush = flushCard;
              switchCard = card;
              break;
            case 4:
              // addLog("set fourStrFlush: " + printCard(flushCard));
              fourStrFlush = flushCard;
              switchCard = card;
              break;
            case 5:
              // addLog("set fiveStrFlush: " + printCard(flushCard));
              fiveStrFlush = flushCard;
              switchCard = card;
              break;
          }
        }

        //start with a check that the switch can even complete a 4k
        //addLog("check 4k possible");
        let fourKacc = checkValuePlayedCount(flushCard.value);
        if (fourKacc > 1) {
          //addLog("four k for " + printCard(flushCard) + " is blocked: ");
          return;
        }

        // check lower played card can be used for 4k or str flush
        let matchingValuesCreated = checkHandForMatchingValues(flushCard, cardArr);

        // add one for the flush card being added but not in hand yet
        matchingValuesCreated++;
        // addLog("matchingValuesCreated: " + matchingValuesCreated);

        // check current card matching kind in hand
        let matchingValuesExisting = checkHandForMatchingValues(card, cardArr);
        // addLog("matchingValuesExisting: " + matchingValuesExisting);

        // creates 4k attempt needs to be greater than existing
        if (matchingValuesCreated <= matchingValuesExisting) {
          return;
        }

        if (matchingValuesCreated == 2) {
          oneKcard = flushCard;
          switchCard = card;
          return;
        }

        if (matchingValuesCreated == 3) {
          twoKcard = flushCard;
          switchCard = card;
          return;
        }

        if (matchingValuesCreated == 4) {
          threeKcard = flushCard;
          switchCard = card;
          return;
        }
      }
    }

    // overwrite a card to better own hand
    for (let i = 0; i < cardArr.length; i++) {

      // get player card
      card = cardArr[i];
      //addLog("player card: " + printCard(card));

      //check card is not part of a straight flush in hand
      strFlushArr = findStraightFlushCards(card, cardArr);
      // addLog("strFlushArr: " + printCardArr(strFlushArr));
      if (strFlushArr != null && strFlushArr.length >= 3) {
        // addLog("player card part of str flush");
        continue;
      }
    }

    //switch for full str flush first
    if (fiveStrFlush != null) {
      addLog("Player " + (playerTurn + 1) + ": Switches " + printCard(switchCard) + " with " + printCard(fiveStrFlush));
      addSetAndRemoveCard(fiveStrFlush, switchCard, getPlayerCards());
      return;
    }

    //switch for full 4k second
    if (threeKcard != null) {
      addLog("Player " + (playerTurn + 1) + ": Switches " + printCard(switchCard) + " with " + printCard(threeKcard));
      addSetAndRemoveCard(threeKcard, switchCard, getPlayerCards());
      return;
    }

    if (fourStrFlush != null) {
      addLog("Player " + (playerTurn + 1) + ": Switches " + printCard(switchCard) + " with " + printCard(fourStrFlush));
      addSetAndRemoveCard(fourStrFlush, switchCard, getPlayerCards());
      return;
    }

    if (threeStrFlush != null) {
      addLog("Player " + (playerTurn + 1) + ": Switches " + printCard(switchCard) + " with " + printCard(threeStrFlush));
      addSetAndRemoveCard(threeStrFlush, switchCard, getPlayerCards());
      return;
    }

    if (twoKcard != null) {
      addLog("Player " + (playerTurn + 1) + ": Switches " + printCard(switchCard) + " with " + printCard(twoKcard));
      addSetAndRemoveCard(twoKcard, switchCard, getPlayerCards());
      return;
    }

    if (oneKcard != null) {
      addLog("Player " + (playerTurn + 1) + ": Switches " + printCard(switchCard) + " with " + printCard(oneKcard));
      addSetAndRemoveCard(oneKcard, switchCard, getPlayerCards());
      return;
    }
  }
}

function checkStrFlushSwitch(card, flushCard, cardArr) {

  //check card being replaced can be part of a str flush
  //addLog("check straight flush possible");
  let strFlushCards = findStraightFlushCards(flushCard, cardArr);

  //remove card that will be switched if part of new array
  removeCardFromArray(card, strFlushCards);
  return strFlushCards;
}
