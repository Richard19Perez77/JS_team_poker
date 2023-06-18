function findStraightCard() {
    let playerCards = getPlayerCards();

    let cardsPlayed = getStraightCardsPlayed();

    let possibleCards = [];
    let partialArr = [];
    let sameValueCount;

    for (let i = 0; i < playerCards.length; i++) {
        let card = playerCards[i];

        partialArr = findStraightFlushCards(card, playerCards);
        if (partialArr != null && partialArr.length >= 3) {

            //validate play is valid for str flush
            let isValidStrFlushPlay = isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)
            if (isValidStrFlushPlay) {
                continue;
            }
        }

        sameValueCount = checkHandForMatchingValues(card, playerCards);
        if (sameValueCount >= 3) {
            continue;
        }

        possibleCards.push(card);
    }

    // try to play a 5 card straight in hand
    let found = false;
    if (possibleCards.length >= 5) {
        found = fiveCardCheck(cardsPlayed, possibleCards);
        if (found) {
            return;
        }
    }

    // with 3 cards played try to find the 4th and 5th cards
    if (cardsPlayed === 3 && possibleCards.length >= 1) {
        found = findFourthCard(possibleCards);
        if (found) {
            found = findFifthCard(possibleCards);
            if (found) {
                return;
            }
        }
    }

    cardsPlayed = getStraightCardsPlayed();

    // with four cards played try to find the missing card
    if (cardsPlayed === 4 && possibleCards.length >= 1) {
        found = findFifthCard(possibleCards);
        if (found) {
            return;
        }
    }

    cardsPlayed = getStraightCardsPlayed();

    // try to play a 4 card straight
    if (cardsPlayed <= 4 && possibleCards.length >= 4) {
        found = fourCardCheck(cardsPlayed, possibleCards);
    }

    cardsPlayed = getStraightCardsPlayed();

    // try to play a 3 card straight
    if (cardsPlayed <= 3 && possibleCards.length >= 3) {
        threeCardCheck(cardsPlayed, possibleCards);
    }

    performLowCardSwitch();
    organizePlayedCards();
}

function findFourthCard(cardArr) {
    if (straightSlotCard1.value === straightSlotCard2.value - 1 &&
        straightSlotCard2.value === straightSlotCard3.value - 1) {

        let lowValue = straightSlotCard3.value + 1;
        let highValue = straightSlotCard1.value - 1;

        for (let i = 0; i < cardArr.length; i++) {
            let card = cardArr[i];
            if (card.value === lowValue ||
                card.value === highValue) {

                straightSlotCard4 = card;
                removeCardFromArray(card, getPlayerCards());
                removeCardFromArray(card, cardArr);
                addTo4kLists(straightSlotCard4);

                if (doLogPlacedCards === true) {
                    addLog("Player " + (playerTurn + 1) + ": Plays 4th card in straight" + printCard(card));
                }
                cardPlacedAction();

                return true;
            }
        }
    }

    return false;
}

function findFifthCard(validCards) {
    if (straightSlotCard1.value === straightSlotCard2.value - 1 &&
        straightSlotCard2.value === straightSlotCard3.value - 1 &&
        straightSlotCard3.value === straightSlotCard4.value - 1) {

        let lowValue = straightSlotCard4.value + 1;
        let highValue = straightSlotCard1.value - 1;

        for (let i = 0; i < validCards.length; i++) {
            let card = validCards[i];
            if (card.value === lowValue ||
                card.value === highValue) {

                straightSlotCard5 = card;
                removeCardFromArray(card, getPlayerCards());
                removeCardFromArray(card, validCards);
                addTo4kLists(straightSlotCard5);

                if (doLogPlacedCards === true) {
                    addLog("Player " + (playerTurn + 1) + ": Plays 5th card in straight" + printCard(card));
                }

                cardPlacedAction();

                return true;
            }
        }
    }

    return false;
}

