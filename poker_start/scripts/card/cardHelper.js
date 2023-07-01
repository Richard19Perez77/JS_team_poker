// Use in case of card play not valid, player may need to play a certain type or number of cards
function printMinimumCardPlay() {
    switch (targetHand) {
        case 1:
            addLog("Player " + (playerTurn + 1) + ": 2K hand must play 0 or at least two cards.")
            break;
        case 2:
            addLog("Player " + (playerTurn + 1) + ": 3k hand must play 0 or at least two cards.")
            break;
        case 3:
            addLog("Player " + (playerTurn + 1) + ": straight hand must play 0 or at least 3 cards.")
            break;
        case 4:
            addLog("Player " + (playerTurn + 1) + ": flush hand must play 0 or at least 3 cards.")
            break;
        case 5:
            addLog("Player " + (playerTurn + 1) + ": 4k hand must play 0 or at least two cards.")
            break;
        case 6:
            addLog("Player " + (playerTurn + 1) + ": Straight Flush must play 0 or at least three cards.")
            break;
    }
}

// put cards in numerical order or push empty slots to the right of the set
function organizeStraight() {
    let straightArray = [];
    if (straightSlotCard1 != null) {
        straightArray.push(straightSlotCard1);
    }
    if (straightSlotCard2 != null) {
        straightArray.push(straightSlotCard2);
    }
    if (straightSlotCard3 != null) {
        straightArray.push(straightSlotCard3);
    }
    if (straightSlotCard4 != null) {
        straightArray.push(straightSlotCard4);
    }
    if (straightSlotCard5 != null) {
        straightArray.push(straightSlotCard5);
    }

    if (straightArray.length > 0) {
        straightArray = straightArray.sort(function (a, b) {
            return a.value - b.value;
        });

        let index = straightArray.length;
        straightSlotCard1 = null;
        straightSlotCard2 = null;
        straightSlotCard3 = null;
        straightSlotCard4 = null;
        straightSlotCard5 = null;

        while (index > 0) {
            switch (index) {
                case 1:
                    straightSlotCard1 = straightArray[0];
                    break;
                case 2:
                    straightSlotCard2 = straightArray[1];
                    break;
                case 3:
                    straightSlotCard3 = straightArray[2];
                    break;
                case 4:
                    straightSlotCard4 = straightArray[3];
                    break;
                case 5:
                    straightSlotCard5 = straightArray[4];
                    break;
            }
            index--;
        }
    }
}

// Call to organize cards on table depending on the targetHand
function organizePlayedCards() {
    if (doDebugLog) addLog("organizePlayedCards()");
    switch (targetHand) {
        case 2:
            organize3k();
            break;
        case 3:
            organizeStraight();
            break;
        case 4:
            organizeFlush();
            break;
        case 5:
            organize4k();
            break;
        case 6:
            organizeStraightFlush();
            break;
    }
}

// Organize by sorting and placing in slots one after another, pushing empty slots right.
function organizeStraightFlush() {
    let straightArray = [];
    if (strFlushSlotCard1 != null) {
        straightArray.push(strFlushSlotCard1);
        strFlushSlotCard1 = null;
    }
    if (strFlushSlotCard2 != null) {
        straightArray.push(strFlushSlotCard2);
        strFlushSlotCard2 = null;
    }
    if (strFlushSlotCard3 != null) {
        straightArray.push(strFlushSlotCard3);
        strFlushSlotCard3 = null;
    }
    if (strFlushSlotCard4 != null) {
        straightArray.push(strFlushSlotCard4);
        strFlushSlotCard4 = null;
    }
    if (strFlushSlotCard5 != null) {
        straightArray.push(strFlushSlotCard5);
        strFlushSlotCard5 = null;
    }

    straightArray = straightArray.sort(function (a, b) {
        return a.value - b.value;
    });

    for (let i = 0; i < straightArray.length; i++) {
        switch (i) {
            case 0:
                strFlushSlotCard1 = straightArray[0];
                break;
            case 1:
                strFlushSlotCard2 = straightArray[1];
                break;
            case 2:
                strFlushSlotCard3 = straightArray[2];
                break;
            case 3:
                strFlushSlotCard4 = straightArray[3];
                break;
            case 4:
                strFlushSlotCard5 = straightArray[4];
                break;
        }
    }
}

// Arrange flush cards by setting them in order numerically then pushing empty slots right
function organizeFlush() {
    let flushArray = [];
    if (flushSlotCard1 != null) {
        flushArray.push(flushSlotCard1);
    }
    if (flushSlotCard2 != null) {
        flushArray.push(flushSlotCard2);
    }
    if (flushSlotCard3 != null) {
        flushArray.push(flushSlotCard3);
    }
    if (flushSlotCard4 != null) {
        flushArray.push(flushSlotCard4);
    }
    if (flushSlotCard5 != null) {
        flushArray.push(flushSlotCard5);
    }

    if (flushArray.length > 0) {
        flushArray = flushArray.sort(function (a, b) {
            return a.value - b.value;
        });

        let index = flushArray.length;
        flushSlotCard1 = null;
        flushSlotCard2 = null;
        flushSlotCard3 = null;
        flushSlotCard4 = null;
        flushSlotCard5 = null;

        while (index >= 0) {
            switch (index) {
                case 0:
                    flushSlotCard1 = flushArray[0];
                    break;
                case 1:
                    flushSlotCard2 = flushArray[1];
                    break;
                case 2:
                    flushSlotCard3 = flushArray[2];
                    break;
                case 3:
                    flushSlotCard4 = flushArray[3];
                    break;
                case 4:
                    flushSlotCard5 = flushArray[4];
                    break;
            }
            index--;
        }
    }
}

