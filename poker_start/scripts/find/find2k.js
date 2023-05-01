function checkHandFor5cardStraight(card, cards) {
    // check for valid numbers

    let hasP1 = false;
    let hasP2 = false;
    let hasP3 = false;
    let hasP4 = false;
    let hasM1 = false;
    let hasM2 = false;
    let hasM3 = false;
    let hasM4 = false;

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].value === card.value + 1) {
            hasP1 = true;
        }
        if (cards[i].value === card.value + 2) {
            hasP2 = true;
        }
        if (cards[i].value === card.value + 3) {
            hasP3 = true;
        }
        if (cards[i].value === card.value + 4) {
            hasP4 = true;
        }
        if (cards[i].value === card.value - 1) {
            hasM1 = true;
        }
        if (cards[i].value === card.value - 2) {
            hasM2 = true;
        }
        if (cards[i].value === card.value - 3) {
            hasM3 = true;
        }
        if (cards[i].value === card.value - 4) {
            hasM4 = true;
        }
    }

    if (hasP1 && hasP2 && hasP3 && hasP4){
        return true
    }

    if (hasM1 && hasP1 && hasP2 && hasP3){
        return true
    }

    if (hasM2 && hasM1 && hasP1 && hasP2){
        return true
    }

    if (hasM3 && hasM2 && hasM1 && hasP1){
        return true
    }

    return hasM4 && hasM3 && hasM2 && hasM1;
}

function find2Kcard() {
    let playerCards = getPlayerCards();

    // find pair to play that is not usable in a better hand
    let canReplaceCurrent2k = true;
    let canStraight = false;
    let sameValueCount = 0;
    let sameFlushCount = 0;

    let possibleCards = [];
    let tempCard = null;

    for (let i = 0; i < playerCards.length; i++) {
        tempCard = playerCards[i];

        canReplaceCurrent2k = true;
        canStraight = false;
        sameValueCount = 0;
        sameFlushCount = 0;

        // parse out cards useful in better hands
        canReplaceCurrent2k = checkCardCanReplaceCurrent2kPlayed(tempCard);
        if (canReplaceCurrent2k === false) {
            continue;
        }

        canStraight = checkHandFor5cardStraight(tempCard, playerCards);
        if (canStraight) {
            continue;
        }

        // canStraight = checkHandFor3cardStraight(tempCard, playerCards);
        // if (canStraight) {
        //     continue;
        // }

        // sameFlushCount = checkCardFlushCount(tempCard, playerCards);
        // if (sameFlushCount > 3) {
        //     continue;
        // }

        sameValueCount = checkHandForMatchingValues(tempCard, playerCards);
        if (sameValueCount > 2) {
            continue;
        }

        // validate play is valid for str flush
        let partialArr = findStraightFlushCards(tempCard, playerCards);
        if (partialArr != null && partialArr.length >= 3) {
            let isValidStrFlushPlay = isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)
            if (isValidStrFlushPlay) {
                continue;
            }
        }

        possibleCards.push(tempCard);
    }

    if (possibleCards.length === 0) {
        return;
    }

    possibleCards = possibleCards.sort(function (a, b) {
        return a.value - b.value;
    });

    // remove cards with no valid pair
    let removeCards = [];
    for (let i = 0; i < possibleCards.length; i++) {
        let temp = possibleCards[i];
        sameValueCount = checkHandForMatchingValues(temp, possibleCards);
        if (sameValueCount === 1) {
            removeCards.push(temp);
        }
    }
    for (let i = 0; i < removeCards.length; i++) {
        let removeCard = removeCards[i];
        removeCardFromArray(removeCard, possibleCards);
    }

    if (possibleCards.length >= 2) {

        //play the lowest pair
        let cardA = possibleCards[0];
        let cardB = possibleCards[1];

        removeFrom4kLists(twoPSlotCard1);
        addCardToHand(twoPSlotCard1, getPlayerCards());
        twoPSlotCard1 = cardA;
        removeCardFromArray(twoPSlotCard1, playerCards);
        addTo4kLists(twoPSlotCard1);

        removeFrom4kLists(twoPSlotCard2);
        addCardToHand(twoPSlotCard2, getPlayerCards());
        twoPSlotCard2 = cardB;
        removeCardFromArray(twoPSlotCard2, playerCards);
        addTo4kLists(twoPSlotCard2);

        if (doLogPlacedCards === true) {
            addLog("Player " + (playerTurn + 1) + ": Plays 2K " + printCard(twoPSlotCard1) + printCard(twoPSlotCard2));
        }
        cardPlacedAction();
    }
}