function threeCardCheck(cardsPlayed, cardArr) {
    //addLog("threeCardCheck(cardsPlayed, cardArr)" + printCardArr(cardArr));

    let straightArr = findThreeCardStraight(cardsPlayed, cardArr);
    if (straightArr.length === 3) {
        let playerCards = getPlayerCards();

        removeFrom4kLists(straightSlotCard1);
        addCardToHand(straightSlotCard1, playerCards);
        straightSlotCard1 = straightArr[0];
        removeCardFromArray(straightSlotCard1, playerCards);
        removeCardFromArray(straightSlotCard1, cardArr);
        addTo4kLists(straightSlotCard1);

        removeFrom4kLists(straightSlotCard2);
        addCardToHand(straightSlotCard2, playerCards);
        straightSlotCard2 = straightArr[1];
        removeCardFromArray(straightSlotCard2, playerCards);
        removeCardFromArray(straightSlotCard2, cardArr);
        addTo4kLists(straightSlotCard2);

        removeFrom4kLists(straightSlotCard3);
        addCardToHand(straightSlotCard3, playerCards);
        straightSlotCard3 = straightArr[2];
        removeCardFromArray(straightSlotCard3, playerCards);
        removeCardFromArray(straightSlotCard3, cardArr);
        addTo4kLists(straightSlotCard3);

        if (doLogPlacedCards === true) {
            addLog("Player " + (playerTurn + 1) + ": Plays 3 card straight " + printCardArr(straightArr));
        }
        cardPlacedAction();
    }
}

function findThreeCardStraight(cardsPlayed, cardArr) {
    //addLog("findThreeCardStraight(cardsPlayed, cardArr)" + printCardArr(cardArr));

    let strArr;
    for (let i = 0; i < cardArr.length; i++) {
        let card1 = cardArr[i];
        //addLog(printCard(card1));
        for (let j = 0; j < cardArr.length; j++) {
            let card2 = cardArr[j];
            if (card1.value === card2.value - 1) {
                //addLog(printCard(card1) + printCard(card2));
                for (let k = 0; k < cardArr.length; k++) {
                    let card3 = cardArr[k];
                    if (card1.value === card3.value - 2) {
                        strArr = [];
                        strArr.push(card1);
                        strArr.push(card2);
                        strArr.push(card3);
                        if (cardsPlayed < 3 || (cardsPlayed === 3 && checkBetterStraight(strArr))) {
                            //addLog(printCardArr(strArr));
                            return strArr;
                        }
                    }
                }
            }
        }
    }

    return [];
}

function getStraightCardsPlayed() {
    let acc = 0;
    if (straightSlotCard1 != null) {
        acc++;
    }
    if (straightSlotCard2 != null) {
        acc++;
    }
    if (straightSlotCard3 != null) {
        acc++;
    }
    if (straightSlotCard4 != null) {
        acc++;
    }
    if (straightSlotCard5 != null) {
        acc++;
    }
    return acc;
}

function fourCardCheck(cardsPlayed, cardArr) {
    //addLog("fourCardCheck(cardsPlayed, cardArr)" + printCardArr(cardArr));

    cardArr = cardArr.sort(function (a, b) {
        return a.value - b.value;
    });

    let straightArray = findFourCardStraight(cardsPlayed, cardArr);

    if (straightArray.length === 4) {

        removeFrom4kLists(straightSlotCard1);
        addCardToHand(straightSlotCard1, getPlayerCards());
        straightSlotCard1 = straightArray[0];
        removeCardFromArray(straightSlotCard1, getPlayerCards());
        removeCardFromArray(straightSlotCard1, cardArr);
        addTo4kLists(straightSlotCard1);

        removeFrom4kLists(straightSlotCard2);
        addCardToHand(straightSlotCard2, getPlayerCards());
        straightSlotCard2 = straightArray[1];
        removeCardFromArray(straightSlotCard2, getPlayerCards());
        removeCardFromArray(straightSlotCard2, cardArr);
        addTo4kLists(straightSlotCard2);

        removeFrom4kLists(straightSlotCard3);
        addCardToHand(straightSlotCard3, getPlayerCards());
        straightSlotCard3 = straightArray[2];
        removeCardFromArray(straightSlotCard3, getPlayerCards());
        removeCardFromArray(straightSlotCard3, cardArr);
        addTo4kLists(straightSlotCard3);

        removeFrom4kLists(straightSlotCard4);
        addCardToHand(straightSlotCard4, getPlayerCards());
        straightSlotCard4 = straightArray[3];
        removeCardFromArray(straightSlotCard4, getPlayerCards());
        removeCardFromArray(straightSlotCard4, cardArr);
        addTo4kLists(straightSlotCard4);

        if (doLogPlacedCards === true) {
            addLog("Player " + (playerTurn + 1) + ": Plays four card straight " + printCardArr(straightArray));
        }
        cardPlacedAction();

        return true;
    }

    return false;
}

