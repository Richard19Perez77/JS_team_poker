function removeCardFromArray(card, cardArr) {
  if (card == null) {
    return;
  }
  var index = -1;
  for (var i = 0; i < cardArr.length; i++) {
    if (card.value == cardArr[i].value &&
      card.suit == cardArr[i].suit) {
      index = i;
      break;
    }
  }
  if (index != -1) {
    cardArr.splice(index, 1);
  }
}

function checkForFullHand(cardArr) {
  var acc = cardArr.length;
  var dealtCards = [];
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
  if (dealtCards != null && dealtCards.length > 0) {
    //addLog(printCardArr(dealtCards));
  }
}

function dealToPlayer1() {
  for (var i = 0; i < MAX_PLAYER_CARDS; i++) {
    player1Cards[i] = deckCards.shift();
    player1Cards[i].bitmap.onload = function() {
      imagesLoaded++;
      checkImagesLoadedCount();
      drawBoard();
    }
  }
}

function dealToPlayer2() {
  for (var i = 0; i < MAX_PLAYER_CARDS; i++) {
    player2Cards[i] = deckCards.shift();
    player2Cards[i].bitmap.onload = function() {
      imagesLoaded++;
      checkImagesLoadedCount();
      drawBoard();
    }
  }
}

function dealToPlayer3() {
  for (var i = 0; i < MAX_PLAYER_CARDS; i++) {
    player3Cards[i] = deckCards.shift();
    player3Cards[i].bitmap.onload = function() {
      imagesLoaded++;
      checkImagesLoadedCount();
      drawBoard();
    }
  }
}

function dealToPlayer4() {
  for (var i = 0; i < MAX_PLAYER_CARDS; i++) {
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
  placeholderCard = playerCard;
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