// Move empty slots to the right
function organize4k() {
    if (fourkSlotCard1 !== null
        && fourkSlotCard2 !== null
        && fourkSlotCard3 !== null
        && fourkSlotCard4 !== null
        && fourkSlotCard1.value === fourkSlotCard2.value && fourkSlotCard2.value === fourkSlotCard3.value && fourkSlotCard3.value === fourkSlotCard4.value) {
        return;
    }

    if (doDebugLog) addLog("organize4k()");

    let temp;
    if (fourkSlotCard1 == null) {

        //find a non null card
        if (fourkSlotCard2 != null) {
            temp = fourkSlotCard1;
            fourkSlotCard1 = fourkSlotCard2;
            fourkSlotCard2 = temp;
        } else if (fourkSlotCard3 != null) {
            temp = fourkSlotCard1;
            fourkSlotCard1 = fourkSlotCard3;
            fourkSlotCard3 = temp;
        } else if (fourkSlotCard4 != null) {
            temp = fourkSlotCard1;
            fourkSlotCard1 = fourkSlotCard4;
            fourkSlotCard4 = temp;
        }
    }

    if (fourkSlotCard2 == null) {

        //find a non null card
        if (fourkSlotCard3 != null) {
            temp = fourkSlotCard2;
            fourkSlotCard2 = fourkSlotCard3;
            fourkSlotCard3 = temp;
        } else if (fourkSlotCard4 != null) {
            temp = fourkSlotCard2;
            fourkSlotCard2 = fourkSlotCard4;
            fourkSlotCard4 = temp;
        }
    }

    if (fourkSlotCard3 == null) {

        if (fourkSlotCard4 != null) {
            temp = fourkSlotCard3;
            fourkSlotCard3 = fourkSlotCard4;
            fourkSlotCard4 = temp;
        }
    }

    // organize by value
    if (fourkSlotCard1 !== null && fourkSlotCard2 !== null && fourkSlotCard1.value > fourkSlotCard2.value) {
        temp = fourkSlotCard1;
        fourkSlotCard1 = fourkSlotCard2;
        fourkSlotCard2 = temp;
    }

    if (fourkSlotCard2 !== null && fourkSlotCard3 !== null && fourkSlotCard2.value > fourkSlotCard3.value) {
        temp = fourkSlotCard2;
        fourkSlotCard2 = fourkSlotCard3;
        fourkSlotCard3 = temp;
    }

    if (fourkSlotCard3 !== null && fourkSlotCard4 !== null && fourkSlotCard3.value > fourkSlotCard4.value) {
        temp = fourkSlotCard3;
        fourkSlotCard3 = fourkSlotCard4;
        fourkSlotCard4 = temp;
    }

    // 3 cards played low is 1k
    if (fourkSlotCard1 !== null && fourkSlotCard2 !== null && fourkSlotCard3 !== null && fourkSlotCard1.value !== fourkSlotCard2.value && fourkSlotCard2.value === fourkSlotCard3.value) {
        temp = fourkSlotCard1;
        fourkSlotCard1 = fourkSlotCard3;
        fourkSlotCard3 = temp;
    }

    // 3 cards played low is 1k
    if (fourkSlotCard1 !== null && fourkSlotCard2 !== null && fourkSlotCard3 !== null && fourkSlotCard1.value !== fourkSlotCard2.value && fourkSlotCard1.value === fourkSlotCard3.value) {
        temp = fourkSlotCard2;
        fourkSlotCard2 = fourkSlotCard3;
        fourkSlotCard3 = temp;
    }


    // four cards played out of order
    if (fourkSlotCard1 !== null && fourkSlotCard2 !== null && fourkSlotCard3 !== null && fourkSlotCard4 !== null) {

        if (fourkSlotCard1.value !== fourkSlotCard2.value && fourkSlotCard3.value === fourkSlotCard4.value) {

            temp = fourkSlotCard1;
            fourkSlotCard1 = fourkSlotCard3;
            fourkSlotCard3 = temp;

            temp = fourkSlotCard2;
            fourkSlotCard2 = fourkSlotCard4;
            fourkSlotCard4 = temp;

        }
        if (fourkSlotCard2.value === fourkSlotCard4.value) {
            temp = fourkSlotCard3;
            fourkSlotCard3 = fourkSlotCard4;
            fourkSlotCard4 = temp;
        }
    }
}

// Push empty slots right in 3k row 
function organize3k() {
    if (doDebugLog) addLog("organize4k()");
    let temp;
    if (threePSlotCard1 == null) {

        //find a non null card
        if (threePSlotCard2 != null) {
            temp = threePSlotCard1;
            threePSlotCard1 = threePSlotCard2;
            threePSlotCard2 = temp;
        } else if (threePSlotCard3 != null) {
            temp = threePSlotCard1;
            threePSlotCard1 = threePSlotCard3;
            threePSlotCard3 = temp;
        }
    }

    if (threePSlotCard2 == null) {

        //find a non null card
        if (threePSlotCard3 != null) {
            temp = threePSlotCard2;
            threePSlotCard2 = threePSlotCard3;
            threePSlotCard3 = temp;
        }
    }
}

