function init(document) {
  canvas = document.getElementById('puzzleCanvas');

  var tutorialImage = $("#tutorialImage")[0];
  tutorialImage.src = "images/tutorial.png"
  tutorialImage.onload = function() {
    imagesLoaded++;
    checkImagesLoadedCount();
    drawBoard();
  }

  $("#pageDiv").fadeIn(500, function() {
    $(this).css("display", "normal");
  });

  window.addEventListener("keydown", onKeyDown);

  playerCardOneButton = $("#playerCardOneButton")[0];
  if (playerCardOneButton != null) {
    playerCardOneButton.addEventListener("click", function() {
      playerCardPress(0);
    });
  }

  playerCardTwoButton = $("#playerCardTwoButton")[0];
  if (playerCardTwoButton != null) {
    playerCardTwoButton.addEventListener("click", function() {
      playerCardPress(1);
    });
  }

  playerCardThreeButton = $("#playerCardThreeButton")[0];
  if (playerCardThreeButton != null) {
    playerCardThreeButton.addEventListener("click", function() {
      playerCardPress(2);
    });
  }

  playerCardFourButton = $("#playerCardFourButton")[0];
  if (playerCardFourButton != null) {
    playerCardFourButton.addEventListener("click", function() {
      playerCardPress(3);
    });
  }

  playerCardFiveButton = $("#playerCardFiveButton")[0];
  if (playerCardFiveButton != null) {
    playerCardFiveButton.addEventListener("click", function() {
      playerCardPress(4);
    });
  }

  playerCardSixButton = $("#playerCardSixButton")[0];
  if (playerCardSixButton != null) {
    playerCardSixButton.addEventListener("click", function() {
      playerCardPress(5);
    });
  }

  playerCardSevenButton = $("#playerCardSevenButton")[0];
  if (playerCardSevenButton != null) {
    playerCardSevenButton.addEventListener("click", function() {
      playerCardPress(6);
    });
  }

  slotOneButton = $("#slotOneButton")[0];
  if (slotOneButton != null) {
    slotOneButton.addEventListener("click", function() {
      placeHolderPress(0);
    });
  }

  slotTwoButton = $("#slotTwoButton")[0];
  if (slotTwoButton != null) {
    slotTwoButton.addEventListener("click", function() {
      placeHolderPress(1);
    });
  }

  slotThreeButton = $("#slotThreeButton")[0];
  if (slotThreeButton != null) {
    slotThreeButton.addEventListener("click", function() {
      placeHolderPress(2);
    });
  }

  slotFourButton = $("#slotFourButton")[0];
  if (slotFourButton != null) {
    slotFourButton.addEventListener("click", function() {
      placeHolderPress(3);
    });
  }

  slotFiveButton = $("#slotFiveButton")[0];
  if (slotFiveButton != null) {
    slotFiveButton.addEventListener("click", function() {
      placeHolderPress(4);
    });
  }

  slotSixButton = $("#slotSixButton")[0];
  if (slotSixButton != null) {
    slotSixButton.addEventListener("click", function() {
      placeHolderPress(5);
    });
  }

  slotSevenButton = $("#slotSevenButton")[0];
  if (slotSevenButton != null) {
    slotSevenButton.addEventListener("click", function() {
      placeHolderPress(6);
    });
  }

  tutorialDiv = $("#tutorialDiv")[0];
  tutorialDiv.addEventListener('click', function(e) {
    hideTutorial();
  });

  $(function() {
    $("#draggableControlsTextArea").draggable();
  });
  $("#controlText")[0].innerHTML = ruleLog;

  $(function() {
    $("#draggableScoreDiv").draggable();
  });

  scoreText = $("#scoreText")[0];

  activityLog = $("#activity")[0];

  newGameButton = $("#newGameButton")[0];
  newGameButton.addEventListener("click", function() {
    newGameClicked();
  });

  endTurnButton = $("#endTurnButton")[0];
  endTurnButton.addEventListener("click", function() {
    endTurnClicked();
  });

  musicButton = $("#musicButton")[0];
  musicButton.addEventListener("click", function() {
    musicButtonClicked();
  });

  blogButton = $("#blogButton")[0];
  blogButton.addEventListener("click", function() {
    blogButtonClicked();
  });

  scoreButton = $("#scoreButton")[0];
  scoreButton.addEventListener("click", function() {
    scoreButtonClicked();
  });

  controlsButton = $("#controlsButton")[0];
  controlsButton.addEventListener("click", function() {
    controlsButtonClicked();
  });

  adjustOffset();

  // define canvas listeners for mouse interaction on the canvas
  canvas.addEventListener("mousedown", doMouseDown, false);
  canvas.addEventListener("mouseup", doMouseUp, false);
  canvas.addEventListener("mousemove", doMouseMove, false);
  canvas.addEventListener("mouseout", doMouseOut, false);

  context = canvas.getContext('2d');
  context.font = "20px CustomFont";

  backImage.onload = function() {
    imagesLoaded++;
    checkImagesLoadedCount();
    drawBoard();
  }
  backImage.src = "images/back1.png";

  setDebugFlags();

  newGameClicked();
}

