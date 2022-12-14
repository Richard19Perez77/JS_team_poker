function find2Kcard() {
  var playerCards = getPlayerCards();

  // find pair to play that is not usable in a better hand
  var canReplaceCurrent2k = true;
  var canStraight = false;
  var sameValueCount = 0;
  var sameFlushCount = 0;

  var possibleCards = [];
  var tempCard = null;

  for (var i = 0; i < playerCards.length; i++) {
    tempCard = playerCards[i];

    canReplaceCurrent2k = true;
    canStraight = false;
    sameValueCount = 0;
    sameFlushCount = 0;

    // parse out cards useful in better hands
    canReplaceCurrent2k = checkCardCanReplaceCurrent2kPlayed(tempCard);
    if (canReplaceCurrent2k == false) {
      continue;
    }

    canStraight = checkHandFor3cardStraight(tempCard, playerCards);
    if (canStraight) {
      continue;
    }

    sameFlushCount = checkCardFlushCount(tempCard, playerCards);
    if (sameFlushCount > 3) {
      continue;
    }

    sameValueCount = checkHandForMatchingValues(tempCard, playerCards);
    if (sameValueCount < 2 || sameValueCount > 2) {
      continue;
    }

    //validate play is valid for str flush
    var partialArr = findStraightFlushCards(tempCard, playerCards);
    if (partialArr != null &&  partialArr.length >= 3) {
      var isValidStrFlushPlay = isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)
      if (isValidStrFlushPlay) {
        continue;
      }
    }

    possibleCards.push(tempCard);
  }

  if (possibleCards.length == 0) {
    return;
  }

  possibleCards = possibleCards.sort(function(a, b) {
    return a.value - b.value;
  });

  // remove cards with no valid pair
  var removeCards = [];
  for (var i = 0; i < possibleCards.length; i++) {
    var temp = possibleCards[i];
    sameValueCount = checkHandForMatchingValues(temp, possibleCards);
    if (sameValueCount == 1) {
      removeCards.push(temp);
    }
  }
  for (var i = 0; i < removeCards.length; i++) {
    var removeCard = removeCards[i];
    removeCardFromArray(removeCard, possibleCards);
  }

  if (possibleCards.length >= 2) {

    //play the lowest pair
    var cardA = possibleCards[0];
    var cardB = possibleCards[1];

    addCardToHand(twoPSlotCard1, getPlayerCards());
    twoPSlotCard1 = cardA;
    removeCardFromArray(twoPSlotCard1, playerCards);

    addCardToHand(twoPSlotCard2, getPlayerCards());
    twoPSlotCard2 = cardB;
    removeCardFromArray(twoPSlotCard2, playerCards);

    if (doLogPlacedCards == true) {
      addLog("Player " + (playerTurn + 1) + ": Plays 2K " + printCard(twoPSlotCard1) + printCard(twoPSlotCard2));
    }
    cardPlacedAction();
  }
}