// decide the next hand to play based on target hand at play
function allCardsPlayed() {
    let acc = 0;
    switch (targetHand) {
        case 0:
            return hcSlotCard != null;

        case 1:
            return twoPSlotCard1 != null &&
                twoPSlotCard2 != null;

        case 2:
            if (threePSlotCard1 != null &&
                threePSlotCard2 != null) {
                return true;
            }
            if (threePSlotCard1 != null &&
                threePSlotCard3 != null) {
                return true;
            }
            return threePSlotCard2 != null &&
                threePSlotCard3 != null;

        case 3:
            // check for three cards played
            acc = 0;
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

            return acc >= 3;

        case 4:
            acc = 0;
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
            return acc >= 3;

        case 5:
            acc = 0;
            if (fourkSlotCard1 != null) {
                acc++;
            }
            if (fourkSlotCard2 != null) {
                acc++;
            }
            if (fourkSlotCard3 != null) {
                acc++;
            }
            if (fourkSlotCard4 != null) {
                acc++;
            }
            return acc >= 2;

        case 6:
            acc = 0;
            if (strFlushSlotCard1 != null) {
                acc++;
            }
            if (strFlushSlotCard2 != null) {
                acc++;
            }
            if (strFlushSlotCard3 != null) {
                acc++;
            }
            if (strFlushSlotCard4 != null) {
                acc++;
            }
            if (strFlushSlotCard5 != null) {
                acc++;
            }

            return acc >= 3;


    }
}

// reset variables when card on table is highlighted for moving, resets when mouse and keyboard are used to move a card for next move
function removeCardHighlights() {
    playercardPressed = -1;
    placeholderPressed = -1;
    arrowPlayerCardSelected = -1;
    arrowPlaceholderCardSelected = -1;
    placeHolderMouseOverCardIndex = -1;
}

// allows for printing of suit charachter
function getSuitCharacter(suit) {
    switch (suit) {
        case 0:
            return "&#9671;"; // Diamonds
        case 1:
            return "&#9831;"; // Clubs
        case 2:
            return "&#9825;"; // Hearts
        case 3:
            return "&#9828;"; // Spades
    }
    return "";
}

// Stored card value is converted to face value to get standard card face 2 - Ace
function getFaceValue(value) {
    switch (value) {
        case 0:
            return 2;
        case 1:
            return 3;
        case 2:
            return 4;
        case 3:
            return 5;
        case 4:
            return 6;
        case 5:
            return 7;
        case 6:
            return 8;
        case 7:
            return 9;
        case 8:
            return 10;
        case 9:
            return "J";
        case 10:
            return "Q";
        case 11:
            return "K";
        case 12:
            return "A";
    }

    return "";
}

// Matching values are the cards Kind selection, 2 of a kind needs 2 matching values, 3K needs 3, and 4K needs 4
function checkHandForMatchingValues(card, hand) {
    let kind = 0;
    let printedCards = "";
    for (let i = 0; i < hand.length; i++) {
        if (hand[i].value === card.value) {
            kind++;
            printedCards = printedCards + printCard(hand[i]);
        }
    }

    if (doLogCardDetails && kind > 1) {
        addLog("Player " + (playerTurn + 1) + ": Kind matches " + printedCards);
    }
    return kind;
}

// Cards can replace a current 2K if the played card both have value higher than the played cards
function checkCardCanReplaceCurrent2kPlayed(tempCard) {
    // if no cards played it can replace
    if ((twoPSlotCard1 === null ||
        twoPSlotCard2 === null)) {

        if (doLogCardDetails) {
            addLog("Player " + (playerTurn + 1) + ": No 2K cards played");
        }
        return true;
    }

    if (tempCard.value > twoPSlotCard1.value &&
        tempCard.value > twoPSlotCard2.value) {

        if (doLogCardDetails) {
            addLog("Player " + (playerTurn + 1) + ": " + printCard(tempCard) + " > " + printCard(twoPSlotCard1) + printCard(twoPSlotCard2));
        }
        return true;
    }

    return false;
}

// A three card straight can be found from one card and a hand of cards.
function checkHandFor3cardStraight(card, hand) {
    let oneLower = false;
    let twoLower = false;
    let oneHigher = false;
    let twoHigher = false;

    let straightArray = [];
    straightArray.push(card);

    for (let i = 0; i < hand.length; i++) {
        if (hand[i].value === (card.value + 1)) {
            straightArray.push(hand[i]);
            oneHigher = true;
        }
        if (hand[i].value === (card.value - 1)) {
            straightArray.push(hand[i]);
            oneLower = true;
        }
        if (hand[i].value === (card.value + 2)) {
            straightArray.push(hand[i]);
            twoHigher = true;
        }
        if (hand[i].value === (card.value - 2)) {
            straightArray.push(hand[i]);
            twoLower = true;
        }
    }

    straightArray = straightArray.sort(function (a, b) {
        return a.value - b.value;
    });

    if (oneLower === true && oneHigher === true) {
        if (doLogCardDetails) {
            addLog("Player " + (playerTurn + 1) + ": Straight found " + printCardArr(straightArray));
        }
        return true;
    }

    if (oneLower === true && twoLower === true) {
        if (doLogCardDetails) {
            addLog("Player " + (playerTurn + 1) + ": Straight found " + printCardArr(straightArray));
        }
        return true;
    }

    if (oneHigher === true && twoHigher === true) {
        if (doLogCardDetails) {
            addLog("Player " + (playerTurn + 1) + ": Straight found " + printCardArr(straightArray));
        }
        return true;
    }

    return false;
}