function clearCanvas() {
  context = canvas.getContext('2d');
  context.save();

  // Use the identity matrix while clearing the canvas
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Restore the transform
  context.restore();
}

function leftArrowListener() {
  playercardPressed = -1;
  placeholderPressed = -1;

  if (shiftPressed == false) {

    // move cursor of player cards
    if (arrowPlayerCardSelected == -1) {

      //select first player card not null
      if (getPlayerCards().length > 0) {
        arrowPlayerCardSelected = 0;
      }
    } else {
      arrowPlayerCardSelected--;
      if (arrowPlayerCardSelected < 0) {
        arrowPlayerCardSelected = getPlayerCards().length - 1;
      }
    }
  } else {

    // move cursor of placeholder cards

    if (arrowPlaceholderCardSelected == -1) {
      arrowPlaceholderCardSelected = 0;
    } else {
      arrowPlaceholderCardSelected--;
      if (arrowPlaceholderCardSelected < 0) {
        arrowPlaceholderCardSelected = getMaxPlaceHolderCards() - 1;
      }
    }
  }

  drawBoard();
}

function upArrowListener() {
  playercardPressed = -1;
  placeholderPressed = -1;

  shiftPressed = false;

  if (arrowPlayerCardSelected == -1) {
    arrowPlayerCardSelected = 0;
  }

  drawBoard();
}

function downArrowListener() {
  playercardPressed = -1;
  placeholderPressed = -1;

  shiftPressed = true;

  //if no placeholder card is pressed select card 0
  if (arrowPlaceholderCardSelected == -1) {
    arrowPlaceholderCardSelected = 0;
  }

  drawBoard();
}

function rightArrowListener() {
  playercardPressed = -1;
  placeholderPressed = -1;

  if (shiftPressed == false) {

    //move cursor of player cards
    if (arrowPlayerCardSelected == -1) {

      //select first player card not null
      if (getPlayerCards().length > 0) {
        arrowPlayerCardSelected = 0;
      }
    } else {
      arrowPlayerCardSelected++;
      if (arrowPlayerCardSelected > getPlayerCards().length - 1) {
        arrowPlayerCardSelected = 0;
      }
    }
  } else {

    //move cursor of placeholder cards
    if (arrowPlaceholderCardSelected == -1) {
      arrowPlaceholderCardSelected = 0;
    } else {
      arrowPlaceholderCardSelected++;
      if (arrowPlaceholderCardSelected > getMaxPlaceHolderCards() - 1) {
        arrowPlaceholderCardSelected = 0;
      }
    }
  }

  drawBoard();
}

function controlListener() {
  playercardPressed = -1;
  placeholderPressed = -1;

  // perform card swap
  if (arrowPlayerCardSelected != -1 && arrowPlaceholderCardSelected != -1) {
    playercardPressed = arrowPlayerCardSelected;
    placeholderPressed = arrowPlaceholderCardSelected;

    moveCardFromKeyPress();

    arrowPlayerCardSelected = -1;
    arrowPlaceholderCardSelected = -1;
    shiftPressed = false;
  }

  drawBoard();
}

function shiftListener() {
  playercardPressed = -1;
  placeholderPressed = -1;

  if (shiftPressed == true) {
    shiftPressed = false;
  } else {
    shiftPressed = true;

    //if no placeholder card is pressed select card 0
    if (arrowPlaceholderCardSelected == -1) {
      arrowPlaceholderCardSelected = 0;
    }
  }

  drawBoard();
}

function controlsButtonClicked() {
  if ($("#draggableControlsTextArea").is(':animated') == false) {

    if ($("#draggableScoreDiv").is(":visible")) {
      $("#draggableScoreDiv").slideToggle(100);
    }

    $("#draggableControlsTextArea").stop(true);
    $("#draggableControlsTextArea").slideToggle(100, function() {
      if ($("#controlText").is(":visible")) {
        $("#controlText").focus();
      }
    });
  }
}

function scoreButtonClicked() {
  if ($("#draggableScoreDiv").is(':animated') == false) {
    totalScoreOfHands();

    if ($("#draggableControlsTextArea").is(":visible")) {
      $("#draggableControlsTextArea").slideToggle(100);
    }

    $("#draggableScoreDiv").stop(true);
    $("#draggableScoreDiv").slideToggle(100);
  }

  $("#scoreButton").focus();
}

function blogButtonClicked() {
  if (confirm("Do you want to go to my blog at site 'http://www.artinapplications.com' ?")) {
    window.open("http://www.artinapplications.com");
  }
}

function musicButtonClicked() {
  if (confirm("Do you want to hear more music at site 'https://freemusicarchive.org' ?")) {
    window.open("http://freemusicarchive.org/music/The_303/Brownian_Motion/");
  }
}

function checkImagesLoadedCount() {
  if (imagesLoaded == IMAGES_TO_LOAD) {
    if ($("#loadingDiv").is(":visible")) {
      $("#loadingDiv").slideToggle(1000);
    }
  }
}
