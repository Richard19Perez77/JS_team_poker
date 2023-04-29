function playerCardPress(index) {
  arrowPlayerCardSelected = -1;
  arrowPlaceholderCardSelected = -1;

  if (getPlayerCards().length <= index) {
    return;
  }
  playercardPressed = index;

  drawBoard();
}

function placeHolderPress(index){
  arrowPlayerCardSelected = -1;
  arrowPlaceholderCardSelected = -1;

  if (playercardPressed !== -1) {
    placeholderPressed = index;
    //addLog("placeholderPressed" + placeholderPressed);
    moveCardFromKeyPress();
  }

  drawBoard();
}