// A better flush has a higher overall value
function checkBetterFlush(cardArr) {
    if (doDebugLog) addLog("cardArr=" + printCardArr(cardArr));
    if (cardArr.length < 5) {
        return false;
    }

    let placed = getFlushScore();
    let curr = cardArr[0].value +
        cardArr[1].value +
        cardArr[2].value +
        cardArr[3].value +
        cardArr[4].value +
        10;
    if (doDebugLog) addLog("curr=" + curr + ", placed=" + placed);
    return curr > placed;
}

// given a card, check how many other cards match suit
function checkCardFlushCount(card, hand) {
    let flush = 0;
    let printedFlush = "";
    for (let i = 0; i < hand.length; i++) {
        if (hand[i].suit === card.suit) {
            flush++;
            printedFlush = printedFlush + printCard(hand[i]);
        }
    }

    if (doLogCardDetails && flush > 2) {
        addLog("Player " + (playerTurn + 1) + ": Flush " + printedFlush);
    }
    return flush;
}

// return true if a card's value has been played in any other hand up to this point
function checkCardValueHasBeenPlayed(temp) {
    if (doDebugLog) addLog("checkCardValueHasBeenPlayed()" + printCard(temp));
    let value = temp.value;

    //check hc card value
    if (hcSlotCard != null && hcSlotCard.value === value) {
        if (doDebugLog) addLog("hc played " + printCard(hcSlotCard) + printCard(temp));
        return true;
    }

    // check 2k card values
    if (twoPSlotCard1 != null && twoPSlotCard1.value === value) {
        if (doDebugLog) addLog("2k played " + printCard(twoPSlotCard1) + printCard(temp));
        return true;
    }

    if (twoPSlotCard2 != null && twoPSlotCard2.value === value) {
        if (doDebugLog) addLog("2k played " + printCard(twoPSlotCard2) + printCard(temp));
        return true;
    }

    //check 3k card values
    if (threePSlotCard1 != null && threePSlotCard1.value === value) {
        if (doDebugLog) addLog("3k played " + printCard(threePSlotCard1) + printCard(temp));
        return true;
    }

    if (threePSlotCard2 != null && threePSlotCard2.value === value) {
        if (doDebugLog) addLog("3k played " + printCard(threePSlotCard2) + printCard(temp));
        return true;
    }

    if (threePSlotCard3 != null && threePSlotCard3.value === value) {
        if (doDebugLog) addLog("3k played " + printCard(threePSlotCard3) + printCard(temp));
        return true;
    }

    // straight card values
    if (straightSlotCard1 != null && straightSlotCard1.value === value) {
        if (doDebugLog) addLog("str played " + printCard(straightSlotCard1) + printCard(temp));
        return true;
    }

    if (straightSlotCard2 != null && straightSlotCard2.value === value) {
        if (doDebugLog) addLog("str played " + printCard(straightSlotCard2) + printCard(temp));
        return true;
    }

    if (straightSlotCard3 != null && straightSlotCard3.value === value) {
        if (doDebugLog) addLog("str played " + printCard(straightSlotCard3) + printCard(temp));
        return true;
    }

    if (straightSlotCard4 != null && straightSlotCard4.value === value) {
        if (doDebugLog) addLog("str played " + printCard(straightSlotCard4) + printCard(temp));
        return true;
    }

    if (straightSlotCard5 != null && straightSlotCard5.value === value) {
        if (doDebugLog) addLog("str played " + printCard(straightSlotCard5) + printCard(temp));
        return true;
    }

    //flush card values
    if (flushSlotCard1 != null && flushSlotCard1.value === value) {
        if (doDebugLog) addLog("flush played " + printCard(flushSlotCard1) + printCard(temp));
        return true;
    }
    if (flushSlotCard2 != null && flushSlotCard2.value === value) {
        if (doDebugLog) addLog("flush played " + printCard(flushSlotCard2) + printCard(temp));
        return true;
    }
    if (flushSlotCard3 != null && flushSlotCard3.value === value) {
        if (doDebugLog) addLog("flush played " + printCard(flushSlotCard3) + printCard(temp));
        return true;
    }
    if (flushSlotCard4 != null && flushSlotCard4.value === value) {
        if (doDebugLog) addLog("flush played " + printCard(flushSlotCard4) + printCard(temp));
        return true;
    }
    if (flushSlotCard5 != null && flushSlotCard5.value === value) {
        if (doDebugLog) addLog("flush played " + printCard(flushSlotCard5) + printCard(temp));
        return true;
    }

    //four k values
    if (fourkSlotCard1 != null && fourkSlotCard1.value === value) {
        if (doDebugLog) addLog("4k played " + printCard(fourkSlotCard1) + printCard(temp));
        return true;
    }
    if (fourkSlotCard2 != null && fourkSlotCard2.value === value) {
        if (doDebugLog) addLog("4k played " + printCard(fourkSlotCard2) + printCard(temp));
        return true;
    }
    if (fourkSlotCard3 != null && fourkSlotCard3.value === value) {
        if (doDebugLog) addLog("4k played " + printCard(fourkSlotCard3) + printCard(temp));
        return true;
    }
    if (fourkSlotCard4 != null && fourkSlotCard4.value === value) {
        if (doDebugLog) addLog("4k played " + printCard(fourkSlotCard4) + printCard(temp));
        return true;
    }

    // str flush values
    if (strFlushSlotCard1 != null && strFlushSlotCard1.value === value) {
        if (doDebugLog) addLog("str flush played " + printCard(strFlushSlotCard1) + printCard(temp));
        return true;
    }
    if (strFlushSlotCard2 != null && strFlushSlotCard2.value === value) {
        if (doDebugLog) addLog("str flush played " + printCard(strFlushSlotCard2) + printCard(temp));
        return true;
    }
    if (strFlushSlotCard3 != null && strFlushSlotCard3.value === value) {
        if (doDebugLog) addLog("str flush played " + printCard(strFlushSlotCard3) + printCard(temp));
        return true;
    }
    if (strFlushSlotCard4 != null && strFlushSlotCard4.value === value) {
        if (doDebugLog) addLog("str flush played " + printCard(strFlushSlotCard4) + printCard(temp));
        return true;
    }

    // if it's not in the last card slot return false
    return strFlushSlotCard5 != null && strFlushSlotCard5.value === value;
}

