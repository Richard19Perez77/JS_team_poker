function findHCcard() {
  var playerCards = getPlayerCards();

  var canReplaceCurrentHC = false;
  var sameValueCount = 0;
  var canStraight = false;
  var sameSuitCount = 0;
  var isTwoCardStrFlush = false;

  var possibleCards = [];

  var tempCard = null;
  for (var i = 0; i < playerCards.length; i++) {

    canReplaceCurrentHC = false;
    sameValueCount = 0;
    sameFlushCount = 0;
    canStraight = false;
    isTwoCardStrFlush = false;

    tempCard = playerCards[i];

    // check for card to be >= to current placeholder
    canReplaceCurrentHC = checkHCisGreater(tempCard);

    if (canReplaceCurrentHC) {

      // check if card has duplicate face values
      sameValueCount = checkHandForMatchingValues(tempCard, playerCards);

      if (sameValueCount == 1) {

        canStraight = checkHandFor3cardStraight(tempCard, playerCards);

        if (!canStraight) {

          isTwoCardStrFlush = checkHandForNextStrFlushCard(tempCard, playerCards);

          if (isTwoCardStrFlush) {

            sameFlushCount = checkCardFlushCount(tempCard, playerCards);

            if (sameFlushCount < 5) {
              possibleCards.push(tempCard);
            }
          }
        }
      }
    }
  }

  if (possibleCards.length > 0) {
    possibleCards = possibleCards.sort(function(a, b) {
      return a.value - b.value;
    });

    addCardToHand(hcSlotCard, playerCards);
    hcSlotCard = possibleCards[0];
    removeCardFromArray(hcSlotCard, playerCards);

    if (doLogPlacedCards == true) {
      addLog("Player " + (playerTurn + 1) + ": Plays HC  " + printCard(hcSlotCard));
    }
    cardPlacedAction();
  }
}

function checkHandForNextStrFlushCard(card, cardArr) {
  for (var i = 0; i < cardArr.length; i++) {
    if (card.value != 0 && card.value != 11) {
      var possibleStrFlushCard = cardArr[i];
      if (card.suit == possibleStrFlushCard.suit) {
        if (card.value == possibleStrFlushCard.value + 1 || card.value == possibleStrFlushCard.value - 1) {
          return true;
        }
        if (card.value == possibleStrFlushCard.value + 2 || card.value == possibleStrFlushCard.value - 2) {
          return true;
        }
      }
    }
  }

  return false;
}
