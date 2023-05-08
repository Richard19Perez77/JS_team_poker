function newGameClicked() {

  totalHighScore = 0;

  valueArr4k.clear();
  suitArr4k.clear();

  $("#endTurnButton").focus();

  endTurnButton.disabled = false;

  if ($("#draggableControlsTextArea").is(":visible")) {
    $("#draggableControlsTextArea").slideToggle(100);
  }

  if ($("#draggableScoreDiv").is(":visible")) {
    $("#draggableScoreDiv").slideToggle(100);
  }

  log = "";

  sortBySuit = false;

  playerTurn = 0;

  deckCards = [];

  player1Cards = [];
  player2Cards = [];
  player3Cards = [];
  player4Cards = [];

  targetHand = 0;
  cardSelected = -1;
  handPasses = 0;
  turnPassed = 0;

  hcSlotCard = null;

  twoPSlotCard1 = null;
  twoPSlotCard2 = null;

  threePSlotCard1 = null;
  threePSlotCard2 = null;
  threePSlotCard3 = null;

  straightSlotCard1 = null;
  straightSlotCard2 = null;
  straightSlotCard3 = null;
  straightSlotCard4 = null;
  straightSlotCard5 = null;

  flushSlotCard1 = null;
  flushSlotCard2 = null;
  flushSlotCard3 = null;
  flushSlotCard4 = null;
  flushSlotCard5 = null;

  fourkSlotCard1 = null;
  fourkSlotCard2 = null;
  fourkSlotCard3 = null;
  fourkSlotCard4 = null;

  strFlushSlotCard1 = null;
  strFlushSlotCard2 = null;
  strFlushSlotCard3 = null;
  strFlushSlotCard4 = null;
  strFlushSlotCard5 = null;

  cardPlayed = false;

  removeCardHighlights();

  createCardDeck();
  randomizeDeck();

  customDeck();

  dealToPlayer1();
  dealToPlayer2();
  dealToPlayer3();
  dealToPlayer4();

  organizePlayerCards();

  gameOver = false;

  if (doLogPlayerTurn === true && playerTurn === 0) {
    addLog("Player " + (playerTurn + 1) + ": " + printTargetHand());
    printLog();
  }

  //auto start first player
  if (isPlayerTurn()) {
    endTurnButton.disabled = false;
  } else {
    //endTurnButton.disabled = true;
    playerMoveSwitch();
  }

  drawBoard();
}
