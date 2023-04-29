function find3Kcard() {
  let playerCards = getPlayerCards();
  let removeCards = [];

  //play missing third card if possible
  let thirdCardIsMissing = checkIfMissingThirdCard();
  if (thirdCardIsMissing === true) {

    //find a simple answer by filling in a two of a kind starter
    let thirdCardFound = checkFor3rdKindMissing(playerCards);
    if (thirdCardFound === true) {
      return;
    }
  }

  //find 3k to play that is not usable in a better hand
  let tempCard;
  let sameValueCount = 0;
  let canStraight = false;
  let canReplaceCurrent3K = false;
  let sameFlushCount = 0;
  let strFlushCount = 0;
  let valuePlayedAcc;
  let possible3kCards = [];
  let possible2kCards = [];

  let canFinish3k;
  for (let i = 0; i < playerCards.length; i++) {
    tempCard = playerCards[i];

    sameValueCount = 0;
    canStraight = false;
    canReplaceCurrent3K = false;
    sameFlushCount = 0;
    strFlushCount = 0;
    canFinish3k = false;

    valuePlayedAcc = checkValuePlayedCount(tempCard.value);
    if (valuePlayedAcc >= 2) {
      continue
    }

    canReplaceCurrent3K = checkCardCanReplaceCurrent3kPlayed(tempCard);
    if (canReplaceCurrent3K === false) {
      continue;
    }

    //validate play is valid for str flush
    let partialArr = findStraightFlushCards(tempCard, playerCards);
    if (partialArr != null && partialArr.length >= 3) {
      let isValidStrFlushPlay = isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)
      if (isValidStrFlushPlay) {
        continue;
      }
    }

    canStraight = checkHandFor3cardStraight(tempCard, playerCards);
    if (canStraight === true) {
      continue;
    }

    sameFlushCount = checkCardFlushCount(tempCard, playerCards);
    if (sameFlushCount >= 4 && sameFlushCount <= 5) {
      continue;
    }

    sameValueCount = checkHandForMatchingValues(tempCard, playerCards);
    if (sameValueCount === 3) {

      possible3kCards.push(tempCard);
    } else if (sameValueCount === 2) {

      possible2kCards.push(tempCard);
    }
  }

  //remove cards in 3k possible list without 3 of a kind
  possible3kCards = possible3kCards.sort(function(a, b) {
    return a.value - b.value;
  });

  removeCards = [];
  for (let i = 0; i < possible3kCards.length; i++) {
    let temp = possible3kCards[i];
    sameValueCount = checkHandForMatchingValues(temp, possible3kCards);
    if (sameValueCount < 3) {
      removeCards.push(temp);
    }
  }

  for (let i = 0; i < removeCards.length; i++) {
    let removeMe = removeCards[i];
    removeCardFromArray(removeMe, possible3kCards);
  }

  if (possible3kCards.length >= 3) {

    addCardToHand(threePSlotCard1, playerCards);
    threePSlotCard1 = possible3kCards[0];
    removeCardFromArray(possible3kCards[0], playerCards)

    addCardToHand(threePSlotCard2, playerCards);
    threePSlotCard2 = possible3kCards[1];
    removeCardFromArray(possible3kCards[1], playerCards)

    addCardToHand(threePSlotCard3, playerCards);
    threePSlotCard3 = possible3kCards[2];
    removeCardFromArray(possible3kCards[2], playerCards)

    if (doLogPlacedCards === true) {
      addLog("Player " + (playerTurn + 1) + ": Plays 3K " + printCard(threePSlotCard1) + printCard(threePSlotCard2) + printCard(threePSlotCard3));
    }
    cardPlacedAction();

    return;
  }

  // sort and remove cards with no valid 2k
  possible2kCards = possible2kCards.sort(function(a, b) {
    return a.value - b.value;
  });

  for (let i = 0; i < possible2kCards.length; i++) {
    let temp = possible2kCards[i];
    sameValueCount = checkHandForMatchingValues(temp, possible2kCards);
    if (sameValueCount === 1) {
      removeCards.push(temp);
    }
  }

  for (let i = 0; i < removeCards.length; i++) {
    let removeMe = removeCards[i];
    removeCardFromArray(removeMe, possible2kCards);
  }

  if (possible2kCards.length >= 2) {

    // no 3k cards played yet
    if (threePSlotCard1 == null &&
      threePSlotCard2 == null &&
      threePSlotCard3 == null) {

      threePSlotCard1 = possible2kCards[0];
      removeCardFromArray(possible2kCards[0], playerCards);

      threePSlotCard2 = possible2kCards[1];
      removeCardFromArray(possible2kCards[1], playerCards)

      if (doLogPlacedCards === true) {
        addLog("Player " + (playerTurn + 1) + ": Plays 2K of 3K " + printCard(threePSlotCard1) + printCard(threePSlotCard2) + printCard(threePSlotCard3));
      }
      cardPlacedAction();

      return;
    }

    // 2k of 3k has been played
    if (threePSlotCard1 != null &&
      threePSlotCard2 != null &&
      threePSlotCard3 == null) {

      //addLog("set in slot 1 and 2");
      addCardToHand(threePSlotCard1, playerCards);
      threePSlotCard1 = possible2kCards[0];
      removeCardFromArray(possible2kCards[0], playerCards)

      addCardToHand(threePSlotCard2, playerCards);
      threePSlotCard2 = possible2kCards[1];
      removeCardFromArray(possible2kCards[1], playerCards)

      if (doLogPlacedCards === true) {
        addLog("Player " + (playerTurn + 1) + " Plays 3k " + printCard(threePSlotCard1) + printCard(threePSlotCard2) + printCard(threePSlotCard3));
      }
      cardPlacedAction();
    }
  }
}

function checkIfMissingThirdCard() {
  if (threePSlotCard1 == null) {
    if (threePSlotCard2 == null) {
      if (threePSlotCard3 != null) {
        return true;
      }
    }
  }

  return false;
}

function checkFor3rdKindMissing(cards) {
  if (null != threePSlotCard1 && threePSlotCard2 != null) {
    if (threePSlotCard1.value === threePSlotCard2.value) {
      let value = threePSlotCard1.value;
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].value === value) {

          addCardToHand(threePSlotCard3, cards);
          threePSlotCard3 = cards[i];
          removeCardFromArray(cards[i], cards);

          if (doLogPlacedCards === true) {
            addLog("Player " + (playerTurn + 1) + ": Plays 3rd 3K card " + printCard(threePSlotCard1) + printCard(threePSlotCard2) + printCard(threePSlotCard3));
          }
          cardPlacedAction();

          return true;
        }
      }
    }
  }

  return false;
}

function checkCardCanReplaceCurrent3kPlayed(card) {
  let highValue = -1;
  if (threePSlotCard1 != null && threePSlotCard1.value > highValue) {
    highValue = threePSlotCard1.value;
  }
  if (threePSlotCard2 != null && threePSlotCard2.value > highValue) {
    highValue = threePSlotCard2.value;
  }
  if (threePSlotCard3 != null && threePSlotCard3.value > highValue) {
    highValue = threePSlotCard3.value;
  }

  return card.value > highValue;
}
