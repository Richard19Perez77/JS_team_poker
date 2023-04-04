function moveCardFromKeyPress() {
  //addLog("moveCardFromKeyPress() " + playercardPressed + " to " + placeholderPressed);
  if (playercardPressed != -1 && placeholderPressed != -1) {

    switch (targetHand) {
      case 0: //high card hand
        switch (placeholderPressed) {
          case 0: // slot 1 hc cards

            var playerCards = getPlayerCards();

            addCardToHand(hcSlotCard, playerCards);
            hcSlotCard = playerCards[playercardPressed];
            removeCardFromArray(hcSlotCard, playerCards);

            cardPlacedAction();

            return;
        }
        return;
      case 1: // two of a kind
        switch (placeholderPressed) {
          case 0: // slot 1

            var playerCards = getPlayerCards();

            addCardToHand(twoPSlotCard1, playerCards);
            twoPSlotCard1 = playerCards[playercardPressed];
            removeCardFromArray(twoPSlotCard1, playerCards);

            cardPlacedAction();

            return;
          case 1: // slot 2

            var playerCards = getPlayerCards();

            addCardToHand(twoPSlotCard2, playerCards);
            twoPSlotCard2 = playerCards[playercardPressed];
            removeCardFromArray(twoPSlotCard2, playerCards);

            cardPlacedAction();

            return;
        }
        return;
      case 2: // three of a kind
        switch (placeholderPressed) {
          case 0: //slot 1
            var playerCards = getPlayerCards();

            addCardToHand(threePSlotCard1, playerCards);
            threePSlotCard1 = playerCards[playercardPressed];
            removeCardFromArray(threePSlotCard1, playerCards);

            cardPlacedAction();

            return;
          case 1: //slot 2
            var playerCards = getPlayerCards();

            addCardToHand(threePSlotCard2, playerCards);
            threePSlotCard2 = playerCards[playercardPressed];
            removeCardFromArray(threePSlotCard2, playerCards);

            cardPlacedAction();

            return;
          case 2: // slot 3
            var playerCards = getPlayerCards();

            addCardToHand(threePSlotCard3, playerCards);
            threePSlotCard3 = playerCards[playercardPressed];
            removeCardFromArray(threePSlotCard3, playerCards);

            cardPlacedAction();

            return;
        }
        return;
      case 3: // straight
        switch (placeholderPressed) {
          case 0: //slot 1
            var playerCards = getPlayerCards();

            addCardToHand(straightSlotCard1, playerCards);
            straightSlotCard1 = playerCards[playercardPressed];
            removeCardFromArray(straightSlotCard1, playerCards);

            cardPlacedAction();

            return;
          case 1: // slot 2
            var playerCards = getPlayerCards();

            addCardToHand(straightSlotCard2, playerCards);
            straightSlotCard2 = playerCards[playercardPressed];
            removeCardFromArray(straightSlotCard2, playerCards);

            cardPlacedAction();

            return;
          case 2: //slot 3
            var playerCards = getPlayerCards();

            addCardToHand(straightSlotCard3, playerCards);
            straightSlotCard3 = playerCards[playercardPressed];
            removeCardFromArray(straightSlotCard3, playerCards);

            cardPlacedAction();

            return;
          case 3: // slot 4
            var playerCards = getPlayerCards();

            addCardToHand(straightSlotCard4, playerCards);
            straightSlotCard4 = playerCards[playercardPressed];
            removeCardFromArray(straightSlotCard4, playerCards);

            cardPlacedAction();

            return;
          case 4: // slot 5
            var playerCards = getPlayerCards();

            addCardToHand(straightSlotCard5, playerCards);
            straightSlotCard5 = playerCards[playercardPressed];
            removeCardFromArray(straightSlotCard5, playerCards);

            cardPlacedAction();

            return;
        }
        return;
      case 4: // flush hand
        switch (placeholderPressed) {
          case 0: // slot 1

            var playerCards = getPlayerCards();

            addCardToHand(flushSlotCard1, playerCards);
            flushSlotCard1 = playerCards[playercardPressed];
            removeCardFromArray(flushSlotCard1, playerCards);

            cardPlacedAction();

            return;
          case 1: // slot 2
            var playerCards = getPlayerCards();

            addCardToHand(flushSlotCard2, playerCards);
            flushSlotCard2 = playerCards[playercardPressed];
            removeCardFromArray(flushSlotCard2, playerCards);

            cardPlacedAction();

            return;
          case 2: // slot 3
            var playerCards = getPlayerCards();

            addCardToHand(flushSlotCard3, playerCards);
            flushSlotCard3 = playerCards[playercardPressed];
            removeCardFromArray(flushSlotCard3, playerCards);

            cardPlacedAction();

            return;
          case 3: // slot 4
            var playerCards = getPlayerCards();

            addCardToHand(flushSlotCard4, playerCards);
            flushSlotCard4 = playerCards[playercardPressed];
            removeCardFromArray(flushSlotCard4, playerCards);

            cardPlacedAction();

            return;
          case 4:
            var playerCards = getPlayerCards();

            addCardToHand(flushSlotCard5, playerCards);
            flushSlotCard5 = playerCards[playercardPressed];
            removeCardFromArray(flushSlotCard5, playerCards);

            cardPlacedAction();

            return;
        }
        return;
      case 5: // 4 of a kind
        switch (placeholderPressed) {
          case 0: // slot 1

            var playerCards = getPlayerCards();

            addCardToHand(fourkSlotCard1, playerCards);
            fourkSlotCard1 = playerCards[playercardPressed];
            removeCardFromArray(fourkSlotCard1, playerCards);

            cardPlacedAction();

            return;
          case 1: // slot 2
            var playerCards = getPlayerCards();

            addCardToHand(fourkSlotCard2, playerCards);
            fourkSlotCard2 = playerCards[playercardPressed];
            removeCardFromArray(fourkSlotCard2, playerCards);

            cardPlacedAction();

            return;
          case 2: // slot 3
            var playerCards = getPlayerCards();

            addCardToHand(fourkSlotCard3, playerCards);
            fourkSlotCard3 = playerCards[playercardPressed];
            removeCardFromArray(fourkSlotCard3, playerCards);

            cardPlacedAction();

            return;
          case 3: // slot 4
            var playerCards = getPlayerCards();

            addCardToHand(fourkSlotCard4, playerCards);
            fourkSlotCard4 = playerCards[playercardPressed];
            removeCardFromArray(fourkSlotCard4, playerCards);

            cardPlacedAction();

            return;
        }
        return;
      case 6: // str flush hand
        switch (placeholderPressed) {
          case 0: // slot 1

            var playerCards = getPlayerCards();

            addCardToHand(strFlushSlotCard1, playerCards);
            strFlushSlotCard1 = playerCards[playercardPressed];
            removeCardFromArray(strFlushSlotCard1, playerCards);

            cardPlacedAction();

            return;
          case 1: // slot 2
            var playerCards = getPlayerCards();

            addCardToHand(strFlushSlotCard2, playerCards);
            strFlushSlotCard2 = playerCards[playercardPressed];
            removeCardFromArray(strFlushSlotCard2, playerCards);

            cardPlacedAction();

            return;
          case 2: // slot 3
            var playerCards = getPlayerCards();

            addCardToHand(strFlushSlotCard3, playerCards);
            strFlushSlotCard3 = playerCards[playercardPressed];
            removeCardFromArray(strFlushSlotCard3, playerCards);

            cardPlacedAction();

            return;
          case 3: // slot 4
            var playerCards = getPlayerCards();

            addCardToHand(strFlushSlotCard4, playerCards);
            strFlushSlotCard4 = playerCards[playercardPressed];
            removeCardFromArray(strFlushSlotCard4, playerCards);

            cardPlacedAction();

            return;
          case 4: // slot 5
            var playerCards = getPlayerCards();

            addCardToHand(strFlushSlotCard5, playerCards);
            strFlushSlotCard5 = playerCards[playercardPressed];
            removeCardFromArray(strFlushSlotCard5, playerCards);

            cardPlacedAction();

            return;
        }
        return;
    }
  }
}
