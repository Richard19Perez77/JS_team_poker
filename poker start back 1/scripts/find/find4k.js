function find4KCard() {
  if (doLogCardDetails == true) {
    addLog("Player " + (playerTurn + 1)  + ": find4KCard()");
  }

  var playerCards = getPlayerCards();

  // how many slots are left in the 4k section to play
  var cardsLeftToPlay = count4kCardsLeftToPlay();

  if (doLogCardDetails == true) {
    addLog("Player " + (playerTurn + 1)  + ": cardsLeftToPlay = " + cardsLeftToPlay);
  }

  // check the current hand is part of a 4k play
  var doContinue4kPlay = doContinueCurrent4kPlay(cardsLeftToPlay);

  // check for the hand to be able to finish, must have one card played
  if (cardsLeftToPlay < 4 && doContinue4kPlay){
    // addLog("check for value played = " + doContinue4kPlay);
    doContinue4kPlay = !checkForValuePlayed(fourkSlotCard1.value, fourkSlotCard1.suit);
    // addLog("doContinue4kPlay = " + doContinue4kPlay);
  }

  if (doLogCardDetails == true) {
    addLog("Player " + (playerTurn + 1)  + ": doContinue4kPlay = " + doContinue4kPlay);
  }

  if (doContinue4kPlay) {

    // add a 3rd card to 2 placed cards
    if (cardsLeftToPlay == 2) {

      var value = fourkSlotCard1.value;
      if (value == fourkSlotCard2.value) {
        for (var i = 0; i < playerCards.length; i++) {
          if (playerCards[i].value == value) {

            // accumulate array of sf cards from missing card
            var partialArr = findStraightFlushCards(playerCards[i], playerCards);

            // check partial sf can be finished
            if (partialArr != null && partialArr.length >= 3 && isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)){
              continue;
            }

            addCardToHand(fourkSlotCard3, playerCards);
            fourkSlotCard3 = playerCards[i];
            removeCardFromArray(fourkSlotCard3, playerCards);

            organize4k();

            if (doLogPlacedCards == true) {
              addLog("Player " + (playerTurn + 1) + ": Plays 3rd card in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3));
            }
            cardPlacedAction();
          }
        }
      }
    }

    // after playing one card the next can still be played
    cardsLeftToPlay = count4kCardsLeftToPlay();

    // finish 4k first if possible when 3 are played
    if (cardsLeftToPlay == 1) {

      // check for final card
      for (var i = 0; i < playerCards.length; i++) {
        var card = playerCards[i];

        if (doLogCardDetails == true) {
          addLog("Player " + (playerTurn + 1)  + ": Has missing 4k card");
        }

        if (card.value == fourkSlotCard1.value &&
          card.value == fourkSlotCard2.value &&
          card.value == fourkSlotCard3.value) {

          var partialArr = findStraightFlushCards(card, playerCards);
          if (partialArr != null && partialArr.length >= 3 && isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)) {
            continue;
          }

          addCardToHand(fourkSlotCard4, playerCards);
          fourkSlotCard4 = card;
          removeCardFromArray(card, playerCards);

          if (doLogCardDetails == true) {
            addLog("Player " + (playerTurn + 1) + ": Plays 4th card 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
          }

          cardPlacedAction();

          return;
        }
      }
    }
  }

  // start a new play on 4k
  var possible4kCards = [];
  var possible3kCards = [];
  var possible2kCards = [];
  var sameValueCount = 0;
  var sameFlushCount = 0;
  var tempCard;

  for (var i = 0; i < playerCards.length; i++) {
    tempCard = playerCards[i];
    sameValueCount = 0;

    var partialArr = findStraightFlushCards(tempCard, playerCards);
    if (partialArr != null && partialArr.length >= 3) {

      //validate play is valid for str flush
      var isValidStrFlushPlay = isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)
      if (isValidStrFlushPlay) {
        continue;
      }
    }

    var hasAValuePlayed = checkCardValueHasBeenPlayed(tempCard);
    if (hasAValuePlayed) {
      continue;
    }

    // can use 4, 3 or 2 of a kind at some point in finding a 4k
    sameValueCount = checkHandForMatchingValues(tempCard, playerCards);
    if (sameValueCount == 4) {
      possible4kCards.push(tempCard);
    } else if (sameValueCount == 3) {
      possible3kCards.push(tempCard);
    } else if (sameValueCount == 2) {
      possible2kCards.push(tempCard);
    }
  }

  if (possible4kCards.length >= 4) {
    possible4kCards = possible4kCards.sort(function(a, b) {
      return a.value - b.value;
    });

    // overwrite or play 4 cards
    fourKPlaceLogic(cardsLeftToPlay, possible4kCards, playerCards);
  } else if (possible3kCards.length >= 3) {
    possible3kCards = possible3kCards.sort(function(a, b) {
      return a.value - b.value;
    });

    var removeCards = [];
    for (var i = 0; i < possible3kCards.length; i++) {
      var temp = possible3kCards[i];
      sameValueCount = checkHandForMatchingValues(temp, possible3kCards);
      if (sameValueCount < 3) {
        removeCards.push(temp);
        continue;
      }
    }

    // addLog("remove cards" + printCardArr(removeCards));
    for (var i = 0; i < removeCards.length; i++) {
      var removeMe = removeCards[i];
      removeCardFromArray(removeMe, possible3kCards);
    }

    // overwrite or play 3 cards
    if (possible3kCards.length == 3) {
      threeKPlaceLogic(possible3kCards, cardsLeftToPlay, playerCards);
    }
  } else if (possible2kCards.length >= 2) {

    possible2kCards = possible2kCards.sort(function(a, b) {
      return a.value - b.value;
    });

    // remove cards with no valid pair
    var removeCards = [];
    for (var i = 0; i < possible2kCards.length; i++) {
      var temp = possible2kCards[i];
      sameValueCount = checkHandForMatchingValues(temp, possible2kCards);
      if (sameValueCount == 1) {
        removeCards.push(temp);
      }
    }

    for (var i = 0; i < removeCards.length; i++) {
      var removeMe = removeCards[i];
      removeCardFromArray(removeMe, possible2kCards);
    }

    if (possible2kCards.length >= 2) {
      twoKPlaceLogic(possible2kCards, cardsLeftToPlay, playerCards);
    }
  }
}

