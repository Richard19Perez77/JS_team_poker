let draggableControlsTextArea = null;
let controlText = null;
let draggableScoreDiv = null
let JtutorialDiv = null;

let player1isPC = false;
let player2isPC = true;
let player3isPC = true;
let player4isPC = true;

let gameReady = false;
let gameOver = false;

let highScore = 0;
let sortBySuit = false;

let PC_TURN_DELAY = 1000;
let MAX_PLAYER_CARDS = 7;

let backImage = new Image();
let loadingDiv = null;
let imagesLoaded = 0;
let IMAGES_TO_LOAD = 30;

let HC_BONUS = 25;
let TWO_K_BONUS = 50;
let THREE_K_BONUS = 75;
let STRAIGHT_BONUS = 125;
let FLUSH_BONUS = 175;
let FOUR_K_BONUS = 300;
let STRAIGHT_FLUSH_BONUS = 500;

let placeHolderMouseOverCardIndex = -1;
let allHumanPlayers = false;
let topCardSelected = false;

let player1Name = 1;
let player2Name = "PC";
let player3Name = "PC";
let player4Name = "PC";

let cardPlayed = false;
let playercardPressed = -1;
let placeholderPressed = -1;
let arrowPlayerCardSelected = -1;
let arrowPlaceholderCardSelected = -1;

let testTimeEnd;
let testTimeStart = new Date().getTime();
let perfectGames = 0;

let spanL1 = "<span style='float: left;'>";
let spanR1 = "<span style='float: right;'>";
let endSpan = "</span>";
let br = "<br>";

let ruleLog = "MOUSE CONTROLS" + br + br;
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

let scoreText;

let sortedByValue = true;

let canvas;
let newGameButton;
let controlsButton;
let endTurnButton;
let musicButton;
let blogButton;
let scoreButton;
let activityLog;
let tutorialDiv;
let log = "";
let context;
let mouseX = 0;
let mouseY = 0;
let offsetX = 0;
let offsetY = 0;

let turnPassed = 0;

let myGreen = "#009933";
let myBlue = "#330099";
let myBlack = "#000000";

let totalScore = 0;

let cardOffsetX = 0;
let cardOffsetY = 0;

let logCount = 0;
let playerTurn = 0;

let deckCards = [];

let player1Cards = [];
let player2Cards = [];
let player3Cards = [];
let player4Cards = [];

let targetHand = 0;
let cardSelected = -1;

let card1x1 = 0;
let card1x2 = 80;
let card1y1 = 0;
let card1y2 = 100;

let card2x1 = 85;
let card2x2 = 165;
let card2y1 = 0;
let card2y2 = 100;

let card3x1 = 170;
let card3x2 = 250;
let card3y1 = 0;
let card3y2 = 100;

let card4x1 = 255;
let card4x2 = 335;
let card4y1 = 0;
let card4y2 = 100;

let card5x1 = 340;
let card5x2 = 420;
let card5y1 = 0;
let card5y2 = 100;

let card6x1 = 425;
let card6x2 = 505;
let card6y1 = 0;
let card6y2 = 100;

let card7x1 = 510;
let card7x2 = 595;
let card7y1 = 0;
let card7y2 = 100;

// high card location
let hcX1 = 40;
let hcX2 = 120;
let hcY1 = 135;
let hcY2 = 235;

// 2K card locations
let twokX1a = 40;
let twokX2a = 120;
let twokY1a = 240;
let twokY2a = 340;

let twokX1b = 125;
let twokX2b = 205;
let twokY1b = 240;
let twokY2b = 340;

//3k card placeholder locations
let threekX1a = 40;
let threekX2a = 120;
let threekY1a = 345;
let threekY2a = 445;

let threekX1b = 125;
let threekX2b = 205;
let threekY1b = 345;
let threekY2b = 445;

let threekX1c = 210;
let threekX2c = 290;
let threekY1c = 345;
let threekY2c = 445;

let hcSlotCard = null;

let twoPSlotCard1 = null;
let twoPSlotCard2 = null;

let threePSlotCard1 = null;
let threePSlotCard2 = null;
let threePSlotCard3 = null;

//straight card placeholder locations
let straightX1a = 40;
let straightX2a = 120;
let straightY1a = 450;
let straightY2a = 550;

let straightX1b = 125;
let straightX2b = 205;
let straightY1b = 450;
let straightY2b = 550;

let straightX1c = 210;
let straightX2c = 290;
let straightY1c = 450;
let straightY2c = 550;

let straightX1d = 295;
let straightX2d = 375;
let straightY1d = 450;
let straightY2d = 550;

let straightX1e = 380;
let straightX2e = 460;
let straightY1e = 450;
let straightY2e = 550;

let straightSlotCard1 = null;
let straightSlotCard2 = null;
let straightSlotCard3 = null;
let straightSlotCard4 = null;
let straightSlotCard5 = null;

//flush card placeholders
let flushX1a = 515;
let flushX2a = 595;
let flushY1a = 240;
let flushY2a = 340;

let flushX1b = 600;
let flushX2b = 680;
let flushY1b = 240;
let flushY2b = 340;

let flushX1c = 685;
let flushX2c = 765;
let flushY1c = 240;
let flushY2c = 340;

let flushX1d = 770;
let flushX2d = 850;
let flushY1d = 240;
let flushY2d = 340;

let flushX1e = 855;
let flushX2e = 935;
let flushY1e = 240;
let flushY2e = 340;

let flushSlotCard1 = null;
let flushSlotCard2 = null;
let flushSlotCard3 = null;
let flushSlotCard4 = null;
let flushSlotCard5 = null;

//four kind placeholder locations
let fourkX1a = 515;
let fourkX2a = 595;
let fourkY1a = 345;
let fourkY2a = 445;

let fourkX1b = 600;
let fourkX2b = 680;
let fourkY1b = 345;
let fourkY2b = 445;

let fourkX1c = 685;
let fourkX2c = 765;
let fourkY1c = 345;
let fourkY2c = 445;

let fourkX1d = 770;
let fourkX2d = 850;
let fourkY1d = 345;
let fourkY2d = 445;

let fourkSlotCard1 = null;
let fourkSlotCard2 = null;
let fourkSlotCard3 = null;
let fourkSlotCard4 = null;

//straight flush placeholder locations
//context.rect(515, 450, 80, 100);
let strFlushX1a = 515;
let strFlushX2a = 595;
let strFlushY1a = 450;
let strFlushY2a = 550;

//context.rect(600, 450, 80, 100);
let strFlushX1b = 600;
let strFlushX2b = 680;
let strFlushY1b = 450;
let strFlushY2b = 550;

//context.rect(685, 450, 80, 100);
let strFlushX1c = 685;
let strFlushX2c = 765;
let strFlushY1c = 450;
let strFlushY2c = 550;

//context.rect(770, 450, 80, 100);
let strFlushX1d = 770;
let strFlushX2d = 850;
let strFlushY1d = 450;
let strFlushY2d = 550;

//context.rect(855, 450, 80, 100);
let strFlushX1e = 855;
let strFlushX2e = 935;
let strFlushY1e = 450;
let strFlushY2e = 550;

let strFlushSlotCard1 = null;
let strFlushSlotCard2 = null;
let strFlushSlotCard3 = null;
let strFlushSlotCard4 = null;
let strFlushSlotCard5 = null;
