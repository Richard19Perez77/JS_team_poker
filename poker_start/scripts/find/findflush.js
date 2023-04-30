function checkIsFlushPlayed() {
    if (flushSlotCard1 &&
        flushSlotCard2
        && flushSlotCard3
        && flushSlotCard4
        && flushSlotCard5) {
        if (flushSlotCard1.suit === flushSlotCard2.suit &&
            flushSlotCard1.suit === flushSlotCard3.suit &&
            flushSlotCard1.suit === flushSlotCard4.suit &&
            flushSlotCard1.suit === flushSlotCard5.suit) {
            return true;
        }
    }
    return false;
}

function findFlushCard() {
    let playerCards = getPlayerCards();
    let possibleCards = [];

    // check if flush is done, can use maps to help improve if possible
    let checkIsFlush = checkIsFlushPlayed();
    if (checkIsFlush) {

        // check for a card to be able to be traded
        for (let item = 0; item < playerCards.length - 1; item++) {
            if (playerCards[item] == null) {
                continue;
            }

            let tempCard = playerCards[item];
            if (tempCard.suit === flushSlotCard1.suit) {

                // check to be part of 4k
                let hasPair = false;
                for (let i = 0; i < playerCards.length - 1; i++) {
                    if (playerCards[i].value === tempCard.value && playerCards[i].suit !== tempCard.suit) {
                        hasPair = true;
                    }
                }

                // if value isn't on map and it hasn't started a pairing set
                if (!valueArr4k.contains(tempCard.value) && !hasPair) {

                    let sameValueCount1;
                    let sameValueCount2;
                    let sameValueCount3;
                    let sameValueCount4;
                    let tempCard = null;

                    // each slot can be used to check for matching cards
                    if (!valueArr4k.contains(flushSlotCard1.value)) {
                        sameValueCount1 = checkHandForMatchingValues(flushSlotCard1, playerCards);
                    }
                    if (!valueArr4k.contains(flushSlotCard2.value)) {
                        sameValueCount2 = checkHandForMatchingValues(flushSlotCard2, playerCards);
                    }
                    if (!valueArr4k.contains(flushSlotCard3.value)) {
                        sameValueCount3 = checkHandForMatchingValues(flushSlotCard3, playerCards);
                    }
                    if (!valueArr4k.contains(flushSlotCard4.value)) {
                        sameValueCount4 = checkHandForMatchingValues(flushSlotCard4, playerCards);
                    }

                    if (sameValueCount1 < sameValueCount2 && sameValueCount2 < sameValueCount3 &&  sameValueCount3 < sameValueCount4) {
                        tempCard = flushSlotCard4;
                    }
                    if (sameValueCount1 > sameValueCount2 && sameValueCount2 > sameValueCount3 &&  sameValueCount3 > sameValueCount4) {
                         tempCard = flushSlotCard1;
                    }
                    if (sameValueCount1 < sameValueCount2 && sameValueCount2 > sameValueCount3 &&  sameValueCount3 > sameValueCount4) {
                        tempCard = flushSlotCard2;
                    }
                    if (sameValueCount1 < sameValueCount2 && sameValueCount2 < sameValueCount3 &&  sameValueCount3 > sameValueCount4) {
                        tempCard = flushSlotCard3;
                    }
                }
            }
        }
    }

    // find possible cards
    for (let i = 0; i < playerCards.length; i++) {
        let card = playerCards[i];

        let partialArr = findStraightFlushCards(card, playerCards);
        if (partialArr != null && partialArr.length >= 3) {

            //validate play is valid for str flush
            let isValidStrFlushPlay = isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)
            if (isValidStrFlushPlay) {
                continue;
            }
        }

        // check for count and played value for 4k
        let sameValueCount = checkHandForMatchingValues(card, playerCards);
        if (sameValueCount >= 2) {
            let hasAValuePlayed = checkCardValueHasBeenPlayed(card);
            if (hasAValuePlayed) {
                continue;
            }
        }

        possibleCards.push(card);
    }

    let currFlushCount = 0;
    currFlushCount = countFlushCardsPlayed();

    switch (currFlushCount) {
        case 3:
            let found = find4thFlushCard(possibleCards);
            if (found) {
                organizeFlush();
                find5thFlushCard(possibleCards);
                return;
            }
            break;
        case 4:
            let fifthFound = find5thFlushCard(possibleCards);
            if (fifthFound) {
                return;
            }
            break;
    }

    let a = [];
    let b = [];
    let c = [];
    let d = [];

    for (let i = 0; i < possibleCards.length; i++) {
        let suit = possibleCards[i].suit;
        switch (suit) {
            case 0:
                a.push(possibleCards[i]);
                break;
            case 1:
                b.push(possibleCards[i]);
                break;
            case 2:
                c.push(possibleCards[i]);
                break;
            case 3:
                d.push(possibleCards[i]);
                break;
        }
    }

    // check for 5 card flush to play
    if (a.length === 5) {
        let hasBetterFlushScore = checkBetterFlush(a);
        if (hasBetterFlushScore) {
            placeFlush(a);
            return;
        }
    } else if (b.length === 5) {
        let hasBetterFlushScore = checkBetterFlush(b);
        if (hasBetterFlushScore) {
            placeFlush(b);
            return;
        }
    } else if (c.length === 5) {
        let hasBetterFlushScore = checkBetterFlush(c);
        if (hasBetterFlushScore) {
            placeFlush(c);
            return;
        }
    } else if (d.length === 5) {
        let hasBetterFlushScore = checkBetterFlush(d);
        if (hasBetterFlushScore) {
            placeFlush(d);
            return;
        }
    }

    // check for 4 card flush to play
    if (a.length === 4) {

        //place 4 cards if only 3 are played
        if (currFlushCount <= 3) {
            place4CardFlush(a);
            return;
        }
    } else if (b.length === 4) {

        //place 4 cards if only 3 are played
        if (currFlushCount <= 3) {
            place4CardFlush(b);
            return;
        }
    } else if (c.length === 4) {

        //place 4 cards if only 3 are played
        if (currFlushCount <= 3) {
            place4CardFlush(c);
            return;
        }
    } else if (d.length === 4) {

        //place 4 cards if only 3 are played
        if (currFlushCount <= 3) {
            place4CardFlush(d);
            return;
        }
    }

    // check for 3 card flush to play
    if (a.length === 3) {

        //place 3 cards if none are played
        if (currFlushCount === 0) {
            place3CardFlush(a);
        }
    } else if (b.length === 3) {

        //place 3 cards if none are played
        if (currFlushCount === 0) {
            place3CardFlush(b);
        }
    } else if (c.length === 3) {

        //place 3 cards if none are played
        if (currFlushCount === 0) {
            place3CardFlush(c);
        }
    } else if (d.length === 3) {

        //place 3 cards if none are played
        if (currFlushCount === 0) {
            place3CardFlush(d);
        }
    }
}

