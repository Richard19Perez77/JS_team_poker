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

    canvas.style.touchAction = "none";

    canvas.addEventListener("pointerdown", doPointerDown, false);
    canvas.addEventListener("pointermove", doPointerMove, false);
    canvas.addEventListener("pointerup", doPointerUp, false);
    canvas.addEventListener("pointercancel", doPointerCancel, false);
}

function setupDivs() {
    loadingDiv = byId("loadingDiv");
    tutorialDiv = byId("tutorialDiv");

    let tutorialImage = byId("tutorialImage");
    tutorialImage.onload = imageLoaded;
    tutorialImage.src = "assets/images/tutorial.png";

    fadeIn(document.querySelector(".pageDivClass"), 500, onViewportChange);
}

// add event listeners to window for keydown and keyup
function setupWindow() {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onViewportChange);
    window.addEventListener("orientationchange", onViewportChange);
    if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", onViewportChange);
    }
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
    if (!isMobileLayout) {
        makeDraggable(draggableControlsTextArea);
    }

    controlText = byId("controlText");
    controlText.innerHTML = ruleLog;

    draggableScoreDiv = byId("draggableScoreDiv");
    if (!isMobileLayout) {
        makeDraggable(draggableScoreDiv);
    } else {
        setupMobileFlyoutDismiss(draggableControlsTextArea);
        setupMobileFlyoutDismiss(draggableScoreDiv);
    }

    scoreText = byId("scoreText");
    activityLog = byId("activity");

    newGameButton = byId("newGameButton");
    newGameButton.addEventListener("click", function () {
        userRequestedNewGame();
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
        if (gameReady && (isPlayerTurn() || doRunControlTest)) {
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

    if (isMobileLayout) {
        setupTitleTestGesture();
    }
}

function setupTitleTestGesture() {
    const titleDiv = byId("titleDiv");
    if (!titleDiv) {
        return;
    }

    const tapTarget = 7;
    const tapWindowMs = 1000;
    let tapCount = 0;
    let lastTapTime = 0;

    titleDiv.addEventListener("click", function () {
        if (!gameReady) {
            return;
        }

        const now = Date.now();
        if (now - lastTapTime > tapWindowMs) {
            tapCount = 0;
        }
        lastTapTime = now;
        tapCount++;

        if (tapCount >= tapTarget) {
            tapCount = 0;
            startControlTest();
        }
    });
}

// set up game and call new game clicked when done
function init(document) {
    setupCanvas(document);
    if (isMobileLayout) {
        applyMobileBoardLayout();
    }
    setupDivs();
    setupWindow();
    setupMobileButtons();

    setupSlotButtons();
    setupControls();

    setHumanPlayers(false);

    onViewportChange();

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

function hideFlyout(el) {
    if (!el || isElementHidden(el) || isElementAnimating(el)) {
        return;
    }
    if (el === draggableScoreDiv && gameOver && !doRunControlTest) {
        newGameClicked();
        return;
    }
    slideToggle(el, 100);
}

function setupMobileFlyoutDismiss(el) {
    if (!el) {
        return;
    }
    el.addEventListener("click", function () {
        hideFlyout(el);
    });
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
                    onViewportChange();
                    drawBoard();
                });
            }
        }
    }
}

