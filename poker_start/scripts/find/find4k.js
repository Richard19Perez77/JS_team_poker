function find4KCard() {
    let playerCards = getPlayerCards();

    // how many slots are left in the 4k section to play
    let cardsLeftToPlay = count4kCardsLeftToPlay();

    // add a 3rd card to 2 placed cards
    if (cardsLeftToPlay === 2) {

        let value = fourkSlotCard1.value;
        if (value === fourkSlotCard2.value) {
            for (let i = 0; i < playerCards.length; i++) {
                if (playerCards[i].value === value) {

                    // accumulate array of sf cards from missing card
                    let partialArr = findStraightFlushCards(playerCards[i], playerCards);

                    // check partial sf can be finished
                    if (partialArr != null && partialArr.length >= 3 && isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)) {
                        continue;
                    }

                    removeFrom4kLists(fourkSlotCard3);
                    addCardToHand(fourkSlotCard3, playerCards);
                    fourkSlotCard3 = playerCards[i];
                    removeCardFromArray(fourkSlotCard3, playerCards);
                    addTo4kLists(fourkSlotCard3);

                    if (doLogPlacedCards === true) {
                        addLog("Player " + (playerTurn + 1) + ": Plays 3rd card in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3));
                    }
                    cardPlacedAction();
                }
            }
        }
    }

    // after playing one card the next can still be played
    cardsLeftToPlay = count4kCardsLeftToPlay();

    // finish 4k first if possible when 3 are played
    if (cardsLeftToPlay === 1) {

        // check for final card
        for (let i = 0; i < playerCards.length; i++) {
            let card = playerCards[i];

            if (card.value === fourkSlotCard1.value &&
                card.value === fourkSlotCard2.value &&
                card.value === fourkSlotCard3.value) {

                let partialArr = findStraightFlushCards(card, playerCards);
                if (partialArr != null && partialArr.length >= 3 && isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)) {
                    continue;
                }

                removeFrom4kLists(fourkSlotCard4);
                addCardToHand(fourkSlotCard4, playerCards);
                fourkSlotCard4 = card;
                removeCardFromArray(card, playerCards);
                addTo4kLists(fourkSlotCard4);

                if (doLogCardDetails === true) {
                    addLog("Player " + (playerTurn + 1) + ": Plays 4th card 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
                }

                cardPlacedAction();

                return;
            }
        }
    }


    // start a new play on 4k
    let possible4kCards = [];
    let possible3kCards = [];
    let possible2kCards = [];
    let sameValueCount = 0;
    let sameFlushCount = 0;
    let tempCard;

    for (let i = 0; i < playerCards.length; i++) {
        tempCard = playerCards[i];
        sameValueCount = 0;

        let partialArr = findStraightFlushCards(tempCard, playerCards);
        if (partialArr != null && partialArr.length >= 3) {

            //validate play is valid for str flush
            let isValidStrFlushPlay = isPartialArrayValidAttemptAtStraightFlush(partialArr[0].value, partialArr[1].value, partialArr[2].value, partialArr[0].suit)
            if (isValidStrFlushPlay) {
                continue;
            }
        }

        let hasAValuePlayed = checkCardValueHasBeenPlayed(tempCard);
        if (hasAValuePlayed) {
            continue;
        }

        // can use 4, 3 or 2 of a kind at some point in finding a 4k
        sameValueCount = checkHandForMatchingValues(tempCard, playerCards);
        if (sameValueCount === 4) {
            possible4kCards.push(tempCard);
        } else if (sameValueCount === 3) {
            possible3kCards.push(tempCard);
        } else if (sameValueCount === 2) {
            possible2kCards.push(tempCard);
        }
    }

    if (possible4kCards.length >= 4) {
        possible4kCards = possible4kCards.sort(function (a, b) {
            return a.value - b.value;
        });

        // overwrite or play 4 cards
        fourKPlaceLogic(cardsLeftToPlay, possible4kCards, playerCards);
    } else if (possible3kCards.length >= 3) {
        possible3kCards = possible3kCards.sort(function (a, b) {
            return a.value - b.value;
        });

        let removeCards = [];
        possible3kCards.forEach(temp => {
            sameValueCount = checkHandForMatchingValues(temp, possible3kCards);
            if (sameValueCount < 3) {
                removeCards.push(temp);

            }
        });

        // addLog("remove cards" + printCardArr(removeCards));
        for (let i = 0; i < removeCards.length; i++) {
            let removeMe = removeCards[i];
            removeCardFromArray(removeMe, possible3kCards);
        }

        // overwrite or play 3 cards
        if (possible3kCards.length === 3) {
            threeKPlaceLogic(possible3kCards, cardsLeftToPlay, playerCards);
        }
    } else if (possible2kCards.length >= 2) {

        possible2kCards = possible2kCards.sort(function (a, b) {
            return a.value - b.value;
        });

        // remove cards with no valid pair
        let removeCards = [];
        for (let temp of possible2kCards) {
            sameValueCount = checkHandForMatchingValues(temp, possible2kCards);
            if (sameValueCount === 1) {
                removeCards.push(temp);
            }
        }

        for (let i = 0; i < removeCards.length; i++) {
            let removeMe = removeCards[i];
            removeCardFromArray(removeMe, possible2kCards);
        }

        if (possible2kCards.length >= 2) {
            twoKPlaceLogic(possible2kCards, cardsLeftToPlay, playerCards);
        }
    }
}

