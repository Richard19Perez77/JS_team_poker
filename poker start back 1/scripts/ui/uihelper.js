function hideTutorial() {
  if ($("#loadingDiv").is(":hidden")) {
    if (tutorialDiv.hidden == false) {
      tutorialDiv.hidden = true;
      gameReady = true;
      drawBoard();
    }
  }
}

function adjustOffset() {
  var canvasOffset = $("#puzzleCanvas").offset();
  offsetX = Math.round(canvasOffset.left);
  offsetY = Math.round(canvasOffset.top);
}
