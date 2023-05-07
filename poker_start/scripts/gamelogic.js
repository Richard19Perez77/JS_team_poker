// starting point for scripts, init, and then interaction scripts
// for debug check flags in debug,

let imageLoaded = function () {
    imagesLoaded++;
    checkImagesLoadedCount();
}

function setHumanPlayers(allHuman) {
    if (allHuman) {
        player1isPC = false;
        player2isPC = false;
        player3isPC = false;
        player4isPC = false;
    }
}

function setupCanvas(document) {
    canvas = document.getElementById('canvasId');
    context = canvas.getContext('2d');
    context.font = "20px CustomFont";
    canvas.font = "20px CustomFont";

    // define canvas listeners for mouse interaction on the canvas
    canvas.addEventListener("mousedown", doMouseDown, false);
    canvas.addEventListener("mouseup", doMouseUp, false);
    canvas.addEventListener("mousemove", doMouseMove, false);
    canvas.addEventListener("mouseout", doMouseOut, false);
}

function setupDivs() {
    loadingDiv = $("#loadingDiv");
    jTutorialDiv = $("#tutorialDiv");

    let tutorialImage = $("#tutorialImage")[0];
    tutorialImage.src = "assets/images/tutorial.png"
    tutorialImage.onload = imageLoaded;

    let pageDivLocal = $(".pageDivClass");
    pageDivLocal.fadeIn(500, function () {
        $(this).css("display", "normal");
    });
}

function setupWindow() {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
}

function setupMobileButtons() {
    let playerCardOneButton = $("#playerCardOneButton")[0];
    if (playerCardOneButton != null) {
        playerCardOneButton.addEventListener("click", function () {
            playerCardPress(0);
        });
    }

    let playerCardTwoButton = $("#playerCardTwoButton")[0];
    if (playerCardTwoButton != null) {
        playerCardTwoButton.addEventListener("click", function () {
            playerCardPress(1);
        });
    }

    let playerCardThreeButton = $("#playerCardThreeButton")[0];
    if (playerCardThreeButton != null) {
        playerCardThreeButton.addEventListener("click", function () {
            playerCardPress(2);
        });
    }

    let playerCardFourButton = $("#playerCardFourButton")[0];
    if (playerCardFourButton != null) {
        playerCardFourButton.addEventListener("click", function () {
            playerCardPress(3);
        });
    }

    let playerCardFiveButton = $("#playerCardFiveButton")[0];
    if (playerCardFiveButton != null) {
        playerCardFiveButton.addEventListener("click", function () {
            playerCardPress(4);
        });
    }

    let playerCardSixButton = $("#playerCardSixButton")[0];
    if (playerCardSixButton != null) {
        playerCardSixButton.addEventListener("click", function () {
            playerCardPress(5);
        });
    }

    let playerCardSevenButton = $("#playerCardSevenButton")[0];
    if (playerCardSevenButton != null) {
        playerCardSevenButton.addEventListener("click", function () {
            playerCardPress(6);
        });
    }
}

function setupSlotButtons() {
    let slotOneButton = $("#slotOneButton")[0];
    if (slotOneButton != null) {
        slotOneButton.addEventListener("click", function () {
            placeHolderPress(0);
        });
    }

    let slotTwoButton = $("#slotTwoButton")[0];
    if (slotTwoButton != null) {
        slotTwoButton.addEventListener("click", function () {
            placeHolderPress(1);
        });
    }

    let slotThreeButton = $("#slotThreeButton")[0];
    if (slotThreeButton != null) {
        slotThreeButton.addEventListener("click", function () {
            placeHolderPress(2);
        });
    }

    let slotFourButton = $("#slotFourButton")[0];
    if (slotFourButton != null) {
        slotFourButton.addEventListener("click", function () {
            placeHolderPress(3);
        });
    }

    let slotFiveButton = $("#slotFiveButton")[0];
    if (slotFiveButton != null) {
        slotFiveButton.addEventListener("click", function () {
            placeHolderPress(4);
        });
    }

    let slotSixButton = $("#slotSixButton")[0];
    if (slotSixButton != null) {
        slotSixButton.addEventListener("click", function () {
            placeHolderPress(5);
        });
    }

    let slotSevenButton = $("#slotSevenButton")[0];
    if (slotSevenButton != null) {
        slotSevenButton.addEventListener("click", function () {
            placeHolderPress(6);
        });
    }
}