function twoKPlaceLogic(possibleCards, cardsLeftToPlay, playerCards) {
    switch (cardsLeftToPlay) {
        case 2:

            //finish hand
            for (let i = 0; i < possibleCards.length; i += 2) {
                if (fourkSlotCard1.value === possibleCards[i].value &&
                    fourkSlotCard2.value === possibleCards[i + 1].value) {
                    fourkSlotCard3 = possibleCards[i];
                    fourkSlotCard4 = possibleCards[i + 1];
                    removeCardFromArray(fourkSlotCard3, playerCards);
                    removeCardFromArray(fourkSlotCard4, playerCards);

                    if (doLogPlacedCards === true) {
                        addLog("Player " + (playerTurn + 1) + ": Plays last 2K in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
                    }
                    cardPlacedAction();

                    return;
                }
            }

            //start new 2k for 4k hand from 2k played

            for (let i = 0; i < possibleCards.length; i += 2) {
                if (fourkSlotCard1.value < possibleCards[i].value &&
                    fourkSlotCard2.value < possibleCards[i + 1].value) {

                    removeFrom4kLists(fourkSlotCard1);
                    removeFrom4kLists(fourkSlotCard2);
                    addCardToHand(fourkSlotCard1, playerCards);
                    addCardToHand(fourkSlotCard2, playerCards);
                    fourkSlotCard1 = possibleCards[i];
                    fourkSlotCard2 = possibleCards[i + 1];
                    removeCardFromArray(fourkSlotCard1, playerCards);
                    removeCardFromArray(fourkSlotCard2, playerCards);
                    addTo4kLists(fourkSlotCard1);
                    addTo4kLists(fourkSlotCard2);

                    if (doLogPlacedCards === true) {
                        addLog("Player " + (playerTurn + 1) + ": Plays first 2K in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
                    }
                    cardPlacedAction();

                    return;
                }
            }
            break;
        case 4:

            //no cards played yet just drop in first two slots
            fourkSlotCard1 = possibleCards[0];
            fourkSlotCard2 = possibleCards[1];
            removeCardFromArray(fourkSlotCard1, playerCards);
            removeCardFromArray(fourkSlotCard2, playerCards);
            addTo4kLists(fourkSlotCard1);
            addTo4kLists(fourkSlotCard2);

            if (doLogPlacedCards === true) {
                addLog("Player " + (playerTurn + 1) + ": Plays 2K in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
            }
            cardPlacedAction();

            break;
    }
}

function threeKPlaceLogic(possibleCards, cardsLeftToPlay, playerCards) {
    switch (cardsLeftToPlay) {
        case 1:

            //attempt to override 3 cards played with three new cards
            for (let i = 0; i < possibleCards.length; i += 3) {
                if (fourkSlotCard1.value < possibleCards[i].value &&
                    fourkSlotCard2.value < possibleCards[i + 1].value &&
                    fourkSlotCard3.value < possibleCards[i + 2].value) {

                    removeFrom4kLists(fourkSlotCard1);
                    removeFrom4kLists(fourkSlotCard2);
                    removeFrom4kLists(fourkSlotCard3);
                    addCardToHand(fourkSlotCard1, playerCards);
                    addCardToHand(fourkSlotCard2, playerCards);
                    addCardToHand(fourkSlotCard3, playerCards);
                    fourkSlotCard1 = possibleCards[i];
                    fourkSlotCard2 = possibleCards[i + 1];
                    fourkSlotCard3 = possibleCards[i + 2];
                    removeCardFromArray(possibleCards[i], playerCards);
                    removeCardFromArray(possibleCards[i + 1], playerCards);
                    removeCardFromArray(possibleCards[i + 2], playerCards);
                    addTo4kLists(fourkSlotCard1);
                    addTo4kLists(fourkSlotCard2);
                    addTo4kLists(fourkSlotCard3);

                    if (doLogPlacedCards === true) {
                        addLog("Player " + (playerTurn + 1) + ": Plays 3K in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
                    }
                    cardPlacedAction();

                    return;
                }
            }
            break;
        case 2:
            for (let i = 0; i < possibleCards.length; i += 2) {
                if (fourkSlotCard1.value < possibleCards[i].value &&
                    fourkSlotCard2.value < possibleCards[i + 1].value) {

                    removeFrom4kLists(fourkSlotCard1);
                    removeFrom4kLists(fourkSlotCard2);
                    removeFrom4kLists(fourkSlotCard3);
                    addCardToHand(fourkSlotCard1, playerCards);
                    addCardToHand(fourkSlotCard2, playerCards);
                    addCardToHand(fourkSlotCard3, playerCards);

                    fourkSlotCard1 = possibleCards[i];
                    fourkSlotCard2 = possibleCards[i + 1];
                    fourkSlotCard3 = possibleCards[i + 2];

                    removeCardFromArray(possibleCards[i], playerCards);
                    removeCardFromArray(possibleCards[i + 1], playerCards);
                    removeCardFromArray(possibleCards[i + 2], playerCards);
                    addTo4kLists(fourkSlotCard1);
                    addTo4kLists(fourkSlotCard2);
                    addTo4kLists(fourkSlotCard3);

                    if (doLogPlacedCards === true) {
                        addLog("Player " + (playerTurn + 1) + ": Plays 3K in 4k " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
                    }
                    cardPlacedAction();

                    return;
                }
            }
            break;
        case 4:
            fourkSlotCard1 = possibleCards[0];
            fourkSlotCard2 = possibleCards[1];
            fourkSlotCard3 = possibleCards[2];

            removeCardFromArray(possibleCards[0], playerCards);
            removeCardFromArray(possibleCards[1], playerCards);
            removeCardFromArray(possibleCards[2], playerCards);

            addTo4kLists(fourkSlotCard1);
            addTo4kLists(fourkSlotCard2);
            addTo4kLists(fourkSlotCard3);

            if (doLogPlacedCards === true) {
                addLog("Player " + (playerTurn + 1) + ": Plays 3K in 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
            }
            cardPlacedAction();

            break;
    }
}

function fourKPlaceLogic(cardsLeftToPlay, possibleCards, cardArr) {
    switch (cardsLeftToPlay) {
        case 0:
            let currentIsBetter = currentPossibleCardIsHighest(possibleCards[0]);
            if (currentIsBetter === true) {

                removeFrom4kLists(fourkSlotCard1);
                addCardToHand(fourkSlotCard1, cardArr);
                fourkSlotCard1 = possibleCards[0];
                removeCardFromArray(fourkSlotCard1, cardArr);
                addTo4kLists(fourkSlotCard1);

                removeFrom4kLists(fourkSlotCard2);
                addCardToHand(fourkSlotCard2, cardArr);
                fourkSlotCard2 = possibleCards[1];
                removeCardFromArray(fourkSlotCard2, cardArr);
                addTo4kLists(fourkSlotCard2);

                removeFrom4kLists(fourkSlotCard3);
                addCardToHand(fourkSlotCard3, cardArr);
                fourkSlotCard3 = possibleCards[2];
                removeCardFromArray(fourkSlotCard3, cardArr);
                addTo4kLists(fourkSlotCard3);

                removeFrom4kLists(fourkSlotCard4);
                addCardToHand(fourkSlotCard4, cardArr);
                fourkSlotCard4 = possibleCards[3];
                removeCardFromArray(fourkSlotCard4, cardArr);
                addTo4kLists(fourkSlotCard4);

                if (doLogPlacedCards === true) {
                    addLog("Player " + (playerTurn + 1) + ": Plays 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
                }
                cardPlacedAction();

                return;
            }
            break;
        case 2:
        case 3:
        case 4:
            removeFrom4kLists(fourkSlotCard1);
            removeFrom4kLists(fourkSlotCard2);
            removeFrom4kLists(fourkSlotCard3);
            removeFrom4kLists(fourkSlotCard4);

            addCardToHand(fourkSlotCard1, cardArr);
            addCardToHand(fourkSlotCard2, cardArr);
            addCardToHand(fourkSlotCard3, cardArr);
            addCardToHand(fourkSlotCard4, cardArr);

            fourkSlotCard1 = possibleCards[0];
            fourkSlotCard2 = possibleCards[1];
            fourkSlotCard3 = possibleCards[2];
            fourkSlotCard4 = possibleCards[3];

            removeCardFromArray(possibleCards[0], cardArr);
            removeCardFromArray(possibleCards[1], cardArr);
            removeCardFromArray(possibleCards[2], cardArr);
            removeCardFromArray(possibleCards[3], cardArr);

            addTo4kLists(fourkSlotCard1);
            addTo4kLists(fourkSlotCard2);
            addTo4kLists(fourkSlotCard3);
            addTo4kLists(fourkSlotCard4);

            if (doLogPlacedCards === true) {
                addLog("Player " + (playerTurn + 1) + ": Plays 4K " + printCard(fourkSlotCard1) + printCard(fourkSlotCard2) + printCard(fourkSlotCard3) + printCard(fourkSlotCard4));
            }

            cardPlacedAction();
            return;
    }
}

function currentPossibleCardIsHighest(card) {
    return card.value >= fourkSlotCard1.value &&
        card.value >= fourkSlotCard2.value &&
        card.value >= fourkSlotCard3.value &&
        card.value >= fourkSlotCard4.value;
}

function count4kCardsLeftToPlay() {
    let acc = 0;
    if (fourkSlotCard1 == null) {
        acc++;
    }
    if (fourkSlotCard2 == null) {
        acc++;
    }
    if (fourkSlotCard3 == null) {
        acc++;
    }
    if (fourkSlotCard4 == null) {
        acc++;
    }
    return acc;
}