function twoKPlaceLogic(possibleCards, cardsLeftToPlay, playerCards) {
  switch (cardsLeftToPlay) {
    case 2:

      //finish hand
      for (var i = 0; i < possibleCards.length; i += 2) {
        if (fourkSlotCard1.value == possibleCards[i].value &&
          fourkSlotCard2.value == possibleCards[i + 1].value) {
          fourkSlotCard3 = possibleCards[i];
          fourkSlotCard4 = possibleCards[i + 1];
          removeCardFromArray(fourkSlotCard3, playerCards);
          removeCardFromArray(fourkSlotCard4, playerCards);

          if (doLogPlacedCards == true) {
            addLog("Player " + (playerTurn + 1) + ": Plays last 2K in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
          }
          cardPlacedAction();

          return;
        }
      }

      //start new 2k for 4k hand from 2k played
      for (var i = 0; i < possibleCards.length; i += 2) {
        if (fourkSlotCard1.value < possibleCards[i].value &&
          fourkSlotCard2.value < possibleCards[i + 1].value) {
          addCardToHand(fourkSlotCard1, playerCards);
          addCardToHand(fourkSlotCard2, playerCards);
          fourkSlotCard1 = possibleCards[i];
          fourkSlotCard2 = possibleCards[i + 1];
          removeCardFromArray(fourkSlotCard1, playerCards);
          removeCardFromArray(fourkSlotCard2, playerCards);

          if (doLogPlacedCards == true) {
            addLog("Player " + (playerTurn + 1) + ": Plays first 2K in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
          }
          cardPlacedAction();

          return;
        }
      }
      break;
    case 4:

      //no cards played yet just drop in first two slots
      fourkSlotCard1 = possibleCards[0];
      fourkSlotCard2 = possibleCards[1];
      removeCardFromArray(fourkSlotCard1, playerCards);
      removeCardFromArray(fourkSlotCard2, playerCards);

      if (doLogPlacedCards == true) {
        addLog("Player " + (playerTurn + 1) + ": Plays 2K in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
      }
      cardPlacedAction();

      break;
  }
}

function threeKPlaceLogic(possibleCards, cardsLeftToPlay, playerCards) {
  switch (cardsLeftToPlay) {
    case 1:

      //attempt to override 3 cards played with three new cards
      for (var i = 0; i < possibleCards.length; i += 3) {
        if (fourkSlotCard1.value < possibleCards[i].value &&
          fourkSlotCard2.value < possibleCards[i + 1].value &&
          fourkSlotCard3.value < possibleCards[i + 2].value) {

          addCardToHand(fourkSlotCard1, playerCards);
          addCardToHand(fourkSlotCard2, playerCards);
          addCardToHand(fourkSlotCard3, playerCards);
          fourkSlotCard1 = possibleCards[i];
          fourkSlotCard2 = possibleCards[i + 1];
          fourkSlotCard3 = possibleCards[i + 2];
          removeCardFromArray(possibleCards[i], playerCards);
          removeCardFromArray(possibleCards[i + 1], playerCards);
          removeCardFromArray(possibleCards[i + 2], playerCards);

          if (doLogPlacedCards == true) {
            addLog("Player " + (playerTurn + 1) + ": Plays 3K in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
          }
          cardPlacedAction();

          return;
        }
      }
      break;
    case 2:
      for (var i = 0; i < possibleCards.length; i += 2) {
        if (fourkSlotCard1.value < possibleCards[i].value &&
          fourkSlotCard2.value < possibleCards[i + 1].value) {

          addCardToHand(fourkSlotCard1, playerCards);
          addCardToHand(fourkSlotCard2, playerCards);
          addCardToHand(fourkSlotCard3, playerCards);

          fourkSlotCard1 = possibleCards[i];
          fourkSlotCard2 = possibleCards[i + 1];
          fourkSlotCard3 = possibleCards[i + 2];

          removeCardFromArray(possibleCards[i], playerCards);
          removeCardFromArray(possibleCards[i + 1], playerCards);
          removeCardFromArray(possibleCards[i + 2], playerCards);

          if (doLogPlacedCards == true) {
            addLog("Player " + (playerTurn + 1) + ": Plays 3K in 4k " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
          }
          cardPlacedAction();

          return;
        }
      }
      break;
    case 4:
      fourkSlotCard1 = possibleCards[0];
      fourkSlotCard2 = possibleCards[1];
      fourkSlotCard3 = possibleCards[2];

      removeCardFromArray(possibleCards[0], playerCards);
      removeCardFromArray(possibleCards[1], playerCards);
      removeCardFromArray(possibleCards[2], playerCards);

      if (doLogPlacedCards == true) {
        addLog("Player " + (playerTurn + 1) + ": Plays 3K in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
      }
      cardPlacedAction();

      break;
  }
}

function fourKPlaceLogic(cardsLeftToPlay, possibleCards, cardArr) {
  switch (cardsLeftToPlay) {
    case 0:
      var currentIsBetter = currentPossibleCardIsHighest(possibleCards[0]);
      if (currentIsBetter == true) {
        addCardToHand(fourkSlotCard1, cardArr);
        fourkSlotCard1 = possibleCards[0];
        removeCardFromArray(fourkSlotCard1, cardArr);

        addCardToHand(fourkSlotCard2, cardArr);
        fourkSlotCard2 = possibleCards[1];
        removeCardFromArray(fourkSlotCard2, cardArr);

        addCardToHand(fourkSlotCard3, cardArr);
        fourkSlotCard3 = possibleCards[2];
        removeCardFromArray(fourkSlotCard3, cardArr);

        addCardToHand(fourkSlotCard4, cardArr);
        fourkSlotCard4 = possibleCards[3];
        removeCardFromArray(fourkSlotCard4, cardArr);

        if (doLogPlacedCards == true) {
          addLog("Player " + (playerTurn + 1) + ": Plays 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
        }
        cardPlacedAction();

        return;
      }
      break;
    case 2:
    case 3:
    case 4:
      addCardToHand(fourkSlotCard1, cardArr);
      addCardToHand(fourkSlotCard2, cardArr);
      addCardToHand(fourkSlotCard3, cardArr);
      addCardToHand(fourkSlotCard4, cardArr);

      fourkSlotCard1 = possibleCards[0];
      fourkSlotCard2 = possibleCards[1];
      fourkSlotCard3 = possibleCards[2];
      fourkSlotCard4 = possibleCards[3];

      removeCardFromArray(possibleCards[0], cardArr);
      removeCardFromArray(possibleCards[1], cardArr);
      removeCardFromArray(possibleCards[2], cardArr);
      removeCardFromArray(possibleCards[3], cardArr);

      if (doLogPlacedCards == true) {
        addLog("Player " + (playerTurn + 1) + ": Plays 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
      }

      cardPlacedAction();
      return;
  }
}

function currentPossibleCardIsHighest(card) {
  return card.value >= fourkSlotCard1.value &&
    card.value >= fourkSlotCard2.value &&
    card.value >= fourkSlotCard3.value &&
    card.value >= fourkSlotCard4.value;
}

function check4kIsPlayed() {
  return fourkSlotCard1 != null &&
    fourkSlotCard2 != null &&
    fourkSlotCard3 != null &&
    fourkSlotCard4 != null;
}

function count4kCardsLeftToPlay() {
  var acc = 0;
  if (fourkSlotCard1 == null) {
    acc++;
  }
  if (fourkSlotCard2 == null) {
    acc++;
  }
  if (fourkSlotCard3 == null) {
    acc++;
  }
  if (fourkSlotCard4 == null) {
    acc++;
  }
  return acc;
}

function checkForValuePlayed(value, suit){

  // if we have the same value but not the same suit a 4k is not possibe
  if (hcSlotCard != null && hcSlotCard.value == value && hcSlotCard.suit != suit) {
    return true;
  }

  if (twoPSlotCard1 != null && twoPSlotCard1.value == value && twoPSlotCard1.suit != suit) {
    return true;
  }

  if (twoPSlotCard2 != null && twoPSlotCard2.value == value && twoPSlotCard2.suit != suit) {
    return true;
  }

  if (threePSlotCard1 != null && threePSlotCard1.value == value && threePSlotCard1.suit != suit) {
    return true;
  }

  if (threePSlotCard2 != null && threePSlotCard2.value == value && threePSlotCard2.suit != suit) {
    return true;
  }

  if (threePSlotCard3 != null && threePSlotCard3.value == value && threePSlotCard3.suit != suit) {
    return true;
  }

  if (straightSlotCard1 != null && straightSlotCard1.value == value && straightSlotCard1.suit != suit) {
    return true;
  }

  if (straightSlotCard2 != null && straightSlotCard2.value == value && straightSlotCard2.suit != suit) {
    return true;
  }

  if (straightSlotCard3 != null && straightSlotCard3.value == value && straightSlotCard3.suit != suit) {
    return true;
  }

  if (straightSlotCard4 != null && straightSlotCard4.value == value && straightSlotCard4.suit != suit) {
    return true;
  }

  if (straightSlotCard5 != null && straightSlotCard5.value == value && straightSlotCard5.suit != suit) {
    return true;
  }

  if (flushSlotCard1 != null && flushSlotCard1.value == value && flushSlotCard1.suit != suit) {
    return true;
  }

  if (flushSlotCard2 != null && flushSlotCard2.value == value && flushSlotCard2.suit != suit) {
    return true;
  }

  if (flushSlotCard3 != null && flushSlotCard3.value == value && flushSlotCard3.suit != suit) {
    return true;
  }

  if (flushSlotCard4 != null && flushSlotCard4.value == value && flushSlotCard4.suit != suit) {
    return true;
  }

  if (flushSlotCard5 != null && flushSlotCard5.value == value && flushSlotCard5.suit != suit) {
    return true;
  }

  return false;
}

function doContinueCurrent4kPlay(cardCount) {
  if (cardCount == 4) {

    return false;
  }

  // get first value of four of a kind
  var value = fourkSlotCard1.value;

  if (fourkSlotCard2 != null) {
    if (value != fourkSlotCard2.value) {

      if (doLogPlacedCards == true) {
        addLog("Player " + (playerTurn + 1) + ":  value for card 2 off");
      }

      return false;
    }
  }

  if (fourkSlotCard3 != null) {
    if (value != fourkSlotCard3.value) {

      if (doLogPlacedCards == true) {
        addLog("Player " + (playerTurn + 1) + ":  value for card 3 off");
      }

      return false;
    }
  }

  if (fourkSlotCard4 != null) {
    if (value != fourkSlotCard4.value) {

      if (doLogPlacedCards == true) {
        addLog("Player " + (playerTurn + 1) + ":  value for card 4 off");
      }

      return false;
    }
  }

  // check how many times the value has been played
  var valuePlayedAcc = checkValuePlayedCount(value);
  if (valuePlayedAcc == 4) {

    if (doLogCardDetails == true) {
      addLog("Player " + (playerTurn + 1) + ":  valuePlayedAcc " + valuePlayedAcc);
    }

    return false;
  }

  return true;
}
