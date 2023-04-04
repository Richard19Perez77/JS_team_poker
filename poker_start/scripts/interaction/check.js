function checkHC() {
  //addLog("checkHC click on card");
  if (mouseX > hcX1 && mouseX < hcX2) {
    if (mouseY > hcY1 && mouseY < hcY2) {
      //addLog("hc 1 selected place card " + cardSelected);
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(hcSlotCard, playerCards);
        hcSlotCard = playerCards[cardSelected];
        removeCardFromArray(hcSlotCard, playerCards);

        cardPlacedAction();
      }
    }
  }
}

function check2K() {
  if (mouseX > twokX1a && mouseX < twokX2a) {
    if (mouseY > twokY1a && mouseY < twokY2a) {
      //addLog("2k 1 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(twoPSlotCard1, playerCards);
        twoPSlotCard1 = playerCards[cardSelected];
        removeCardFromArray(twoPSlotCard1, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > twokX1b && mouseX < twokX2b) {
    if (mouseY > twokY1b && mouseY < twokY2b) {
      //addLog("2k 2 selected ");
      if (cardSelected > -1) {
        //switch on player turn
        let playerCards = getPlayerCards();

        addCardToHand(twoPSlotCard2, playerCards);
        twoPSlotCard2 = playerCards[cardSelected];
        removeCardFromArray(twoPSlotCard2, playerCards);

        cardPlacedAction();
      }
    }
  }
}

function check3K() {
  if (mouseX > threekX1a && mouseX < threekX2a) {
    if (mouseY > threekY1a && mouseY < threekY2a) {
      //addLog("3k 1 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(threePSlotCard1, playerCards);
        threePSlotCard1 = playerCards[cardSelected];
        removeCardFromArray(threePSlotCard1, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > threekX1b && mouseX < threekX2b) {
    if (mouseY > threekY1b && mouseY < threekY2b) {
      //addLog("3k 2 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(threePSlotCard2, playerCards);
        threePSlotCard2 = playerCards[cardSelected];
        removeCardFromArray(threePSlotCard2, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > threekX1c && mouseX < threekX2c) {
    if (mouseY > threekY1c && mouseY < threekY2c) {
      //addLog("3k 3 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(threePSlotCard3, playerCards);
        threePSlotCard3 = playerCards[cardSelected];
        removeCardFromArray(threePSlotCard3, playerCards);

        cardPlacedAction();
      }
    }
  }
}

function check4K() {
  if (mouseX > fourkX1a && mouseX < fourkX2a) {
    if (mouseY > fourkY1a && mouseY < fourkY2a) {
      //addLog("4k 1 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(fourkSlotCard1, playerCards);
        fourkSlotCard1 = playerCards[cardSelected];
        removeCardFromArray(fourkSlotCard1, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > fourkX1b && mouseX < fourkX2b) {
    if (mouseY > fourkY1b && mouseY < fourkY2b) {
      //addLog("4k 2 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(fourkSlotCard2, playerCards);
        fourkSlotCard2 = playerCards[cardSelected];
        removeCardFromArray(fourkSlotCard2, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > fourkX1c && mouseX < fourkX2c) {
    if (mouseY > fourkY1c && mouseY < fourkY2c) {
      //addLog("4k 3 selected ");
      if (cardSelected > -1) {
        let playerCards = getPlayerCards();

        addCardToHand(fourkSlotCard3, playerCards);
        fourkSlotCard3 = playerCards[cardSelected];
        removeCardFromArray(fourkSlotCard3, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > fourkX1d && mouseX < fourkX2d) {
    if (mouseY > fourkY1d && mouseY < fourkY2d) {
      //addLog("4k 4 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(fourkSlotCard4, playerCards);
        fourkSlotCard4 = playerCards[cardSelected];
        removeCardFromArray(fourkSlotCard4, playerCards);

        cardPlacedAction();
      }
    }
  }
}

function checkStraight() {
  if (mouseX > straightX1a && mouseX < straightX2a) {
    if (mouseY > straightY1a && mouseY < straightY2a) {
      //addLog("ST 1 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(straightSlotCard1, playerCards);
        straightSlotCard1 = playerCards[cardSelected];
        removeCardFromArray(straightSlotCard1, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > straightX1b && mouseX < straightX2b) {
    if (mouseY > straightY1b && mouseY < straightY2b) {
      //addLog("ST 2 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(straightSlotCard2, playerCards);
        straightSlotCard2 = playerCards[cardSelected];
        removeCardFromArray(straightSlotCard2, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > straightX1c && mouseX < straightX2c) {
    if (mouseY > straightY1c && mouseY < straightY2c) {
      //addLog("ST 3 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(straightSlotCard3, playerCards);
        straightSlotCard3 = playerCards[cardSelected];
        removeCardFromArray(straightSlotCard3, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > straightX1d && mouseX < straightX2d) {
    if (mouseY > straightY1d && mouseY < straightY2d) {
      //addLog("ST 4 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(straightSlotCard4, playerCards);
        straightSlotCard4 = playerCards[cardSelected];
        removeCardFromArray(straightSlotCard4, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > straightX1e && mouseX < straightX2e) {
    if (mouseY > straightY1e && mouseY < straightY2e) {
      //addLog("ST 5 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(straightSlotCard5, playerCards);
        straightSlotCard5 = playerCards[cardSelected];
        removeCardFromArray(straightSlotCard5, playerCards);

        cardPlacedAction();
      }
    }
  }
}

function checkSF() {
  //addLog("checkStraightFlush()");
  if (mouseX > strFlushX1a && mouseX < strFlushX2a) {
    if (mouseY > strFlushY1a && mouseY < strFlushY2a) {
      //addLog("strFlush 1 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(strFlushSlotCard1, playerCards);
        strFlushSlotCard1 = playerCards[cardSelected];
        removeCardFromArray(strFlushSlotCard1, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > strFlushX1b && mouseX < strFlushX2b) {
    if (mouseY > strFlushY1b && mouseY < strFlushY2b) {
      //addLog("strFlush 2 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(strFlushSlotCard2, playerCards);
        strFlushSlotCard2 = playerCards[cardSelected];
        removeCardFromArray(strFlushSlotCard2, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > strFlushX1c && mouseX < strFlushX2c) {
    if (mouseY > strFlushY1c && mouseY < strFlushY2c) {
      //addLog("strFlush 3 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(strFlushSlotCard3, playerCards);
        strFlushSlotCard3 = playerCards[cardSelected];
        removeCardFromArray(strFlushSlotCard3, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > strFlushX1d && mouseX < strFlushX2d) {
    if (mouseY > strFlushY1d && mouseY < strFlushY2d) {
      //addLog("strFlush 4 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(strFlushSlotCard4, playerCards);
        strFlushSlotCard4 = playerCards[cardSelected];
        removeCardFromArray(strFlushSlotCard4, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > strFlushX1e && mouseX < strFlushX2e) {
    if (mouseY > strFlushY1e && mouseY < strFlushY2e) {
      //addLog("strFlush 5 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(strFlushSlotCard5, playerCards);
        strFlushSlotCard5 = playerCards[cardSelected];
        removeCardFromArray(strFlushSlotCard5, playerCards);

        cardPlacedAction();
      }
    }
  }
}

function checkFlush() {
  if (mouseX > flushX1a && mouseX < flushX2a) {
    if (mouseY > flushY1a && mouseY < flushY2a) {
      //addLog("flush 1 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(flushSlotCard1, playerCards);
        flushSlotCard1 = playerCards[cardSelected];
        removeCardFromArray(flushSlotCard1, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > flushX1b && mouseX < flushX2b) {
    if (mouseY > flushY1b && mouseY < flushY2b) {
      //addLog("ST 2 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(flushSlotCard2, playerCards);
        flushSlotCard2 = playerCards[cardSelected];
        removeCardFromArray(flushSlotCard2, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > flushX1c && mouseX < flushX2c) {
    if (mouseY > flushY1c && mouseY < flushY2c) {
      //addLog("ST 3 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(flushSlotCard3, playerCards);
        flushSlotCard3 = playerCards[cardSelected];
        removeCardFromArray(flushSlotCard3, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > flushX1d && mouseX < flushX2d) {
    if (mouseY > flushY1d && mouseY < flushY2d) {
      //addLog("ST 4 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(flushSlotCard4, playerCards);
        flushSlotCard4 = playerCards[cardSelected];
        removeCardFromArray(flushSlotCard4, playerCards);

        cardPlacedAction();

        return;
      }
    }
  }

  if (mouseX > flushX1e && mouseX < flushX2e) {
    if (mouseY > flushY1e && mouseY < flushY2e) {
      //addLog("ST 5 selected ");
      if (cardSelected > -1) {

        let playerCards = getPlayerCards();

        addCardToHand(flushSlotCard5, playerCards);
        flushSlotCard5 = playerCards[cardSelected];
        removeCardFromArray(flushSlotCard5, playerCards);

        cardPlacedAction();
      }
    }
  }
}

function cardClickedOn() {
  if (mouseX > card1x1 && mouseX < card1x2) {
    if (mouseY > card1y1 && mouseY < card1y2) {
      cardSelected = 0;
      cardOffsetX = mouseX - card1x1;
      cardOffsetY = mouseY - card1y1;
      //addLog("cardSelected = " + cardSelected);
      return;
    }
  }

  if (mouseX > card2x1 && mouseX < card2x2) {
    if (mouseY > card2y1 && mouseY < card2y2) {
      cardSelected = 1;
      cardOffsetX = mouseX - card2x1;
      cardOffsetY = mouseY - card2y1;
      //addLog("cardSelected = " + cardSelected);
      return;
    }
  }

  if (mouseX > card3x1 && mouseX < card3x2) {
    if (mouseY > card3y1 && mouseY < card3y2) {
      cardSelected = 2;
      cardOffsetX = mouseX - card3x1;
      cardOffsetY = mouseY - card3y1;
      //addLog("cardSelected = " + cardSelected);
      return;
    }
  }

  if (mouseX > card4x1 && mouseX < card4x2) {
    if (mouseY > card4y1 && mouseY < card4y2) {
      cardSelected = 3;
      cardOffsetX = mouseX - card4x1;
      cardOffsetY = mouseY - card4y1;
      //addLog("cardSelected = " + cardSelected);
      return;
    }
  }

  if (mouseX > card5x1 && mouseX < card5x2) {
    if (mouseY > card5y1 && mouseY < card5y2) {
      cardSelected = 4;
      cardOffsetX = mouseX - card5x1;
      cardOffsetY = mouseY - card5y1;
      //addLog("cardSelected = " + cardSelected);
      return;
    }
  }

  if (mouseX > card6x1 && mouseX < card6x2) {
    if (mouseY > card6y1 && mouseY < card6y2) {
      cardSelected = 5;
      cardOffsetX = mouseX - card6x1;
      cardOffsetY = mouseY - card6y1;
      //addLog("cardSelected = " + cardSelected);
      return;
    }
  }

  if (mouseX > card7x1 && mouseX < card7x2) {
    if (mouseY > card7y1 && mouseY < card7y2) {
      cardSelected = 6;
      cardOffsetX = mouseX - card7x1;
      cardOffsetY = mouseY - card7y1;
      //addLog("cardSelected = " + cardSelected);
      return;
    }
  }

  cardSelected = -1;
}

function checkHCPlaceholderIndex() {
  if (mouseX > hcX1 && mouseX < hcX2) {
    if (mouseY > hcY1 && mouseY < hcY2) {
      // addDebugLog("mouse over placeholder hc card 0");
      return 0;
    }
  }
}

function check2KPlaceholderIndex() {
  if (mouseX > twokX1a && mouseX < twokX2a) {
    if (mouseY > twokY1a && mouseY < twokY2a) {
      // addDebugLog("mouse over placeholder 2k card 0");
      return 0;
    }
  }

  if (mouseX > twokX1b && mouseX < twokX2b) {
    if (mouseY > twokY1b && mouseY < twokY2b) {
      // addDebugLog("mouse over placeholder 2k card 1");
      return 1;
    }
  }
}

function check3KPlaceholderIndex() {
  if (mouseX > threekX1a && mouseX < threekX2a) {
    if (mouseY > threekY1a && mouseY < threekY2a) {
      // addDebugLog("mouse over placeholder 3k card 0");
      return 0;
    }
  }

  if (mouseX > threekX1b && mouseX < threekX2b) {
    if (mouseY > threekY1b && mouseY < threekY2b) {
      // addDebugLog("mouse over placeholder 3k card 1");
      return 1;
    }
  }

  if (mouseX > threekX1c && mouseX < threekX2c) {
    if (mouseY > threekY1c && mouseY < threekY2c) {
      // addDebugLog("mouse over placeholder 3k card 2");
      return 2;
    }
  }
}

function checkStraightPlaceholderIndex() {
  if (mouseX > straightX1a && mouseX < straightX2a) {
    if (mouseY > straightY1a && mouseY < straightY2a) {
      // addDebugLog("mouse over placeholder str card 0");
      return 0;
    }
  }

  if (mouseX > straightX1b && mouseX < straightX2b) {
    if (mouseY > straightY1b && mouseY < straightY2b) {
      //addLog("ST 2 selected ");
      // addDebugLog("mouse over placeholder str card 0");
      return 1;
    }
  }

  if (mouseX > straightX1c && mouseX < straightX2c) {
    if (mouseY > straightY1c && mouseY < straightY2c) {
      // addDebugLog("mouse over placeholder str card 0");
      return 2;
    }
  }

  if (mouseX > straightX1d && mouseX < straightX2d) {
    if (mouseY > straightY1d && mouseY < straightY2d) {
      // addDebugLog("mouse over placeholder str card 0");
      return 3;
    }
  }

  if (mouseX > straightX1e && mouseX < straightX2e) {
    if (mouseY > straightY1e && mouseY < straightY2e) {
      // addDebugLog("mouse over placeholder str card 0");
      return 4;
    }
  }
}

function checkFlushPlaceholderIndex() {
  if (mouseX > flushX1a && mouseX < flushX2a) {
    if (mouseY > flushY1a && mouseY < flushY2a) {
      return 0;
    }
  }

  if (mouseX > flushX1b && mouseX < flushX2b) {
    if (mouseY > flushY1b && mouseY < flushY2b) {
      return 1;
    }
  }

  if (mouseX > flushX1c && mouseX < flushX2c) {
    if (mouseY > flushY1c && mouseY < flushY2c) {
      return 2;
    }
  }

  if (mouseX > flushX1d && mouseX < flushX2d) {
    if (mouseY > flushY1d && mouseY < flushY2d) {
      return 3;
    }
  }

  if (mouseX > flushX1e && mouseX < flushX2e) {
    if (mouseY > flushY1e && mouseY < flushY2e) {
      return 4;
    }
  }
}

function check4KPlaceholderIndex() {
  if (mouseX > fourkX1a && mouseX < fourkX2a) {
    if (mouseY > fourkY1a && mouseY < fourkY2a) {
      // addDebugLog("mouse over placeholder str card 0");
      return 0;
    }
  }

  if (mouseX > fourkX1b && mouseX < fourkX2b) {
    if (mouseY > fourkY1b && mouseY < fourkY2b) {
      // addDebugLog("mouse over placeholder str card 0");
      return 1;
    }
  }

  if (mouseX > fourkX1c && mouseX < fourkX2c) {
    if (mouseY > fourkY1c && mouseY < fourkY2c) {
      // addDebugLog("mouse over placeholder str card 0");
      return 2;
    }
  }

  if (mouseX > fourkX1d && mouseX < fourkX2d) {
    if (mouseY > fourkY1d && mouseY < fourkY2d) {
      // addDebugLog("mouse over placeholder str card 0");
      return 3;
    }
  }
}

function checkSFPlaceholderIndex() {
  //addLog("checkStraightFlush()");
  if (mouseX > strFlushX1a && mouseX < strFlushX2a) {
    if (mouseY > strFlushY1a && mouseY < strFlushY2a) {
      return 0;
    }
  }

  if (mouseX > strFlushX1b && mouseX < strFlushX2b) {
    if (mouseY > strFlushY1b && mouseY < strFlushY2b) {
      return 1;
    }
  }

  if (mouseX > strFlushX1c && mouseX < strFlushX2c) {
    if (mouseY > strFlushY1c && mouseY < strFlushY2c) {
      return 2;
    }
  }

  if (mouseX > strFlushX1d && mouseX < strFlushX2d) {
    if (mouseY > strFlushY1d && mouseY < strFlushY2d) {
      return 3;
    }
  }

  if (mouseX > strFlushX1e && mouseX < strFlushX2e) {
    if (mouseY > strFlushY1e && mouseY < strFlushY2e) {
      return 4;
    }
  }
}
