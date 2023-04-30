function removeFrom4kSFLists(card) {
    if (card !== null) {
        valueArr4k.remove(card.value);
        suitArr4k.remove(card.suit);
        valueArrSF.remove(card.value);
        suitArrSF.remove(card.suit);
    }
}

function addTo4kSFLists(card) {
    valueArr4k.add(card.value);
    suitArr4k.add(card.suit);
    valueArrSF.add(card.value);
    suitArrSF.add(card.suit);
}

function findHCcard() {
    let playerCards = getPlayerCards();

    let canReplaceCurrentHC = false;
    let sameValueCount = 0;
    let canStraight = false;
    let sameSuitCount = 0;
    let isTwoCardStrFlush = false;

    let possibleCards = [];

    let tempCard = null;
    let sameFlushCount;
    for (let i = 0; i < playerCards.length; i++) {

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

            if (sameValueCount === 1) {

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
        possibleCards = possibleCards.sort(function (a, b) {
            return a.value - b.value;
        });

        // add to main suit and value map
        removeFrom4kSFLists(hcSlotCard);

        addCardToHand(hcSlotCard, playerCards);
        hcSlotCard = possibleCards[0];
        removeCardFromArray(hcSlotCard, playerCards);

        addTo4kSFLists(hcSlotCard);

        if (doLogPlacedCards === true) {
            addLog("Player " + (playerTurn + 1) + ": Plays HC  " + printCard(hcSlotCard));
        }
        cardPlacedAction();
    }
}

function checkHandForNextStrFlushCard(card, cardArr) {
    for (let i = 0; i < cardArr.length; i++) {
        if (card.value !== 0 && card.value !== 11) {
            let possibleStrFlushCard = cardArr[i];
            if (card.suit === possibleStrFlushCard.suit) {
                if (card.value === possibleStrFlushCard.value + 1 || card.value === possibleStrFlushCard.value - 1) {
                    return true;
                }
                if (card.value === possibleStrFlushCard.value + 2 || card.value === possibleStrFlushCard.value - 2) {
                    return true;
                }
            }
        }
    }

    return false;
}
