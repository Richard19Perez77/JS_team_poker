function cardPlacedAction() {
    cardSelected = -1;

    removeCardHighlights();

    cardPlayed = true;
    turnPassed = 0;

    totalScoreOfHands();

    drawBoard();
}
