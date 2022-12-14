function doMouseDown(event) {
  //addDebugLog("mouse down x=" + mouseX + " , y=" + mouseY);
  if (isPlayerTurn() && tutorialDiv.hidden == true) {
    mouseX = event.clientX - offsetX;
    mouseY = event.clientY - offsetY;
    //addLog("mouse down x=" + mouseX + " , y=" + mouseY);
    cardClickedOn();
    //addLog("mouse down cardSelected=" + cardSelected);

    removeCardHighlights();

    drawBoard();
  }
}

function doMouseMove(event) {
  //addDebugLog("mouse move x=" + mouseX + " , y=" + mouseY);
  if (isPlayerTurn() && tutorialDiv.hidden == true && cardSelected != -1) {
    //addLog("mouse move cardSelected=" + cardSelected);
    mouseX = event.clientX - offsetX;
    mouseY = event.clientY - offsetY;
    placeHolderMouseOverCardIndex = placeholderMoveOn();
    drawBoard();
    drawMovingCard();
  }
}

function doMouseUp(event) {
  if (isPlayerTurn() && tutorialDiv.hidden == true) {
    //addLog("mouse up in cardSelected=" + cardSelected);
    mouseX = event.clientX - offsetX;
    mouseY = event.clientY - offsetY;
    placeholderClickedOn();

    drawBoard();
    cardSelected = -1;
    //addLog("mouse up out cardSelected=" + cardSelected);
  }
}

function doMouseOut(event) {
  if (isPlayerTurn() && tutorialDiv.hidden == true) {
    cardSelected = -1;
    drawBoard();
  }
}
