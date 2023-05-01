function removeFrom4kLists(card) {
    if (card == null) {
        return;
    }

    valueArr4k.remove(card.value);
    suitArr4k.remove(card.suit);
}

function addTo4kLists(card) {
    if (card == null) {
        return;
    }
    valueArr4k.add(card.value);
    suitArr4k.add(card.suit);
}

function findHCcard() {
    handPasses++;
    if (handPasses > 16) {
        return;
    }
    let playerCards = getPlayerCards();

    // replace card if possible
    if (hcSlotCard != null) {
        let acc = 0;
        for (let i = 0; i < playerCards.length; i++) {

            if (checkHandForNextStrFlushCard(playerCards[i], playerCards)) {
                continue;
            }
            if (checkHandForMatchingValues(playerCards[i], playerCards) > 1) {
                continue;
            }

            if (checkHandFor1cardStraight(playerCards[i], playerCards)) {
                continue;
            }

            if (checkHandFor1cardStraight(hcSlotCard, playerCards)) {
                removeFrom4kLists(hcSlotCard);
                addCardToHand(hcSlotCard, playerCards);
                hcSlotCard = playerCards[i];
                removeCardFromArray(hcSlotCard, playerCards);
                addTo4kLists(hcSlotCard);

                if (doLogPlacedCards === true) {
                    addLog("Player " + (playerTurn + 1) + ": Plays HC  " + printCard(hcSlotCard));
                }
                cardPlacedAction();

                return;
            }

            // check for slot card to be useful
            if (checkHandForMatchingValues(hcSlotCard, playerCards) > 0) {

                removeFrom4kLists(hcSlotCard);
                addCardToHand(hcSlotCard, playerCards);
                hcSlotCard = playerCards[i];
                removeCardFromArray(hcSlotCard, playerCards);
                addTo4kLists(hcSlotCard);

                if (doLogPlacedCards === true) {
                    addLog("Player " + (playerTurn + 1) + ": Plays HC  " + printCard(hcSlotCard));
                }
                cardPlacedAction();

                return;
            }
        }
    }


    let canReplaceCurrentHC = false;
    let sameValueCount = 0;
    let canStraight = false;
    let sameSuitCount = 0;
    let isTwoCardStrFlush = false;

    let possibleCards = [];

    let tempCard = null;
    for (let i = 0; i < playerCards.length; i++) {

        canReplaceCurrentHC = false;
        sameValueCount = 0;
        canStraight = false;
        isTwoCardStrFlush = false;

        tempCard = playerCards[i];

        // check for card to be >= to current placeholder
        canReplaceCurrentHC = checkHCisGreater(tempCard);

        if (canReplaceCurrentHC) {

            // check if card has duplicate face values
            sameValueCount = checkHandForMatchingValues(tempCard, playerCards);

            // will be one with it in hand, check next for straight
            if (sameValueCount === 1) {

                canStraight = checkHandFor3cardStraight(tempCard, playerCards);

                if (!canStraight) {

                    isTwoCardStrFlush = checkHandForNextStrFlushCard(tempCard, playerCards);

                    if (!isTwoCardStrFlush) {
                        possibleCards.push(tempCard);
                    }
                }
            }
        }
    }

    if (possibleCards.length > 0) {
        possibleCards = possibleCards.sort(function (a, b) {
            return a.value - b.value;
        });

        // add to main suit and value map
        removeFrom4kLists(hcSlotCard);
        addCardToHand(hcSlotCard, playerCards);
        hcSlotCard = possibleCards[0];
        removeCardFromArray(hcSlotCard, playerCards);
        addTo4kLists(hcSlotCard);

        if (doLogPlacedCards === true) {
            addLog("Player " + (playerTurn + 1) + ": Plays HC  " + printCard(hcSlotCard));
        }
        cardPlacedAction();
    }
}

function checkHandForNextStrFlushCard(card, cardArr) {
    for (let i = 0; i < cardArr.length; i++) {
        let possibleStrFlushCard = cardArr[i];
        if (card.suit === possibleStrFlushCard.suit) {
            if (card.value === possibleStrFlushCard.value + 1 || card.value === possibleStrFlushCard.value - 1 ||
                card.value === possibleStrFlushCard.value + 2 || card.value === possibleStrFlushCard.value - 2) {
                return true;
            }
        }
    }

    return false;
}
