var player1isPC = false;
var player2isPC = true;
var player3isPC = true;
var player4isPC = true;

var gameReady = false;
var gameOver = false;

var highScore = 0;
var sortBySuit = false;

var PC_TURN_DELAY = 1000;
var MAX_PLAYER_CARDS = 7;

var backImage = new Image();
var loadingDiv;
var imagesLoaded = 0;
var IMAGES_TO_LOAD = 30;

var HC_BONUS = 25;
var TWO_K_BONUS = 50;
var THREE_K_BONUS = 75;
var STRAIGHT_BONUS = 125;
var FLUSH_BONUS = 175;
var FOUR_K_BONUS = 300;
var STRAIGHT_FLUSH_BONUS = 500;

var selectLeftButton;
var selectRightButton;
var shiftButton;

var placeHolderMouseOverCardIndex = -1;

var allHumanPlayers = false;

var player1Name = 1;
var player2Name = "PC";
var player3Name = "PC";
var player4Name = "PC";

var cardPlayed = false;
var playercardPressed = -1;
var placeholderPressed = -1;
var arrowPlayerCardSelected = -1;
var arrowPlaceholderCardSelected = -1;
var shiftPressed = false;

var testTimeEnd;
var testTimeStart = new Date().getTime();
var perfectGames = 0;

var spanL1 = "<span style='float: left;'>";
var spanR1 = "<span style='float: right;'>";
var endSpan = "</span>";
var br = "<br>";

var ruleLog = "MOUSE CONTROLS" + br + br;
ruleLog = ruleLog + spanL1 + "Drag and Drop Cards." + endSpan + br + br;

ruleLog = ruleLog + "KEYBOARD CONTROLS" + br + br;

ruleLog = ruleLog + spanL1 + "->" + endSpan + spanR1 + "Choose card right" + endSpan + br;
ruleLog = ruleLog + spanL1 + "<-" + endSpan + spanR1 + "Choose card left" + endSpan + br;
ruleLog = ruleLog + spanL1 + "Up Arrow" + endSpan + spanR1 + "Player card list" + endSpan + br;
ruleLog = ruleLog + spanL1 + "Down Arrow" + endSpan + spanR1 + "Slot card list" + endSpan + br;
ruleLog = ruleLog + spanL1 + "CONTROL" + endSpan + spanR1 + "Move card to slot" + endSpan + br + br;

ruleLog = ruleLog + "or" + br + br;

ruleLog = ruleLog + spanL1 + "1 2 3 4 5 6 7" + endSpan + spanR1 + "Choose card" + endSpan + br;
ruleLog = ruleLog + spanL1 + "a s d f g" + endSpan + spanR1 + "Move card to slot" + endSpan + br + br;

ruleLog = ruleLog + "BUTTON HOTKEYS" + br + br;
ruleLog = ruleLog + spanL1 + "e" + endSpan + spanR1 + "End turn" + endSpan + br;
ruleLog = ruleLog + spanL1 + "r" + endSpan + spanR1 + "Organize cards" + endSpan + br;
ruleLog = ruleLog + spanL1 + "x" + endSpan + spanR1 + "Read score" + endSpan + br;
ruleLog = ruleLog + spanL1 + "c" + endSpan + spanR1 + "Read controls" + endSpan + br;
ruleLog = ruleLog + spanL1 + "w" + endSpan + spanR1 + "New game" + endSpan + br;
ruleLog = ruleLog + spanL1 + "m" + endSpan + spanR1 + "More music" + endSpan + br;
ruleLog = ruleLog + spanL1 + "b" + endSpan + spanR1 + "My blog" + endSpan + br;

var scoreText;

var sortedByValue = true;

var canvas;
var newGameButton;
var controlsButton;
var endTurnButton;
var musicButton;
var blogButton;
var scoreButton;
var activityLog;
var tutorialDiv;
var log = "";
var context;
var mouseX = 0;
var mouseY = 0;
var offsetX = 0;
var offsetY = 0;

var turnPassed = 0;

var myGreen = "#009933";
var myBlue = "#330099";
var myBlack = "#000000";

var totalScore = 0;

var cardOffsetX = 0;
var cardOffsetY = 0;

var club = 0;
var diamond = 1;
var heart = 2;
var spade = 3;

var logCount = 0;
var playerTurn = 0;

var deckCards = [];

var player1Cards = [];
var player2Cards = [];
var player3Cards = [];
var player4Cards = [];

var targetHand = 0;
var cardSelected = -1;

var card1x1 = 0;
var card1x2 = 80;
var card1y1 = 0;
var card1y2 = 100;

var card2x1 = 85;
var card2x2 = 165;
var card2y1 = 0;
var card2y2 = 100;

var card3x1 = 170;
var card3x2 = 250;
var card3y1 = 0;
var card3y2 = 100;

var card4x1 = 255;
var card4x2 = 335;
var card4y1 = 0;
var card4y2 = 100;

