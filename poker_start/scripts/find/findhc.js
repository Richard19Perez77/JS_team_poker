function checkHCisGreater(card) {
    if (hcSlotCard == null) {
        if (doLogCardDetails) {
            addLog("Player " + (playerTurn + 1) + ": No HC card played");
        }

        return true;
    }

    if (card.value > hcSlotCard.value) {
        if (doLogCardDetails) {
            addLog("Player " + (playerTurn + 1) + ": " + printCard(card) + " > " + printCard(hcSlotCard));
        }

        return true;
    }

    if (doLogCardDetails) {
        addLog("Player " + (playerTurn + 1) + ": " + printCard(card) + " can not replace " + printCard(hcSlotCard));
    }
    return false;
}

function findHCcard() {
    // stop loop for optimizing cards
    handPasses++;
    if (handPasses > 15) {
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

    let sameValueCount = 0;
    let canStraight = false;
    let isTwoCardStrFlush = false;

    let possibleCards = [];
    let tempCard = null;

    for (let i = 0; i < playerCards.length; i++) {

        sameValueCount = 0;
        canStraight = false;
        isTwoCardStrFlush = false;
        tempCard = playerCards[i];

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
