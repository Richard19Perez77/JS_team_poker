function findStraightFlushCard() {
  let cardArr = getPlayerCards();

  cardArr = cardArr.sort(function(a, b) {
    return a.value - b.value;
  });

  let cardsPlayed = countStrFlushCardsPlayed();

  // finish 4 card straight flush
  if (cardsPlayed === 4) {
    //addLog("Player " + (playerTurn + 1) + ": Finding 5th straight flush card");
    let fifthFound = findFifthCardInStraightFlush();
    if (fifthFound) {
      return;
    }
  }

  // start a new str flush by checking for a full straight flush
  let straightFlushArr = checkHandForStraightFlush(cardArr);
  if (straightFlushArr.length === 5) {

    addCardToHand(strFlushSlotCard1, cardArr);
    addCardToHand(strFlushSlotCard2, cardArr);
    addCardToHand(strFlushSlotCard3, cardArr);
    addCardToHand(strFlushSlotCard4, cardArr);
    addCardToHand(strFlushSlotCard5, cardArr);

    strFlushSlotCard1 = straightFlushArr[0];
    strFlushSlotCard2 = straightFlushArr[1];
    strFlushSlotCard3 = straightFlushArr[2];
    strFlushSlotCard4 = straightFlushArr[3];
    strFlushSlotCard5 = straightFlushArr[4];

    removeCardFromArray(strFlushSlotCard1, cardArr);
    removeCardFromArray(strFlushSlotCard2, cardArr);
    removeCardFromArray(strFlushSlotCard3, cardArr);
    removeCardFromArray(strFlushSlotCard4, cardArr);
    removeCardFromArray(strFlushSlotCard5, cardArr);

    if (doLogPlacedCards === true) {
      addLog("Player " + (playerTurn + 1) + ": Plays straight flush " + printCard(strFlushSlotCard1) + printCard(strFlushSlotCard2) + printCard(strFlushSlotCard3) + printCard(strFlushSlotCard4) + printCard(strFlushSlotCard5));
    }
    cardPlacedAction();

    return;
  }

  //next check for 4th and 5th cards
  if (cardsPlayed === 3) {
    let fourthFound = findFourthCardInStraightFlush();
    if (fourthFound) {
      let fifthFound = findFifthCardInStraightFlush()
      if (fifthFound) {
        return;
      }
    }
  }

  cardsPlayed = countStrFlushCardsPlayed();

  // don't play partial over 5 cards set
  if (cardsPlayed === 5) {
    return;
  }

  let partialArr = findPartialStraightFlush(cardArr);

  //place 3 or 4 cards if found
  if (partialArr.length === 4 && cardsPlayed <= 4) {

    switch (cardsPlayed) {
      case 0:
      case 3:

        //play 4 cards down
        addCardToHand(strFlushSlotCard1, cardArr);
        strFlushSlotCard1 = partialArr[0];
        removeCardFromArray(strFlushSlotCard1, cardArr);

        addCardToHand(strFlushSlotCard2, cardArr);
        strFlushSlotCard2 = partialArr[1];
        removeCardFromArray(strFlushSlotCard2, cardArr);

        addCardToHand(strFlushSlotCard3, cardArr);
        strFlushSlotCard3 = partialArr[2];
        removeCardFromArray(strFlushSlotCard3, cardArr);

        addCardToHand(strFlushSlotCard4, cardArr);
        strFlushSlotCard4 = partialArr[3];
        removeCardFromArray(strFlushSlotCard4, cardArr);

        if (doLogPlacedCards === true) {
          addLog("Player " + (playerTurn + 1) + ": Plays 4 Straight Flush cards " + printCard(strFlushSlotCard1) + printCard(strFlushSlotCard2) + printCard(strFlushSlotCard3) + printCard(strFlushSlotCard4) + printCard(strFlushSlotCard5));
        }
        cardPlacedAction();

        return;
      case 4:

        //check overwrite cards value is greater
        if (strFlushSlotCard1.value < partialArr[0].value &&
          strFlushSlotCard2.value < partialArr[1].value &&
          strFlushSlotCard3.value < partialArr[2].value &&
          strFlushSlotCard4.value < partialArr[3].value) {

          //play 4 cards down
          addCardToHand(strFlushSlotCard1, cardArr);
          strFlushSlotCard1 = partialArr[0];
          removeCardFromArray(strFlushSlotCard1, cardArr);

          addCardToHand(strFlushSlotCard2, cardArr);
          strFlushSlotCard2 = partialArr[1];
          removeCardFromArray(strFlushSlotCard2, cardArr);

          addCardToHand(strFlushSlotCard3, cardArr);
          strFlushSlotCard3 = partialArr[2];
          removeCardFromArray(strFlushSlotCard3, cardArr);

          addCardToHand(strFlushSlotCard4, cardArr);
          strFlushSlotCard4 = partialArr[3];
          removeCardFromArray(strFlushSlotCard4, cardArr);

          if (doLogPlacedCards === true) {
            addLog("Player " + (playerTurn + 1) + ": Plays 4 Straight Flush cards " + printCard(strFlushSlotCard1) + printCard(strFlushSlotCard2) + printCard(strFlushSlotCard3) + printCard(strFlushSlotCard4) + printCard(strFlushSlotCard5));
          }
          cardPlacedAction();

          return;
        }

        break;
    }
  } else if (partialArr.length === 3 && cardsPlayed <= 3) {
    //addLog("Player " + (playerTurn + 1) + " try to place 3 card straight");

    switch (cardsPlayed) {
      case 0:
        strFlushSlotCard1 = partialArr[0];
        removeCardFromArray(strFlushSlotCard1, cardArr);

        strFlushSlotCard2 = partialArr[1];
        removeCardFromArray(strFlushSlotCard2, cardArr);

        strFlushSlotCard3 = partialArr[2];
        removeCardFromArray(strFlushSlotCard3, cardArr);

        if (doLogPlacedCards === true) {
          addLog("Player " + (playerTurn + 1) + ": Plays 3 Straight Flush cards " + printCard(strFlushSlotCard1) + printCard(strFlushSlotCard2) + printCard(strFlushSlotCard3) + printCard(strFlushSlotCard4) + printCard(strFlushSlotCard5));
        }
        cardPlacedAction();

        return;
      case 3:

        //check overwrite cards value is greater
        if (strFlushSlotCard1.value < partialArr[0].value &&
          strFlushSlotCard2.value < partialArr[1].value &&
          strFlushSlotCard3.value < partialArr[2].value) {

          addCardToHand(strFlushSlotCard1, cardArr)
          strFlushSlotCard1 = partialArr[0];
          removeCardFromArray(strFlushSlotCard1, cardArr);

          addCardToHand(strFlushSlotCard2, cardArr)
          strFlushSlotCard2 = partialArr[1];
          removeCardFromArray(strFlushSlotCard2, cardArr);

          addCardToHand(strFlushSlotCard3, cardArr)
          strFlushSlotCard3 = partialArr[2];
          removeCardFromArray(strFlushSlotCard3, cardArr);

          if (doLogPlacedCards === true) {
            addLog("Player " + (playerTurn + 1) + ": Plays 3 Straight Flush cards " + printCard(strFlushSlotCard1) + printCard(strFlushSlotCard2) + printCard(strFlushSlotCard3) + printCard(strFlushSlotCard4) + printCard(strFlushSlotCard5));
          }
          cardPlacedAction();
        }

        return;
    }
  }
}

