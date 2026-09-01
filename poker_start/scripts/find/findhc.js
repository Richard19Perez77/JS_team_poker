// Used to check that a given card is a higher card than one played, returns true if there is nocard played or the card is higher in value
function checkHCisGreater(card) {
    if (hcSlotCard == null) {
        if (doLogCardDetails) addLog("Player " + (playerTurn + 1) + ": No HC card played");

        return true;
    }

    if (card.value > hcSlotCard.value) {
        if (doLogCardDetails) addLog("Player " + (playerTurn + 1) + ": " + printCard(card) + " > " + printCard(hcSlotCard));

        return true;
    }

    if (doLogCardDetails) addLog("Player " + (playerTurn + 1) + ": " + printCard(card) + " can not replace " + printCard(hcSlotCard));

    return false;
}

function isParkableHighCard(card, hand) {
    if (checkHandForMatchingValues(card, hand) !== 1) {
        return false;
    }
    if (checkHandFor3cardStraight(card, hand)) {
        return false;
    }
    if (checkHandForNextStrFlushCard(card, hand)) {
        return false;
    }
    if (checkCardFlushCount(card, hand) >= 4) {
        return false;
    }
    return true;
}

function isHighCardSlotUseful(hand) {
    if (hcSlotCard == null) {
        return false;
    }
    return checkHandFor1cardStraight(hcSlotCard, hand) ||
        checkHandForMatchingValues(hcSlotCard, hand) > 0;
}

function parkHighCard(card, playerCards) {
    removeFrom4kLists(hcSlotCard);
    addCardToHand(hcSlotCard, playerCards);
    hcSlotCard = card;
    removeCardFromArray(hcSlotCard, playerCards);
    addTo4kLists(hcSlotCard);

    if (doLogPlacedCards === true) {
        addLog("Player " + (playerTurn + 1) + ": Plays HC  " + printCard(hcSlotCard));
    }

    cardPlacedAction();
}

function lowestParkableHighCard(playerCards) {
    let possibleCards = [];
    for (let i = 0; i < playerCards.length; i++) {
        if (isParkableHighCard(playerCards[i], playerCards)) {
            possibleCards.push(playerCards[i]);
        }
    }
    if (possibleCards.length === 0) {
        return null;
    }
    possibleCards = possibleCards.sort(function (a, b) {
        return a.value - b.value;
    });
    return possibleCards[0];
}

// Finding a high card means to attempt to use the placed card or place a valid high card that has a good value playing it here
function findHCcard() {
    // stop loop for optimizing cards
    handPasses++;
    if (handPasses > 15) {
        return;
    }

    let playerCards = getPlayerCards();

    // if the slot card is useful in this hand, pull it back and park the lowest leftover
    if (isHighCardSlotUseful(playerCards)) {
        let leftover = lowestParkableHighCard(playerCards);
        if (leftover != null) {
            parkHighCard(leftover, playerCards);
            return;
        }
    }

    let leftover = lowestParkableHighCard(playerCards);
    if (leftover != null) {
        parkHighCard(leftover, playerCards);
    }
}
