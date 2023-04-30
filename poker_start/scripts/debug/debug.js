function setDebugFlags() {

  // if you need a specific custom deck, make to win or lose a particular hand
  // uncomment createDeck() options in deck.js

  // test count of games to average scores and hands
  // default         false
  doRunControlTest = true;
  gamesToPlay = 1000;

  // show cards ui during testing
  // default false
  doShowUIDuringTest = false;

  //auto move all card placements:
  // default     false
  allPCPlayers = false;

  // never use auto move if on:
  // default        false
  allHumanPlayers = false;

  // log the cards placed in activity box:
  // default         true
  doLogPlacedCards = true;

  // log player turn log:
  // default        true
  doLogPlayerTurn = true;

  // log details of card comparing:
  // default         false
  doLogCardDetails = false;

  // auto hide the opening tutorial wallpaper
  // default           false
  doAutoHideTutorial = false;

  // change for fast pc turn move
  // default      100
  PC_TURN_DELAY = 50;

  // defaults true
  runAutoHc = true;
  runAuto2k = true;
  runAuto3k = true;
  runAutoSt = true;
  runAutoFl = true;
  runAuto4k = true;
  runAutoSF = true;

  setPcPlayers();
  hideDebugTutorial();
  setTestElements();
  setHumanPlayers();
}

function setHumanPlayers() {
  if (allHumanPlayers) {
    player1isPC = false;
    player2isPC = false;
    player3isPC = false;
    player4isPC = false;
  }
}

function setTestElements() {
  if (doRunControlTest === true) {
    PC_TURN_DELAY = 0;
    activityLog.readOnly = false;
    allPCPlayers = true;
    setPcPlayers();
    doAutoHideTutorial = true;
    hideDebugTutorial();
  }
}

function setPcPlayers() {
  if (allPCPlayers === true) {
    player1isPC = true;
    player2isPC = true;
    player3isPC = true;
    player4isPC = true;
    doAutoHideTutorial = true;
    hideDebugTutorial();
    PC_TURN_DELAY = 0;
  }
}

function hideDebugTutorial() {
  if (doAutoHideTutorial) {
    tutorialDiv.hidden = true;
  }
}
