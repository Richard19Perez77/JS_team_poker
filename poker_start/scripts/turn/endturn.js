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

    if (doDebugLog) addLog("turn over || cardPlayed");
    if (playerTurnOver === true || cardPlayed === false) {

        // stop round after too many turns by pc
        if (cardPlayed === false) {
            turnPassed++;
        }

        if ((allCardsPlayed() && turnPassed === 3) ||
            (!allCardsPlayed() && turnPassed === 4)) {

            turnPassed = 0;
            targetHand++;
            if (doDebugLog) addLog("targetHand=" + targetHand);

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