var card5x1 = 340;
var card5x2 = 420;
var card5y1 = 0;
var card5y2 = 100;

var card6x1 = 425;
var card6x2 = 505;
var card6y1 = 0;
var card6y2 = 100;

var card7x1 = 510;
var card7x2 = 595;
var card7y1 = 0;
var card7y2 = 100;

// high card location
var hcX1 = 40;
var hcX2 = 120;
var hcY1 = 135;
var hcY2 = 235;

// 2K card locations
//context.rect(40, 240, 80, 100);
var twokX1a = 40;
var twokX2a = 120;
var twokY1a = 240;
var twokY2a = 340;

//context.rect(125, 240, 80, 100);
var twokX1b = 125;
var twokX2b = 205;
var twokY1b = 240;
var twokY2b = 340;

// 2K card locations
var twokX1a = 40;
var twokX2a = 120;
var twokY1a = 240;
var twokY2a = 340;

var twokX1b = 125;
var twokX2b = 205;
var twokY1b = 240;
var twokY2b = 340;

var twokX1b = 125;
var twokX2b = 205;
var twokY1b = 240;
var twokY2b = 340;

//3k card placeholder locations
var threekX1a = 40;
var threekX2a = 120;
var threekY1a = 345;
var threekY2a = 445;

var threekX1b = 125;
var threekX2b = 205;
var threekY1b = 345;
var threekY2b = 445;

var threekX1c = 210;
var threekX2c = 290;
var threekY1c = 345;
var threekY2c = 445;

var hcSlotCard = null;

var twoPSlotCard1 = null;
var twoPSlotCard2 = null;

var threePSlotCard1 = null;
var threePSlotCard2 = null;
var threePSlotCard3 = null;

//straight card placeholder locations
var straightX1a = 40;
var straightX2a = 120;
var straightY1a = 450;
var straightY2a = 550;

var straightX1b = 125;
var straightX2b = 205;
var straightY1b = 450;
var straightY2b = 550;

var straightX1c = 210;
var straightX2c = 290;
var straightY1c = 450;
var straightY2c = 550;

var straightX1d = 295;
var straightX2d = 375;
var straightY1d = 450;
var straightY2d = 550;

var straightX1e = 380;
var straightX2e = 460;
var straightY1e = 450;
var straightY2e = 550;

var straightSlotCard1 = null;
var straightSlotCard2 = null;
var straightSlotCard3 = null;
var straightSlotCard4 = null;
var straightSlotCard5 = null;

//flush card placeholders
var flushX1a = 515;
var flushX2a = 595;
var flushY1a = 240;
var flushY2a = 340;

var flushX1b = 600;
var flushX2b = 680;
var flushY1b = 240;
var flushY2b = 340;

var flushX1c = 685;
var flushX2c = 765;
var flushY1c = 240;
var flushY2c = 340;

var flushX1d = 770;
var flushX2d = 850;
var flushY1d = 240;
var flushY2d = 340;

var flushX1e = 855;
var flushX2e = 935;
var flushY1e = 240;
var flushY2e = 340;

var flushSlotCard1 = null;
var flushSlotCard2 = null;
var flushSlotCard3 = null;
var flushSlotCard4 = null;
var flushSlotCard5 = null;

//four kind placeholder locations
var fourkX1a = 515;
var fourkX2a = 595;
var fourkY1a = 345;
var fourkY2a = 445;

var fourkX1b = 600;
var fourkX2b = 680;
var fourkY1b = 345;
var fourkY2b = 445;

var fourkX1c = 685;
var fourkX2c = 765;
var fourkY1c = 345;
var fourkY2c = 445;

var fourkX1d = 770;
var fourkX2d = 850;
var fourkY1d = 345;
var fourkY2d = 445;

var fourkSlotCard1 = null;
var fourkSlotCard2 = null;
var fourkSlotCard3 = null;
var fourkSlotCard4 = null;

//straight flush placeholder locations
//context.rect(515, 450, 80, 100);
var strFlushX1a = 515;
var strFlushX2a = 595;
var strFlushY1a = 450;
var strFlushY2a = 550;

//context.rect(600, 450, 80, 100);
var strFlushX1b = 600;
var strFlushX2b = 680;
var strFlushY1b = 450;
var strFlushY2b = 550;

//context.rect(685, 450, 80, 100);
var strFlushX1c = 685;
var strFlushX2c = 765;
var strFlushY1c = 450;
var strFlushY2c = 550;

//context.rect(770, 450, 80, 100);
var strFlushX1d = 770;
var strFlushX2d = 850;
var strFlushY1d = 450;
var strFlushY2d = 550;

//context.rect(855, 450, 80, 100);
var strFlushX1e = 855;
var strFlushX2e = 935;
var strFlushY1e = 450;
var strFlushY2e = 550;

var strFlushSlotCard1 = null;
var strFlushSlotCard2 = null;
var strFlushSlotCard3 = null;
var strFlushSlotCard4 = null;
var strFlushSlotCard5 = null;