function fiveCardCheck(cardsPlayed, cardArr) {
    //addLog("fiveCardCheck(cardArr)" + printCardArr(cardArr));

    let straightArray = findFiveCardStraight(cardArr);
    //addLog("straight array found=" + printCardArr(straightArray));

    if (straightArray.length === 5 && (cardsPlayed < 5 || checkBetterStraight(straightArray))) {

        let playerCards = getPlayerCards();

        removeFrom4kLists(straightSlotCard1);
        addCardToHand(straightSlotCard1, playerCards);
        straightSlotCard1 = straightArray[0];
        removeCardFromArray(straightSlotCard1, playerCards);
        removeCardFromArray(straightSlotCard1, cardArr);
        addTo4kLists(straightSlotCard1);

        removeFrom4kLists(straightSlotCard2);
        addCardToHand(straightSlotCard2, playerCards);
        straightSlotCard2 = straightArray[1];
        removeCardFromArray(straightSlotCard2, playerCards);
        removeCardFromArray(straightSlotCard2, cardArr);
        addTo4kLists(straightSlotCard2);

        removeFrom4kLists(straightSlotCard3);
        addCardToHand(straightSlotCard3, playerCards);
        straightSlotCard3 = straightArray[2];
        removeCardFromArray(straightSlotCard3, playerCards);
        removeCardFromArray(straightSlotCard3, cardArr);
        addTo4kLists(straightSlotCard3);

        removeFrom4kLists(straightSlotCard4);
        addCardToHand(straightSlotCard4, playerCards);
        straightSlotCard4 = straightArray[3];
        removeCardFromArray(straightSlotCard4, playerCards);
        removeCardFromArray(straightSlotCard4, cardArr);
        addTo4kLists(straightSlotCard4);

        removeFrom4kLists(straightSlotCard5);
        addCardToHand(straightSlotCard5, playerCards);
        straightSlotCard5 = straightArray[4];
        removeCardFromArray(straightSlotCard5, playerCards);
        removeCardFromArray(straightSlotCard5, cardArr);
        addTo4kLists(straightSlotCard5);

        if (doLogPlacedCards === true) {
            addLog("Player " + (playerTurn + 1) + ": Plays five card straight " + printCardArr(straightArray));
        }
        cardPlacedAction();

        return true;
    }

    return false;
}

function checkBetterStraight(cardArr) {
    for (let i = 0; i < cardArr.length; i++) {
        switch (i) {
            case 0:
                if (cardArr[0].value <= straightSlotCard1.value) {
                    //addLog("Invalid Straight Hand " + printCardArr(cardArr));
                    return false;
                }
                break;
            case 1:
                if (cardArr[1].value <= straightSlotCard2.value) {
                    //addLog("Invalid Straight Hand " + printCardArr(cardArr));
                    return false;
                }
                break;
            case 2:
                if (cardArr[2].value <= straightSlotCard3.value) {
                    //addLog("Invalid Straight Hand " + printCardArr(cardArr));
                    return false;
                }
                break;
            case 3:
                if (cardArr[3].value <= straightSlotCard4.value) {
                    //addLog("Invalid Straight Hand " + printCardArr(cardArr));
                    return false;
                }
                break;
            case 4:
                if (cardArr[4].value <= straightSlotCard5.value) {
                    //addLog("Invalid Straight Hand " + printCardArr(cardArr));
                    return false;
                }
                break;
        }
    }

    return true;
}