function findStraightFlushCards(card, cardArr) {
    if (doDebugLog) addLog("findPartialStraightFlush()" + printCardArr(cardArr));

    let partialArr = [];
    partialArr.push(card);

    for (let i = 0; i < cardArr.length; i++) {
        let tempCard = cardArr[i];
        if (card.suit === tempCard.suit) {
            if (card.value === tempCard.value - 1 || card.value === tempCard.value + 1) {
                partialArr.push(tempCard);
            }
            if (card.value === tempCard.value - 2 || card.value === tempCard.value + 2) {
                partialArr.push(tempCard);
            }
            if (card.value === tempCard.value - 3 || card.value === tempCard.value + 3) {
                partialArr.push(tempCard);
            }
            if (card.value === tempCard.value - 4 || card.value === tempCard.value + 4) {
                partialArr.push(tempCard);
            }
        }
    }

    partialArr = partialArr.sort(function (a, b) {
        return a.value - b.value;
    });

    let removeIndexes = [];
    if (partialArr.length > 1) {
        if (doDebugLog) addLogLine("partialArr=" + printCardArr(partialArr));
        let startIndex = 0;
        for (let i = 0; i < partialArr.length; i++) {
            if (card.value === partialArr[i].value) {
                startIndex = i;
            }
        }
        if (doDebugLog) addLogLine("startIndex=" + startIndex);

        let acc = 1;
        for (let i = startIndex - 1; i >= 0; i--) {
            if (partialArr[i].value + acc !== card.value) {
                removeIndexes.push(partialArr[i]);
            }
            acc++;
        }

        acc = 1;
        for (let i = startIndex + 1; i < partialArr.length; i++) {
            if (partialArr[i].value - acc !== card.value) {
                removeIndexes.push(partialArr[i]);
            }
            acc++;
        }

        for (let i = 0; i < removeIndexes.length; i++) {
            let removeMe = removeIndexes[i];
            removeCardFromArray(removeMe, partialArr);
        }
    }

    return partialArr;
}

function check3KValuePlayedCount(value) {
    let acc = 0;
    if (hcSlotCard != null && hcSlotCard.value === value) {
        acc++;
    }

    if (twoPSlotCard1 != null && twoPSlotCard1.value === value) {
        acc++;
    }
    if (twoPSlotCard2 != null && twoPSlotCard2.value === value) {
        acc++;
    }

    return acc;
}


function checkValuePlayedCount(value) {
    let acc = 0;
    if (hcSlotCard != null && hcSlotCard.value === value) {
        acc++;
    }

    if (twoPSlotCard1 != null && twoPSlotCard1.value === value) {
        acc++;
    }
    if (twoPSlotCard2 != null && twoPSlotCard2.value === value) {
        acc++;
    }

    if (threePSlotCard1 != null && threePSlotCard1.value === value) {
        acc++;
    }
    if (threePSlotCard2 != null && threePSlotCard2.value === value) {
        acc++;
    }
    if (threePSlotCard3 != null && threePSlotCard3.value === value) {
        acc++;
    }

    if (straightSlotCard1 != null && straightSlotCard1.value === value) {
        acc++;
    }
    if (straightSlotCard2 != null && straightSlotCard2.value === value) {
        acc++;
    }
    if (straightSlotCard3 != null && straightSlotCard3.value === value) {
        acc++;
    }
    if (straightSlotCard4 != null && straightSlotCard4.value === value) {
        acc++;
    }
    if (straightSlotCard5 != null && straightSlotCard5.value === value) {
        acc++;
    }

    if (flushSlotCard1 != null && flushSlotCard1.value === value) {
        acc++;
    }
    if (flushSlotCard2 != null && flushSlotCard2.value === value) {
        acc++;
    }
    if (flushSlotCard3 != null && flushSlotCard3.value === value) {
        acc++;
    }
    if (flushSlotCard4 != null && flushSlotCard4.value === value) {
        acc++;
    }
    if (flushSlotCard5 != null && flushSlotCard5.value === value) {
        acc++;
    }

    if (fourkSlotCard1 != null && fourkSlotCard1.value === value) {
        acc++;
    }
    if (fourkSlotCard2 != null && fourkSlotCard2.value === value) {
        acc++;
    }
    if (fourkSlotCard3 != null && fourkSlotCard3.value === value) {
        acc++;
    }
    if (fourkSlotCard4 != null && fourkSlotCard4.value === value) {
        acc++;
    }

    if (strFlushSlotCard1 != null && strFlushSlotCard1.value === value) {
        acc++;
    }
    if (strFlushSlotCard2 != null && strFlushSlotCard2.value === value) {
        acc++;
    }
    if (strFlushSlotCard3 != null && strFlushSlotCard3.value === value) {
        acc++;
    }
    if (strFlushSlotCard4 != null && strFlushSlotCard4.value === value) {
        acc++;
    }
    if (strFlushSlotCard5 != null && strFlushSlotCard5.value === value) {
        acc++;
    }

    return acc;
}

