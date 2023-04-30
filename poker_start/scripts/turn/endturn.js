function endTurnClicked() {
    let playerTurnOver = false;

    // different hands types switch
    switch (targetHand) {
        case 0:
            playerTurnOver = true;
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            playerTurnOver = allCardsPlayed();
            break;
    }

    //addLog("turn over || cardPlayed");
    if (playerTurnOver === true || cardPlayed === false) {
        // cards have been played or the player didn't play a cards

        if (cardPlayed === false) {
            turnPassed++;
        }

        if ((allCardsPlayed() && turnPassed === 3) ||
            (!allCardsPlayed() && turnPassed === 4)) {

            turnPassed = 0;
            targetHand++;
            //addLog("targetHand=" + targetHand);

            checkForFullHand(player1Cards);
            checkForFullHand(player2Cards);
            checkForFullHand(player3Cards);
            checkForFullHand(player4Cards);
        }

        if (targetHand < 7) {
            incrementPlayerTurn();
        }

        organizePlayedCards();
        cardPlayed = false;

        removeCardHighlights();

        totalScoreOfHands();

        //sort players cards based on hand
        organizePlayerCards();

        drawBoard();

        //run end game score table
        if (targetHand === 7 && gameOver === false) {

            gameOver = true;

            addLog("Game Over: Press n to start new game!");

            if (doRunControlTest) {
                totalTestScores();
                gamesPlayed++;

                printTestScores();
                console.log(log);

                // run a new game
                if (gamesPlayed < gamesToPlay) {
                    newGameClicked();
                }
            } else {
                if ($("#draggableScoreDiv").is(":hidden")) {
                    $("#draggableScoreDiv").slideToggle(100);
                }
            }

            endTurnButton.disabled = true;

        } else if (isPlayerTurn() === false && targetHand <= 6) {
            playerMoveSwitch();
        }
    } else if (playerTurnOver === false && cardPlayed === true) {
        printMinimumCardPlay();
    }

    printLog();
}

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

        while (index >= 0) {
            switch (index) {
                case 0:
                    straightSlotCard1 = straightArray[0];
                    break;
                case 1:
                    straightSlotCard2 = straightArray[1];
                    break;
                case 2:
                    straightSlotCard3 = straightArray[2];
                    break;
                case 3:
                    straightSlotCard4 = straightArray[3];
                    break;
                case 4:
                    straightSlotCard5 = straightArray[4];
                    break;
            }
            index--;
        }
    }
}

function organizePlayedCards() {
    //addLog("organizePlayedCards()");

    organize3k();
    organizeStraight();
    organizeFlush();
    organize4k();
    organizeStraightFlush();
}

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

function organize4k() {
    //addLog("organize4k()");
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
}

function organize3k() {
    //addLog("organize4k()");
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
