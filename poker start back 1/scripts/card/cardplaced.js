function cardPlacedAction() {
  cardSelected = -1;

  removeCardHighlights();

  cardPlayed = true;
  turnPassed = 0;

  totalScoreOfHands();

  drawBoard();
}

function removeCardHighlights(){
  playercardPressed = -1;
  placeholderPressed = -1;
  arrowPlayerCardSelected = -1;
  arrowPlaceholderCardSelected = -1;
  shiftPressed = false;
  placeHolderMouseOverCardIndex = -1;
}