function findPartialStraightFlush(cardArr) {
  //addLog("findPartialStraightFlush()" + printCardArr(cardArr));
  for (let i = 0; i < cardArr.length; i++) {
    let card1 = cardArr[i];
    //addLog("card1" + printCard(card1));
    firstInner: for (let j = i; j < cardArr.length; j++) {
      let card2 = cardArr[j];
      //addLog("card2" + printCard(card2));
      if (card1.suit === card2.suit) {
        if (card1.value === card2.value - 1) {
          for (let k = j; k < cardArr.length; k++) {
            let card3 = cardArr[k];
            //addLog("card3" + printCard(card3));
            if (card2.suit === card3.suit) {
              if (card2.value === card3.value - 1) {
                let partialArr = [];
                partialArr.push(card1);
                partialArr.push(card2);
                partialArr.push(card3);

                let isValid = isPartialArrayValidAttemptAtStraightFlush(card1.value, card2.value, card3.value, card1.suit);
                if (isValid === false) {
                  break firstInner;
                }

                for (let l = k; l < cardArr.length; l++) {
                  let card4 = cardArr[l];
                  //addLog("card4 " + printCard(card4));
                  if (card3.suit === card4.suit) {
                    if (card3.value === card4.value - 1) {
                      partialArr.push(card4);
                    }
                  }
                }

                //addLog("Use array " + printCardArr(partialArr));
                return partialArr;
              }
            }
          }
        }
      }
    }
  }

  //addLog("No possible found");
  return [];
}

