function playerCardPress(index) {
  arrowPlayerCardSelected = -1;
  arrowPlaceholderCardSelected = -1;
  shiftPressed == false

  if (getPlayerCards().length <= index) {
    return;
  }
  playercardPressed = index;

  drawBoard();
}

function placeHolderPress(index){
  arrowPlayerCardSelected = -1;
  arrowPlaceholderCardSelected = -1;
  shiftPressed == false

  if (playercardPressed != -1) {
    placeholderPressed = index;
    //addLog("placeholderPressed" + placeholderPressed);
    moveCardFromKeyPress();
  }

  drawBoard();
}