function place4CardFlush(flushArr) {
    let playerCards = getPlayerCards();

    //should only have to add three cards to hand
    removeFrom4kLists(flushSlotCard1);
    addCardToHand(flushSlotCard1, playerCards);
    flushSlotCard1 = flushArr[0];
    removeCardFromArray(flushSlotCard1, playerCards);
    addTo4kLists(flushSlotCard1);

    removeFrom4kLists(flushSlotCard2);
    addCardToHand(flushSlotCard2, playerCards);
    flushSlotCard2 = flushArr[1];
    removeCardFromArray(flushSlotCard2, playerCards);
    addTo4kLists(flushSlotCard2);

    removeFrom4kLists(flushSlotCard3);
    addCardToHand(flushSlotCard3, playerCards);
    flushSlotCard3 = flushArr[2];
    removeCardFromArray(flushSlotCard3, playerCards);
    addTo4kLists(flushSlotCard3);

    removeFrom4kLists(flushSlotCard4);
    addCardToHand(flushSlotCard4, playerCards);
    flushSlotCard4 = flushArr[3];
    removeCardFromArray(flushSlotCard4, playerCards);
    addTo4kLists(flushSlotCard4);

    if (doLogPlacedCards === true) {
        addLog("Player " + (playerTurn + 1) + ": Plays 4 card flush " + printCard(flushSlotCard1) + printCard(flushSlotCard2) + printCard(flushSlotCard3) + printCard(flushSlotCard4) + printCard(flushSlotCard5));
    }
    cardPlacedAction();
}

function place3CardFlush(flushArr) {
    let playerCards = getPlayerCards();

    removeFrom4kLists(flushSlotCard1);
    addCardToHand(flushSlotCard1, playerCards);
    flushSlotCard1 = flushArr[0];
    removeCardFromArray(flushSlotCard1, playerCards);
    addTo4kLists(flushSlotCard1);

    removeFrom4kLists(flushSlotCard2);
    addCardToHand(flushSlotCard2, playerCards);
    flushSlotCard2 = flushArr[1];
    removeCardFromArray(flushSlotCard2, playerCards);
    addTo4kLists(flushSlotCard2);

    removeFrom4kLists(flushSlotCard3);
    addCardToHand(flushSlotCard3, playerCards);
    flushSlotCard3 = flushArr[2];
    removeCardFromArray(flushSlotCard3, playerCards);
    addTo4kLists(flushSlotCard3);

    if (doLogPlacedCards === true) {
        addLog("Player " + (playerTurn + 1) + ": Plays 3 card flush " + printCard(flushSlotCard1) + printCard(flushSlotCard2) + printCard(flushSlotCard3) + printCard(flushSlotCard4) + printCard(flushSlotCard5));
    }
    cardPlacedAction();
}