function findFiveCardStraight(cardArr) {
    //addLog("findFiveCardStraight(cardArr))" + printCardArr(cardArr));
    let strArray = [];
    for (let i = 0; i < cardArr.length; i++) {

        strArray = [];
        let card1 = cardArr[i];
        for (let j = i + 1; j < cardArr.length; j++) {

            let card2 = cardArr[j];
            if (card1.value === card2.value - 1) {
                //addLog(printCard(card1) + printCard(card2));
                for (let k = j + 1; k < cardArr.length; k++) {

                    let card3 = cardArr[k];
                    if (card1.value === card3.value - 2) {
                        //addLog(printCard(card1) + printCard(card2) + printCard(card3));
                        for (let l = k + 1; l < cardArr.length; l++) {

                            let card4 = cardArr[l];
                            if (card1.value === card4.value - 3) {
                                //addLog(printCard(card1) + printCard(card2) + printCard(card3) + printCard(card4));
                                for (let m = l + 1; m < cardArr.length; m++) {

                                    let card5 = cardArr[m];
                                    if (card1.value === card5.value - 4) {
                                        //addLog(printCard(card1) + printCard(card2) + printCard(card3) + printCard(card4) + printCard(card5));
                                        strArray.push(card1);
                                        strArray.push(card2);
                                        strArray.push(card3);
                                        strArray.push(card4);
                                        strArray.push(card5);
                                        return strArray;
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

function findFourCardStraight(cardsPlayed, cardArr) {
    //addLog("findFourCardStraight(cardArr))" + printCardArr(cardArr));
    let strArray = [];
    for (let i = 0; i < cardArr.length; i++) {

        strArray = [];
        let card1 = cardArr[i];
        for (let j = i + 1; j < cardArr.length; j++) {

            let card2 = cardArr[j];
            if (card1.value === card2.value - 1) {
                //addLog(printCard(card1) + printCard(card2));
                for (let k = j + 1; k < cardArr.length; k++) {

                    let card3 = cardArr[k];
                    if (card1.value === card3.value - 2) {
                        //addLog(printCard(card1) + printCard(card2) + printCard(card3));
                        for (let l = k + 1; l < cardArr.length; l++) {

                            let card4 = cardArr[l];
                            if (card1.value === card4.value - 3) {

                                strArray.push(card1);
                                strArray.push(card2);
                                strArray.push(card3);
                                strArray.push(card4);
                                if (cardsPlayed < 4 || (cardsPlayed === 4 && checkBetterStraight(strArray))) {
                                    //addLog(printCardArr(strArray));
                                    return strArray;
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

function performLowCardSwitch() {
    let cardsPlayed = getStraightCardsPlayed();
    if (cardsPlayed !== 5) {
        return;
    }

    // validate if hand is a straight
    if (straightSlotCard1.value !== straightSlotCard2.value - 1 ||
        straightSlotCard2.value !== straightSlotCard3.value - 1 ||
        straightSlotCard3.value !== straightSlotCard4.value - 1 ||
        straightSlotCard4.value !== straightSlotCard5.value - 1) {
        return;
    }

    //check player hand has the next high card
    let nextValue = straightSlotCard5.value;
    nextValue++;

    // no higher than ace
    if (nextValue === 14) {
        return;
    }

    let playerCards = getPlayerCards();

    //check hand for all instances of next card, only one is needed
    let nextCardArr = getMatchingCardsFromArr(nextValue, playerCards);
    if (nextCardArr === null) {
        return;
    }

    let switchCard;

    // check each card that could finish the straight
    for (let i = 0; i < nextCardArr.length; i++) {
        //addLog("check for switch card");

        //compare it with the possible switch card
        let highCard = nextCardArr[i];
        let tempArr = [];
        tempArr = copyArrayToNewArray(playerCards);
        //addLog("tempArr=" + printCardArr(tempArr));
        removeCardFromArray(highCard, tempArr);
        //addLog("tempArr=" + printCardArr(tempArr));

        let currFlushCount = checkCardFlushCount(highCard, tempArr);
        let newFlushCount = checkCardFlushCount(straightSlotCard1, tempArr);
        //addLog("currFlushCount > newFlushCount = " + currFlushCount + ">" + newFlushCount);
        if (currFlushCount > newFlushCount) {
            continue;
        }

        let currMatchCount = checkHandForMatchingValues(highCard, tempArr);
        let newMatchCount = checkHandForMatchingValues(straightSlotCard1, tempArr);
        //addLog("currMatchCount > newMatchCount = " + currMatchCount + ">" + newMatchCount);
        if (currMatchCount > newMatchCount) {
            continue;
        }

        let currStrFlushCards = findStraightFlushCards(highCard, tempArr);
        let newStrFlushCards = findStraightFlushCards(straightSlotCard1, tempArr);
        //addLog("currStrFlushCards.length > newStrFlushCards.length = " + currStrFlushCards.length + ">" + newStrFlushCards.length);
        if (currStrFlushCards.length > newStrFlushCards.length) {
            continue;
        }

        //addLog("Player " + (playerTurn + 1) + " set switch card" + printCard(highCard));
        switchCard = highCard;
    }

    if (switchCard != null) {
        removeFrom4kLists(straightSlotCard1);
        addCardToHand(straightSlotCard1, playerCards);
        straightSlotCard1 = switchCard;
        removeCardFromArray(switchCard, playerCards);
        addTo4kLists(straightSlotCard1);
    }
}

function copyArrayToNewArray(cardArr) {
    let newArr = [];
    for (let i = 0; i < cardArr.length; i++) {
        let card = cardArr[i];
        let newCard = new Card(card.suit, card.value, null);
        newArr.push(newCard);
    }
    return newArr;
}

function getMatchingCardsFromArr(nextValue, cardArr) {
    let resArr = [];
    for (let i = 0; i < cardArr.length; i++) {
        let card = cardArr[i];
        if (card.value === nextValue) {
            resArr.push(card);
        }
    }

    return resArr;
}