function isPartialArrayValidAttemptAtStraightFlush(value3, value4, value5, suit) {

    let card1 = new Card(suit, value3 - 2, null);
    let card2 = new Card(suit, value3 - 1, null);
    let card6 = new Card(suit, value5 + 1, null);
    let card7 = new Card(suit, value5 + 2, null);

    // 0, 1, 2 can only be blocked with 3 or 4 played
    if (value3 === 0) {
        if (checkCardHasBeenPlayed(card6)) {
            return false;
        }

        if (checkCardHasBeenPlayed(card7)) {
            return false;
        }
    }

    if (value3 === 1) {
        if (checkCardHasBeenPlayed(card6)) {
            return false;
        }

        if (checkCardHasBeenPlayed(card2) &&
            checkCardHasBeenPlayed(card7)) {
            return false;
        }
    }

    // check card 4 to 10, sf cards needed are two up two down or 1 up and 1 down
    if (value3 === 2 || value3 === 3 || value3 === 4 || value3 === 5 ||
        value3 === 6 || value3 === 7 || value3 === 8) {

        if (checkCardHasBeenPlayed(card2) &&
            checkCardHasBeenPlayed(card6)) {
            return false;
        }

        if (checkCardHasBeenPlayed(card1) &&
            checkCardHasBeenPlayed(card6)) {
            return false;
        }

        if (checkCardHasBeenPlayed(card2) &&
            checkCardHasBeenPlayed(card7)) {
            return false;
        }
    }

    if (value3 === 9) {
        if (checkCardHasBeenPlayed(card2)) {
            return false;
        }

        if (checkCardHasBeenPlayed(card1) &&
            checkCardHasBeenPlayed(card6)) {
            return false;
        }
    }

    if (value3 === 10) {
        if (checkCardHasBeenPlayed(card1)) {
            return false;
        }
        if (checkCardHasBeenPlayed(card2)) {
            return false;
        }
    }

    return true;
}

function checkCardHasBeenPlayed(card) {
    let value = card.value;
    let suit = card.suit;

    //check hc card value
    if (hcSlotCard != null && hcSlotCard.value === value && hcSlotCard.suit === suit) {
        if (doDebugLog) addLogLine("hc played " + printCard(card));
        return true;
    }

    // check 2k card values
    if (twoPSlotCard1 != null && twoPSlotCard1.value === value && twoPSlotCard1.suit === suit) {
        if (doDebugLog) addLogLine("2k played " + printCard(card));
        return true;
    }

    if (twoPSlotCard2 != null && twoPSlotCard2.value === value && twoPSlotCard2.suit === suit) {
        if (doDebugLog) addLogLine("2k played " + printCard(card));
        return true;
    }

    //check 3k card values
    if (threePSlotCard1 != null && threePSlotCard1.value === value && threePSlotCard1.suit === suit) {
        if (doDebugLog) addLogLine("3k played " + printCard(card));
        return true;
    }

    if (threePSlotCard2 != null && threePSlotCard2.value === value && threePSlotCard2.suit === suit) {
        if (doDebugLog) addLogLine("3k played " + printCard(card));
        return true;
    }

    if (threePSlotCard3 != null && threePSlotCard3.value === value && threePSlotCard3.suit === suit) {
        if (doDebugLog) addLogLine("3k played " + printCard(card));
        return true;
    }

    // straight card values
    if (straightSlotCard1 != null && straightSlotCard1.value === value && straightSlotCard1.suit === suit) {
        if (doDebugLog) addLogLine("str played " + printCard(card));
        return true;
    }

    if (straightSlotCard2 != null && straightSlotCard2.value === value && straightSlotCard2.suit === suit) {
        if (doDebugLog) addLogLine("str played " + printCard(card));
        return true;
    }

    if (straightSlotCard3 != null && straightSlotCard3.value === value && straightSlotCard3.suit === suit) {
        if (doDebugLog) addLogLine("str played " + printCard(card));
        return true;
    }

    if (straightSlotCard4 != null && straightSlotCard4.value === value && straightSlotCard4.suit === suit) {
        if (doDebugLog) addLogLine("str played " + printCard(card));
        return true;
    }

    if (straightSlotCard5 != null && straightSlotCard5.value === value && straightSlotCard5.suit === suit) {
        if (doDebugLog) addLogLine("str played " + printCard(card));
        return true;
    }

    //flush card values
    if (flushSlotCard1 != null && flushSlotCard1.value === value && flushSlotCard1.suit === suit) {
        if (doDebugLog) addLogLine("flush played " + printCard(card));
        return true;
    }
    if (flushSlotCard2 != null && flushSlotCard2.value === value && flushSlotCard2.suit === suit) {
        if (doDebugLog) addLogLine("flush played " + printCard(card));
        return true;
    }
    if (flushSlotCard3 != null && flushSlotCard3.value === value && flushSlotCard3.suit === suit) {
        if (doDebugLog) addLogLine("flush played " + printCard(card));
        return true;
    }
    if (flushSlotCard4 != null && flushSlotCard4.value === value && flushSlotCard4.suit === suit) {
        if (doDebugLog) addLogLine("flush played " + printCard(card));
        return true;
    }
    if (flushSlotCard5 != null && flushSlotCard5.value === value && flushSlotCard5.suit === suit) {
        if (doDebugLog) addLogLine("flush played " + printCard(card));
        return true;
    }

    //four k values
    if (fourkSlotCard1 != null && fourkSlotCard1.value === value && fourkSlotCard1.suit === suit) {
        if (doDebugLog) addLogLine("4k played " + printCard(card));
        return true;
    }
    if (fourkSlotCard2 != null && fourkSlotCard2.value === value && fourkSlotCard2.suit === suit) {
        if (doDebugLog) addLogLine("4k played " + printCard(card));
        return true;
    }
    if (fourkSlotCard3 != null && fourkSlotCard3.value === value && fourkSlotCard3.suit === suit) {
        if (doDebugLog) addLogLine("4k played " + printCard(card));
        return true;
    }
    if (fourkSlotCard4 != null && fourkSlotCard4.value === value && fourkSlotCard4.suit === suit) {
        if (doDebugLog) addLogLine("4k played " + printCard(card));
        return true;
    }

    // str flush values
    if (strFlushSlotCard1 != null && strFlushSlotCard1.value === value && strFlushSlotCard1.suit === suit) {
        if (doDebugLog) addLogLine("str flush played " + printCard(card));
        return true;
    }
    if (strFlushSlotCard2 != null && strFlushSlotCard2.value === value && strFlushSlotCard2.suit === suit) {
        if (doDebugLog) addLogLine("str flush played " + printCard(card));
        return true;
    }
    if (strFlushSlotCard3 != null && strFlushSlotCard3.value === value && strFlushSlotCard3.suit === suit) {
        if (doDebugLog) addLogLine("str flush played " + printCard(card));
        return true;
    }
    if (strFlushSlotCard4 != null && strFlushSlotCard4.value === value && strFlushSlotCard4.suit === suit) {
        if (doDebugLog) addLogLine("str flush played " + printCard(card));
        return true;
    }
    return strFlushSlotCard5 != null && strFlushSlotCard5.value === value && strFlushSlotCard5.suit === suit;
}