function setupControls() {
    tutorialDiv = jTutorialDiv[0];
    tutorialDiv.addEventListener('click', function (e) {
        hideTutorial();
    });

    draggableControlsTextArea = $(".draggableControlsTextArea");
    $(function () {
        draggableControlsTextArea.draggable();
    });

    controlText = $("#controlText");
    controlText[0].innerHTML = ruleLog;

    draggableScoreDiv = $(".draggableScoreDiv");
    $(function () {
        draggableScoreDiv.draggable();
    });

    scoreText = $("#scoreText")[0];
    activityLog = $("#activity")[0];

    newGameButton = $("#newGameButton")[0];
    newGameButton.addEventListener("click", function () {
        if (isPlayerTurn() || gameOver) {
            newGameClicked();
        }
    });

    endTurnButton = $("#endTurnButton")[0];
    endTurnButton.addEventListener("click", function () {
        if (gameReady && isPlayerTurn()) {
            endTurnClicked();
        }
    });

    musicButton = $("#musicButton")[0];
    musicButton.addEventListener("click", function () {
        if (gameReady && isPlayerTurn()) {
            musicButtonClicked();
        }
    });

    blogButton = $("#blogButton")[0];
    blogButton.addEventListener("click", function () {
        if (gameReady && isPlayerTurn()) {
            blogButtonClicked();
        }
    });

    scoreButton = $("#scoreButton");
    scoreButton[0].addEventListener("click", function () {
        if (gameReady && isPlayerTurn()) {
            scoreButtonClicked();
        }
    });

    controlsButton = $("#controlsButton")[0];
    controlsButton.addEventListener("click", function () {
        if (gameReady && isPlayerTurn()) {
            controlsButtonClicked();
        }
    });

    backImage.onload = imageLoaded;
    backImage.src = "assets/images/back1.png";
}

// for decks uncomment customDeck() types needed
function init(document) {
    setupCanvas(document);
    setupDivs();
    setupWindow();
    setupMobileButtons();

    setupSlotButtons();
    setupControls();

    setHumanPlayers(false);

    // screen resize offset adjustment
    adjustOffset();

    setDebugFlags(false);

    newGameClicked();
}

function clearCanvas() {
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

    if (topCardSelected === false) {

        // move cursor of player cards
        if (arrowPlayerCardSelected === -1) {

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

        if (arrowPlaceholderCardSelected === -1) {
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

    topCardSelected = false;

    if (arrowPlayerCardSelected === -1) {
        arrowPlayerCardSelected = 0;
    }

    drawBoard();
}

function downArrowListener() {
    playercardPressed = -1;
    placeholderPressed = -1;

    topCardSelected = true;

    //if no placeholder card is pressed select card 0
    if (arrowPlaceholderCardSelected === -1) {
        arrowPlaceholderCardSelected = 0;
    }

    drawBoard();
}

function rightArrowListener() {
    playercardPressed = -1;
    placeholderPressed = -1;

    if (topCardSelected === false) {

        //move cursor of player cards
        if (arrowPlayerCardSelected === -1) {

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
        if (arrowPlaceholderCardSelected === -1) {
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
    if (arrowPlayerCardSelected !== -1 && arrowPlaceholderCardSelected !== -1) {
        playercardPressed = arrowPlayerCardSelected;
        placeholderPressed = arrowPlaceholderCardSelected;

        moveCardFromKeyPress();

        arrowPlayerCardSelected = -1;
        arrowPlaceholderCardSelected = -1;
    }

    drawBoard();
}

function controlsButtonClicked() {
    if ($("#draggableControlsTextArea").is(':animated') === false) {

        if ($("#draggableScoreDiv").is(":visible")) {
            $("#draggableScoreDiv").slideToggle(100);
        }

        $("#draggableControlsTextArea").stop(true);
        $("#draggableControlsTextArea").slideToggle(100, function () {
            if ($("#controlText").is(":visible")) {
                $("#controlText").focus();
            }
        });
    }
}

function scoreButtonClicked() {
    if ($("#draggableScoreDiv").is(':animated') === false) {
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
    if (confirm("Do you want to site 'https://www.myabandonware.com/' ?")) {
        window.open("https://www.myabandonware.com/");
    }
}

function musicButtonClicked() {
    if (confirm("Do you want to hear more music at site 'https://freemusicarchive.org' ?")) {
        window.open("https://freemusicarchive.org/music/The_303/Brownian_Motion/");
    }
}

function checkImagesLoadedCount() {
    if (imagesLoaded === IMAGES_TO_LOAD) {
        drawBoard();
        if (loadingDiv.is(":visible")) {
            $("#loadingDiv").slideToggle(500);
        }
    }
}

function hideTutorial() {
    if (loadingDiv.is(":hidden")) {
        if (tutorialDiv.hidden === false) {
            if (jTutorialDiv.is(":visible") && jTutorialDiv.is(':animated') === false) {
                jTutorialDiv.fadeOut(300, function () {
                    tutorialDiv.hidden = true;
                    gameReady = true;
                    adjustOffset();
                    drawBoard();
                });
            }
        }
    }
}

function adjustOffset() {
    let canvasOffset = $("#canvasId").offset();
    offsetX = Math.round(canvasOffset.left);
    offsetY = Math.round(canvasOffset.top);
}