function placeFlush(cardArr) {
    let playerCards = getPlayerCards();

    //addLog("Flush Played " + printCardArr(cardArr));
    removeFrom4kLists(flushSlotCard1);
    addCardToHand(flushSlotCard1, playerCards);
    flushSlotCard1 = cardArr[0];
    removeCardFromArray(flushSlotCard1, playerCards);
    addTo4kLists(flushSlotCard1);

    removeFrom4kLists(flushSlotCard2);
    addCardToHand(flushSlotCard2, playerCards);
    flushSlotCard2 = cardArr[1];
    removeCardFromArray(flushSlotCard2, playerCards);
    addTo4kLists(flushSlotCard2);

    removeFrom4kLists(flushSlotCard3);
    addCardToHand(flushSlotCard3, playerCards);
    flushSlotCard3 = cardArr[2];
    removeCardFromArray(flushSlotCard3, playerCards);
    addTo4kLists(flushSlotCard3);

    removeFrom4kLists(flushSlotCard4);
    addCardToHand(flushSlotCard4, playerCards);
    flushSlotCard4 = cardArr[3];
    removeCardFromArray(flushSlotCard4, playerCards);
    addTo4kLists(flushSlotCard4);

    removeFrom4kLists(flushSlotCard5);
    addCardToHand(flushSlotCard5, playerCards);
    flushSlotCard5 = cardArr[4];
    removeCardFromArray(flushSlotCard5, playerCards);
    addTo4kLists(flushSlotCard5);

    if (doLogPlacedCards === true) {
        addLog("Player " + (playerTurn + 1) + ": Plays 5 card flush " + printCard(flushSlotCard1) + printCard(flushSlotCard2) + printCard(flushSlotCard3) + printCard(flushSlotCard4) + printCard(flushSlotCard5));
    }
    cardPlacedAction();
}

function countFlushCardsPlayed() {
    let acc = 0;

    if (flushSlotCard1 != null) {
        acc++;
    }

    if (flushSlotCard2 != null) {
        acc++;
    }

    if (flushSlotCard3 != null) {
        acc++;
    }

    if (flushSlotCard4 != null) {
        acc++;
    }

    if (flushSlotCard5 != null) {
        acc++;
    }

    return acc;
}

function find4thFlushCard(cardArr) {
    //addLog("find4thFlushCard() ");
    let suit = -1;
    if (flushSlotCard1.suit === flushSlotCard2.suit &&
        flushSlotCard2.suit === flushSlotCard3.suit) {

        // store the suit and gather player cards with same suit
        suit = flushSlotCard1.suit;
        let possibleCards = [];
        for (let i = 0; i < cardArr.length; i++) {
            if (cardArr[i].suit === suit) {
                possibleCards.push(cardArr[i]);
            }
        }

        // found fourth card, play it
        if (possibleCards.length > 0) {
            let fourthCard = possibleCards[0];

            removeFrom4kLists(flushSlotCard4);
            addCardToHand(flushSlotCard4, getPlayerCards());
            flushSlotCard4 = fourthCard;
            removeCardFromArray(fourthCard, getPlayerCards());
            addTo4kLists(flushSlotCard4);

            //remove from possible since we are re using it
            removeCardFromArray(fourthCard, cardArr);

            if (doLogPlacedCards === true) {
                addLog("Player " + (playerTurn + 1) + ": Plays 4th flush card" + printCard(flushSlotCard1) + printCard(flushSlotCard2) + printCard(flushSlotCard3) + printCard(flushSlotCard4) + printCard(flushSlotCard5));
            }
            cardPlacedAction();

            return true;
        }
    }

    return false;
}

function find5thFlushCard(cardArr) {
    //addLog("find5thFlushCard() ");
    let suit = -1;
    if (flushSlotCard1.suit === flushSlotCard2.suit &&
        flushSlotCard2.suit === flushSlotCard3.suit &&
        flushSlotCard3.suit === flushSlotCard4.suit) {

        // store the suit and gather player cards with same suit
        suit = flushSlotCard1.suit;
        let possibleCards = [];
        for (let i = 0; i < cardArr.length; i++) {
            if (cardArr[i].suit === suit) {
                possibleCards.push(cardArr[i]);
            }
        }

        // first item is usable
        if (possibleCards.length > 0) {

            let tempCard = possibleCards[0];
            removeFrom4kLists(tempCard);
            addCardToHand(flushSlotCard5, getPlayerCards());
            flushSlotCard5 = tempCard;
            removeCardFromArray(tempCard, getPlayerCards());
            addTo4kLists(tempCard);

            if (doLogPlacedCards === true) {
                addLog("Player " + (playerTurn + 1) + ": Plays 5th flush card" + printCard(flushSlotCard1) + printCard(flushSlotCard2) + printCard(flushSlotCard3) + printCard(flushSlotCard4) + printCard(flushSlotCard5));
            }
            cardPlacedAction();
            return true;
        }
    }
    return false;
}