function checkHandForStraightFlush(cardArr) {
  for (let i = 0; i < cardArr.length; i++) {
    let card1 = cardArr[i];
    for (let j = i + 1; j < cardArr.length; j++) {
      let card2 = cardArr[j];
      if (card1.suit === card2.suit) {
        if (card1.value === card2.value - 1) {
          for (let k = j + 1; k < cardArr.length; k++) {
            let card3 = cardArr[k];
            if (card1.suit === card3.suit) {
              if (card1.value === card3.value - 2) {
                for (let l = k + 1; l < cardArr.length; l++) {
                  let card4 = cardArr[l];
                  if (card1.suit===card4.suit) {
                    if (card1.value===card4.value - 3) {
                      for (let m = l + 1; m < cardArr.length; m++) {
                        let card5 = cardArr[m];
                        if (card1.suit===card4.suit) {
                          if (card1.value===card4.value - 4) {
                            let strFlushArr = [];
                            strFlushArr.push(card1);
                            strFlushArr.push(card2);
                            strFlushArr.push(card3);
                            strFlushArr.push(card4);
                            strFlushArr.push(card5);
                            return strFlushArr;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return [];
}

function countStrFlushCardsPlayed() {
  //addLog("countStrFlushCardsPlayed()");
  let acc = 0;
  if (strFlushSlotCard1 != null) {
    acc++;
  }
  if (strFlushSlotCard2 != null) {
    acc++;
  }
  if (strFlushSlotCard3 != null) {
    acc++;
  }
  if (strFlushSlotCard4 != null) {
    acc++;
  }
  if (strFlushSlotCard5 != null) {
    acc++;
  }
  return acc;
}

function checkHandForBetterStraightFlush(cardArr) {
  let prev = getStraightFlushScore();
  let curr = 0;
  curr = cardArr[0].value +
    cardArr[1].value +
    cardArr[2].value +
    cardArr[3].value +
    cardArr[4].value +
    10;

  return prev < curr;
}

function findFourthCardInStraightFlush() {

  //check cards are all same suit
  if (strFlushSlotCard1.suit===strFlushSlotCard2.suit &&
    strFlushSlotCard2.suit===strFlushSlotCard3.suit) {

    //check cards are straight
    if (strFlushSlotCard1.value===strFlushSlotCard2.value - 1 &&
      strFlushSlotCard2.value===strFlushSlotCard3.value - 1) {

      //check cards are straight
      let suit = strFlushSlotCard1.suit;
      let lowValue = strFlushSlotCard1.value - 1;
      let highValue = strFlushSlotCard3.value + 1;

      let playerCards = getPlayerCards();
      for (let i = 0; i < playerCards.length; i++) {
        let temp = playerCards[i];
        if (temp.suit===suit && (temp.value===lowValue || temp.value===highValue)) {
          strFlushSlotCard4 = temp;
          removeCardFromArray(strFlushSlotCard4, playerCards);

          if (doLogPlacedCards===true) {
            addLog("Player " + (playerTurn + 1) + ": Plays 4th Straight Flush card " + printCard(strFlushSlotCard1) + printCard(strFlushSlotCard2) + printCard(strFlushSlotCard3) + printCard(strFlushSlotCard4) + printCard(strFlushSlotCard5));
          }
          cardPlacedAction();

          return true;
        }
      }
    }
  }

  return false;
}

function findFifthCardInStraightFlush() {
  //addLog("findFifthCardInStraightFlush()");

  //check cards are all same suit
  if (strFlushSlotCard1.suit===strFlushSlotCard2.suit &&
    strFlushSlotCard2.suit===strFlushSlotCard3.suit &&
    strFlushSlotCard3.suit===strFlushSlotCard4.suit) {

    //check cards are straight
    if (strFlushSlotCard1.value===strFlushSlotCard2.value - 1 &&
      strFlushSlotCard2.value===strFlushSlotCard3.value - 1 &&
      strFlushSlotCard3.value===strFlushSlotCard4.value - 1) {

      // try to find a higher or lower card to finish
      let suit = strFlushSlotCard1.suit;
      let lowValue = strFlushSlotCard1.value - 1;
      let highValue = strFlushSlotCard4.value + 1;

      let playerCards = getPlayerCards();
      for (let i = 0; i < playerCards.length; i++) {
        let fifthCard = playerCards[i];
        if (fifthCard.suit===suit && (fifthCard.value===lowValue || fifthCard.value===highValue)) {

          addCardToHand(strFlushSlotCard5, playerCards);
          strFlushSlotCard5 = fifthCard;
          removeCardFromArray(strFlushSlotCard5, playerCards);

          if (doLogPlacedCards===true) {
            addLog("Player " + (playerTurn + 1) + ": Plays 5th Straight Flush card " + printCard(strFlushSlotCard1) + printCard(strFlushSlotCard2) + printCard(strFlushSlotCard3) + printCard(strFlushSlotCard4) + printCard(strFlushSlotCard5));
          }
          cardPlacedAction();

          return true;
        }
      }
    }

    // check for a four card flush out of order
    let value;
    let suit = strFlushSlotCard1.suit;

    if (strFlushSlotCard1.value===strFlushSlotCard2.value - 2) {
      value = strFlushSlotCard1.value + 1
      addLog("card needed " + value);
    } else if (strFlushSlotCard4.value===strFlushSlotCard3.value + 2) {
      value = strFlushSlotCard3.value + 1
      addLog("card needed " + value);
    } else if (strFlushSlotCard3.value===strFlushSlotCard2.value + 2) {
      value = strFlushSlotCard2.value + 1
      addLog("card needed " + value);
    }

    if (value != null) {
      let playerCards = getPlayerCards();
      for (let i = 0; i < playerCards.length; i++) {
        let fifthCard = playerCards[i];

        if (fifthCard.suit===suit && fifthCard.value===value) {

          addCardToHand(strFlushSlotCard5, playerCards);
          strFlushSlotCard5 = fifthCard;
          removeCardFromArray(strFlushSlotCard5, playerCards);

          if (doLogPlacedCards===true) {
            addLog("Player " + (playerTurn + 1) + ": Plays 5th Straight Flush card " + printCard(strFlushSlotCard1) + printCard(strFlushSlotCard2) + printCard(strFlushSlotCard3) + printCard(strFlushSlotCard4) + printCard(strFlushSlotCard5));
          }
          cardPlacedAction();

          return true;
        }
      }
    }
  }

  return false;
}
