// callback function for image loaded increments count and check the count for ending 
// loading time
let imageLoaded = function () {
    imagesLoaded++;
    checkImagesLoadedCount();
}

// can set the game to not auto play with characters if you want all players to play
function setHumanPlayers(allHuman) {
    if (allHuman) {
        player1isPC = false;
        player2isPC = false;
        player3isPC = false;
        player4isPC = false;
    }
}

// can set up the canvas to accept mouse events
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
    loadingDiv = byId("loadingDiv");
    tutorialDiv = byId("tutorialDiv");

    let tutorialImage = byId("tutorialImage");
    tutorialImage.onload = imageLoaded;
    tutorialImage.src = "assets/images/tutorial.png";

    fadeIn(document.querySelector(".pageDivClass"), 500);
}

// add event listeners to window for keydown and keyup
function setupWindow() {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
}

// mobile website buttons are different than the regular web buttons
function setupMobileButtons() {
    setupIndexedButtons([
        "playerCardOneButton",
        "playerCardTwoButton",
        "playerCardThreeButton",
        "playerCardFourButton",
        "playerCardFiveButton",
        "playerCardSixButton",
        "playerCardSevenButton"
    ], playerCardPress);
}

// set up for empty cards to be played
function setupSlotButtons() {
    setupIndexedButtons([
        "slotOneButton",
        "slotTwoButton",
        "slotThreeButton",
        "slotFourButton",
        "slotFiveButton",
        "slotSixButton",
        "slotSevenButton"
    ], placeHolderPress);
}

// set up for window control elements
function setupControls() {
    tutorialDiv.addEventListener("click", function () {
        hideTutorial();
    });

    draggableControlsTextArea = byId("draggableControlsTextArea");
    makeDraggable(draggableControlsTextArea);

    controlText = byId("controlText");
    controlText.innerHTML = ruleLog;

    draggableScoreDiv = byId("draggableScoreDiv");
    makeDraggable(draggableScoreDiv);

    scoreText = byId("scoreText");
    activityLog = byId("activity");

    newGameButton = byId("newGameButton");
    newGameButton.addEventListener("click", function () {
        if (isPlayerTurn() || gameOver) {
            newGameClicked();
        }
    });

    endTurnButton = byId("endTurnButton");
    endTurnButton.addEventListener("click", function () {
        if (gameReady && isPlayerTurn()) {
            endTurnClicked();
        }
    });

    musicButton = byId("musicButton");
    musicButton.addEventListener("click", function () {
        if (gameReady && isPlayerTurn()) {
            musicButtonClicked();
        }
    });

    blogButton = byId("blogButton");
    blogButton.addEventListener("click", function () {
        if (gameReady && isPlayerTurn()) {
            blogButtonClicked();
        }
    });

    scoreButton = byId("scoreButton");
    scoreButton.addEventListener("click", function () {
        if (gameReady && isPlayerTurn()) {
            scoreButtonClicked();
        }
    });

    controlsButton = byId("controlsButton");
    controlsButton.addEventListener("click", function () {
        if (gameReady && isPlayerTurn()) {
            controlsButtonClicked();
        }
    });

    backImage.onload = imageLoaded;
    backImage.src = "assets/images/back1.png";
}

// set up game and call new game clicked when done
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

// clear canvas for fresh redraw on action
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
    if (!isElementAnimating(draggableControlsTextArea)) {
        if (isElementVisible(draggableScoreDiv)) {
            slideToggle(draggableScoreDiv, 100);
        }

        stopElementAnimations(draggableControlsTextArea);
        slideToggle(draggableControlsTextArea, 100, function () {
            if (isElementVisible(controlText)) {
                controlText.focus();
            }
        });
    }
}

function scoreButtonClicked() {
    if (!isElementAnimating(draggableScoreDiv)) {
        if (isElementVisible(draggableControlsTextArea)) {
            slideToggle(draggableControlsTextArea, 100);
        }

        stopElementAnimations(draggableScoreDiv);
        slideToggle(draggableScoreDiv, 100);
    }

    scoreButton.focus();
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

// when all images are loaded, slide up the loading div
function checkImagesLoadedCount() {
    if (imagesLoaded === IMAGES_TO_LOAD) {
        drawBoard();
        if (isElementVisible(loadingDiv)) {
            slideToggle(loadingDiv, 500);
        }
    }
}

function hideTutorial() {
    if (isElementHidden(loadingDiv)) {
        if (tutorialDiv.hidden === false) {
            if (isElementVisible(tutorialDiv) && !isElementAnimating(tutorialDiv)) {
                fadeOut(tutorialDiv, 300, function () {
                    tutorialDiv.hidden = true;
                    gameReady = true;
                    adjustOffset();
                    drawBoard();
                });
            }
        }
    }
}

// allow for screen manipulation and keep mouse in right place
function adjustOffset() {
    if (!canvas) {
        return;
    }
    const canvasOffset = getElementOffset(canvas);
    offsetX = Math.round(canvasOffset.left);
    offsetY = Math.round(canvasOffset.top);
}