function applyMobileBoardLayout() {
    const slotW = 80;
    const slotH = 100;
    const gap = 5;
    const startX = 40;
    const startY = 135;
    const rowH = slotH + gap;

    function place(col, row) {
        const x1 = startX + col * (slotW + gap);
        const y1 = startY + row * rowH;
        return {
            x1: x1,
            x2: x1 + slotW,
            y1: y1,
            y2: y1 + slotH
        };
    }

    // HC, 2K, 3K, ST, FL, 4K, SF stacked as one column.
    hcX1 = place(0, 0).x1; hcX2 = place(0, 0).x2; hcY1 = place(0, 0).y1; hcY2 = place(0, 0).y2;

    twokX1a = place(0, 1).x1; twokX2a = place(0, 1).x2; twokY1a = place(0, 1).y1; twokY2a = place(0, 1).y2;
    twokX1b = place(1, 1).x1; twokX2b = place(1, 1).x2; twokY1b = place(1, 1).y1; twokY2b = place(1, 1).y2;

    threekX1a = place(0, 2).x1; threekX2a = place(0, 2).x2; threekY1a = place(0, 2).y1; threekY2a = place(0, 2).y2;
    threekX1b = place(1, 2).x1; threekX2b = place(1, 2).x2; threekY1b = place(1, 2).y1; threekY2b = place(1, 2).y2;
    threekX1c = place(2, 2).x1; threekX2c = place(2, 2).x2; threekY1c = place(2, 2).y1; threekY2c = place(2, 2).y2;

    straightX1a = place(0, 3).x1; straightX2a = place(0, 3).x2; straightY1a = place(0, 3).y1; straightY2a = place(0, 3).y2;
    straightX1b = place(1, 3).x1; straightX2b = place(1, 3).x2; straightY1b = place(1, 3).y1; straightY2b = place(1, 3).y2;
    straightX1c = place(2, 3).x1; straightX2c = place(2, 3).x2; straightY1c = place(2, 3).y1; straightY2c = place(2, 3).y2;
    straightX1d = place(3, 3).x1; straightX2d = place(3, 3).x2; straightY1d = place(3, 3).y1; straightY2d = place(3, 3).y2;
    straightX1e = place(4, 3).x1; straightX2e = place(4, 3).x2; straightY1e = place(4, 3).y1; straightY2e = place(4, 3).y2;

    flushX1a = place(0, 4).x1; flushX2a = place(0, 4).x2; flushY1a = place(0, 4).y1; flushY2a = place(0, 4).y2;
    flushX1b = place(1, 4).x1; flushX2b = place(1, 4).x2; flushY1b = place(1, 4).y1; flushY2b = place(1, 4).y2;
    flushX1c = place(2, 4).x1; flushX2c = place(2, 4).x2; flushY1c = place(2, 4).y1; flushY2c = place(2, 4).y2;
    flushX1d = place(3, 4).x1; flushX2d = place(3, 4).x2; flushY1d = place(3, 4).y1; flushY2d = place(3, 4).y2;
    flushX1e = place(4, 4).x1; flushX2e = place(4, 4).x2; flushY1e = place(4, 4).y1; flushY2e = place(4, 4).y2;

    fourkX1a = place(0, 5).x1; fourkX2a = place(0, 5).x2; fourkY1a = place(0, 5).y1; fourkY2a = place(0, 5).y2;
    fourkX1b = place(1, 5).x1; fourkX2b = place(1, 5).x2; fourkY1b = place(1, 5).y1; fourkY2b = place(1, 5).y2;
    fourkX1c = place(2, 5).x1; fourkX2c = place(2, 5).x2; fourkY1c = place(2, 5).y1; fourkY2c = place(2, 5).y2;
    fourkX1d = place(3, 5).x1; fourkX2d = place(3, 5).x2; fourkY1d = place(3, 5).y1; fourkY2d = place(3, 5).y2;

    strFlushX1a = place(0, 6).x1; strFlushX2a = place(0, 6).x2; strFlushY1a = place(0, 6).y1; strFlushY2a = place(0, 6).y2;
    strFlushX1b = place(1, 6).x1; strFlushX2b = place(1, 6).x2; strFlushY1b = place(1, 6).y1; strFlushY2b = place(1, 6).y2;
    strFlushX1c = place(2, 6).x1; strFlushX2c = place(2, 6).x2; strFlushY1c = place(2, 6).y1; strFlushY2c = place(2, 6).y2;
    strFlushX1d = place(3, 6).x1; strFlushX2d = place(3, 6).x2; strFlushY1d = place(3, 6).y1; strFlushY2d = place(3, 6).y2;
    strFlushX1e = place(4, 6).x1; strFlushX2e = place(4, 6).x2; strFlushY1e = place(4, 6).y1; strFlushY2e = place(4, 6).y2;

    GAME_CANVAS_WIDTH = 600;
    GAME_CANVAS_HEIGHT = startY + 7 * rowH + 10;
    turnModuleX = GAME_CANVAS_WIDTH - TURN_MODULE_WIDTH - 10;
    turnModuleY = startY;
    canvas.width = GAME_CANVAS_WIDTH;
    canvas.height = GAME_CANVAS_HEIGHT;
    context.font = "20px CustomFont";
}

function fitGameLayout() {
    if (!canvas || !isMobileLayout) {
        return;
    }

    const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
    const maxWidth = Math.max(viewportWidth - 16, 160);
    const scale = Math.min(maxWidth / GAME_CANVAS_WIDTH, 1);

    canvas.style.width = Math.floor(GAME_CANVAS_WIDTH * scale) + "px";
    canvas.style.height = Math.floor(GAME_CANVAS_HEIGHT * scale) + "px";
}

function onViewportChange() {
    fitGameLayout();
    adjustOffset();
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