function removeCardHighlights() {
    playercardPressed = -1;
    placeholderPressed = -1;
    arrowPlayerCardSelected = -1;
    arrowPlaceholderCardSelected = -1;
    placeHolderMouseOverCardIndex = -1;
}

function removeCardFromArray(card, cardArr) {
    if (card === null) {
        return;
    }
    let index = -1;
    for (let i = 0; i < cardArr.length; i++) {
        if (card.value === cardArr[i].value &&
            card.suit === cardArr[i].suit) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        cardArr.splice(index, 1);
    }
}

function checkForFullHand(cardArr) {
    let acc = cardArr.length;
    while (acc < MAX_PLAYER_CARDS) {
        if (deckCards.length > 0) {
            cardArr[acc] = deckCards.shift();
            acc = cardArr.length;
        } else {
            if (doDebugLog) addLog("Out of Deck Cards");
            return;
        }
    }
}

function dealToPlayer1() {
    for (let i = 0; i < MAX_PLAYER_CARDS; i++) {
        player1Cards[i] = deckCards.shift();
    }
}

function dealToPlayer2() {
    for (let i = 0; i < MAX_PLAYER_CARDS; i++) {
        player2Cards[i] = deckCards.shift();
    }
}

function dealToPlayer3() {
    for (let i = 0; i < MAX_PLAYER_CARDS; i++) {
        player3Cards[i] = deckCards.shift();
    }
}

function dealToPlayer4() {
    for (let i = 0; i < MAX_PLAYER_CARDS; i++) {
        player4Cards[i] = deckCards.shift();
    }
}

function getPlayerCards() {
    switch (playerTurn) {
        case 0:
            return player1Cards;
        case 1:
            return player2Cards;
        case 2:
            return player3Cards;
        case 3:
            return player4Cards;
    }
}

function sortCardsAscendingOrder() {
    player1Cards = player1Cards.sort(function (a, b) {
        return a.value - b.value;
    });
    sortedByValue = true;

    player2Cards = player2Cards.sort(function (a, b) {
        return a.value - b.value;
    });

    player3Cards = player3Cards.sort(function (a, b) {
        return a.value - b.value;
    });

    player4Cards = player4Cards.sort(function (a, b) {
        return a.value - b.value;
    });
}

function sortCardsSuitAscendingOrder() {
    player1Cards = player1Cards.sort(function (a, b) {
        return a.suit - b.suit;
    });
    sortedByValue = false;

    player2Cards = player2Cards.sort(function (a, b) {
        return a.suit - b.suit;
    });

    player3Cards = player3Cards.sort(function (a, b) {
        return a.suit - b.suit;
    });

    player4Cards = player4Cards.sort(function (a, b) {
        return a.suit - b.suit;
    });
}

function organizePlayerCards() {
    switch (targetHand) {
        case 0:
            sortCardsAscendingOrder();
            break;
        case 1:
            sortCardsAscendingOrder();
            break;
        case 2:
            sortCardsAscendingOrder();
            break;
        case 3:
            sortCardsAscendingOrder();
            break;
        case 4:
            sortCardsAscendingOrder();
            //sortCardsSuitAscendingOrder();
            break;
        case 5:
            sortCardsAscendingOrder();
            break;
        case 6:
            sortCardsAscendingOrder();
            //sortCardsSuitAscendingOrder();
            break;
    }
}

function addCardToHand(card, cardArr) {
    if (card != null && cardArr != null) {
        cardArr.push(card);
    }
}

function sortCardsToggle() {
    if (sortedByValue) {
        sortCardsAscendingOrder();
        sortCardsSuitAscendingOrder();
    } else {
        sortCardsSuitAscendingOrder();
        sortCardsAscendingOrder();
    }

    drawBoard();
}

function getMaxPlaceHolderCards() {
    switch (targetHand) {
        case 0:
            return 1;
        case 1:
            return 2;
        case 2:
            return 3;
        case 3:
            return 5;
        case 4:
            return 5;
        case 5:
            return 4;
        case 6:
            return 5;
    }
}

function getCardImagePath(suit, value) {
    if (doDebugLog) addLog("getCardImagePath(" + suit + "," + value + ")");
    let path = "";
    switch (suit) {
        case 0:
            switch (value) {
                case 0:
                    path = 'assets/cards/2d.jpg';
                    break;
                case 1:
                    path = 'assets/cards/3d.jpg';
                    break;
                case 2:
                    path = 'assets/cards/4d.jpg';
                    break;
                case 3:
                    path = 'assets/cards/5d.jpg';
                    break;
                case 4:
                    path = 'assets/cards/6d.jpg';
                    break;
                case 5:
                    path = 'assets/cards/7d.jpg';
                    break;
                case 6:
                    path = 'assets/cards/8d.jpg';
                    break;
                case 7:
                    path = 'assets/cards/9d.jpg';
                    break;
                case 8:
                    path = 'assets/cards/10d2.jpg';
                    break;
                case 9:
                    path = 'assets/cards/jd.jpg';
                    break;
                case 10:
                    path = 'assets/cards/qd2.jpg';
                    break;
                case 11:
                    path = 'assets/cards/kd.jpg';
                    break;
                case 12:
                    path = 'assets/cards/ad.jpg';
                    break;
            }
            break;
        case 1:
            switch (value) {
                case 0:
                    path = 'assets/cards/2c.jpg';
                    break;
                case 1:
                    path = 'assets/cards/3c.jpg';
                    break;
                case 2:
                    path = 'assets/cards/4c.jpg';
                    break;
                case 3:
                    path = 'assets/cards/5c.jpg';
                    break;
                case 4:
                    path = 'assets/cards/6c.jpg';
                    break;
                case 5:
                    path = 'assets/cards/7c.jpg';
                    break;
                case 6:
                    path = 'assets/cards/8c.jpg';
                    break;
                case 7:
                    path = 'assets/cards/9c.jpg';
                    break;
                case 8:
                    path = 'assets/cards/10c2.jpg';
                    break;
                case 9:
                    path = 'assets/cards/jc.jpg';
                    break;
                case 10:
                    path = 'assets/cards/qc2.jpg';
                    break;
                case 11:
                    path = 'assets/cards/kc.jpg';
                    break;
                case 12:
                    path = 'assets/cards/ac.jpg';
                    break;
            }
            break;
        case 2:
            switch (value) {
                case 0:
                    path = 'assets/cards/2h.jpg';
                    break;
                case 1:
                    path = 'assets/cards/3h.jpg';
                    break;
                case 2:
                    path = 'assets/cards/4h.jpg';
                    break;
                case 3:
                    path = 'assets/cards/5h.jpg';
                    break;
                case 4:
                    path = 'assets/cards/6h.jpg';
                    break;
                case 5:
                    path = 'assets/cards/7h.jpg';
                    break;
                case 6:
                    path = 'assets/cards/8h.jpg';
                    break;
                case 7:
                    path = 'assets/cards/9h.jpg';
                    break;
                case 8:
                    path = 'assets/cards/10h2.jpg';
                    break;
                case 9:
                    path = 'assets/cards/jh.jpg';
                    break;
                case 10:
                    path = 'assets/cards/qh2.jpg';
                    break;
                case 11:
                    path = 'assets/cards/kh.jpg';
                    break;
                case 12:
                    path = 'assets/cards/ah.jpg';
                    break;
            }
            break;
        case 3:
            switch (value) {
                case 0:
                    path = 'assets/cards/2s.jpg';
                    break;
                case 1:
                    path = 'assets/cards/3s.jpg';
                    break;
                case 2:
                    path = 'assets/cards/4s.jpg';
                    break;
                case 3:
                    path = 'assets/cards/5s.jpg';
                    break;
                case 4:
                    path = 'assets/cards/6s.jpg';
                    break;
                case 5:
                    path = 'assets/cards/7s.jpg';
                    break;
                case 6:
                    path = 'assets/cards/8s.jpg';
                    break;
                case 7:
                    path = 'assets/cards/9s.jpg';
                    break;
                case 8:
                    path = 'assets/cards/10s2.jpg';
                    break;
                case 9:
                    path = 'assets/cards/js.jpg';
                    break;
                case 10:
                    path = 'assets/cards/qs2.jpg';
                    break;
                case 11:
                    path = 'assets/cards/ks.jpg';
                    break;
                case 12:
                    path = 'assets/cards/as.jpg';
                    break;
            }
            break;
    }

    return path;
}
