function customDeck() {
  //kindDeck();
  //straight5Deck();
  //straight3Deck();
  //straight4Deck
  //flushDeck();
  //flushDeck2();
  //flushDeck3();
  //finishFlushDeck();
  //finishFlushWithPairDeck();
  //finishFlushWithStrFlushDeck();
  //dontUseflushDeck();
  //overrideFlushDeck();
  //kind4KDeck();
  //kind4KDeck2();
  //kind4KDeck3();
  //kind4KDeck4();
  //kind4KDeck5();
  //twoPairDeck();
  //twoPairDeck2();
  //twoPairDeck3();
  //twoPairDeck4();
  //threeKindDeck();
  //straightFlushDeck();
  //straightFlushDeck2();
  //straightFlushDeck3();
  //straightFlushDeck4();
  //straightFlushDeck5();
  //threeCardBlockFromPreviousPlayStrFlushDeck();
  //threeKBlockedDeck();
  //straightDeckWithSwitchCard();
  //straightFlush4CardOutOfOrder();

  // straightFlushBlockedFinish4kWithSFPossibleCard()
}

function straightFlushDeck() {
  for (var i = 0; i < 52; i++) {
    var value = i % 13;
    var suit = 0;

    if (i < 13) {
      suit = 0;
    } else if (i < 26) {
      suit = 1;
    } else if (i < 39) {
      suit = 2;
    } else if (i < 52) {
      suit = 3;
    }

    var path = getCardImagePath(suit, value);
    var card = new Card(suit, value, path);
    card.bitmap.src = card.imagePath;
    deckCards[i] = card;
  }
}

function straightFlushDeck2() {
  //player 2
  var suit = 0;
  var value = 8;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;

  value = 9;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  value = 10;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  value = 11;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;

  value = 12;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[9] = card10;

  //player 3
  suit = 1;
  value = 1;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  value = 2;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  value = 3;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  value = 4;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;

  value = 5;
  var path14 = getCardImagePath(suit, value);
  var card14 = new Card(suit, value, path14);
  card14.bitmap.src = card14.imagePath;
  deckCards[14] = card14;

  //player 4
  suit = 3;
  value = 5;
  var path15 = getCardImagePath(suit, value);
  var card15 = new Card(suit, value, path15);
  card15.bitmap.src = card15.imagePath;
  deckCards[15] = card15;

  value = 6;
  var path16 = getCardImagePath(suit, value);
  var card16 = new Card(suit, value, path16);
  card16.bitmap.src = card16.imagePath;
  deckCards[16] = card16;

  value = 7;
  var path17 = getCardImagePath(suit, value);
  var card17 = new Card(suit, value, path17);
  card17.bitmap.src = card17.imagePath;
  deckCards[17] = card17;

  value = 8;
  var path18 = getCardImagePath(suit, value);
  var card18 = new Card(suit, value, path18);
  card18.bitmap.src = card18.imagePath;
  deckCards[18] = card18;

  value = 9;
  var path19 = getCardImagePath(suit, value);
  var card19 = new Card(suit, value, path19);
  card19.bitmap.src = card19.imagePath;
  deckCards[19] = card19;
}

function straightFlushDeck3() {
  //player 1
  var suit = 0;
  var value = 12;
  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  //player 2
  var suit = 0;
  var value = 8;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  value = 9;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  value = 10;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  value = 11;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  value = 2;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  //player 3
  suit = 1;
  value = 1;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 2;
  value = 2;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  value = 3;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 0;
  value = 12;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;

  suit = 1;
  value = 11;
  var path14 = getCardImagePath(suit, value);
  var card14 = new Card(suit, value, path14);
  card14.bitmap.src = card14.imagePath;
  deckCards[14] = card14;
}

function straightFlushDeck4() {

  //player 1
  var suit = 0;
  var value = 7;
  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  var suit = 0;
  var value = 8;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  var suit = 0;
  var value = 9;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  var suit = 0;
  var value = 10;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  var suit = 0;
  var value = 11;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  //player 2
  var suit = 0;
  var value = 6;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  value = 7;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  value = 8;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  value = 9;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  value = 10;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  //player 3
  suit = 1;
  value = 1;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 2;
  value = 2;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  value = 3;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 0;
  value = 12;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;

  suit = 1;
  value = 11;
  var path14 = getCardImagePath(suit, value);
  var card14 = new Card(suit, value, path14);
  card14.bitmap.src = card14.imagePath;
  deckCards[14] = card14;
}

function kind4KDeckTwoCards() {
  //player 2
  var suit = 0;
  var value = 0;

  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;

  suit = 1;
  value = 0;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  suit = 2;
  value = 3;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  suit = 3;
  value = 3;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;

  suit = 0;
  value = 12;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[9] = card10;
}

function flushDeck2() {

  //player 1
  var suit = 0;
  var value = 2;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[0] = card1;

  value = 0;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[1] = card2;

  value = 5;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[2] = card3;

  value = 9;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[3] = card4;

  suit = 0;
  value = 7;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[4] = card5;

  //player 2
  suit = 1;
  value = 8;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;


  suit = 2;
  value = 2;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  suit = 3;
  value = 6;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  value = 11;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;

  value = 10;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[9] = card10;
}

function finishFlushDeck() {

  //player 1
  var suit = 0;
  var value = 2;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[0] = card1;

  value = 0;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[1] = card2;

  value = 5;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[2] = card3;

  value = 9;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[3] = card4;

  suit = 0;
  value = 7;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[4] = card5;

  //player 2
  suit = 0;
  value = 8;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;

  suit = 1;
  value = 0;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  suit = 2;
  value = 6;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  value = 11;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;

  value = 10;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[9] = card10;

  //player 3
  suit = 0;
  value = 2;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  value = 0;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  value = 5;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  value = 9;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;

  suit = 2;
  value = 7;
  var path14 = getCardImagePath(suit, value);
  var card14 = new Card(suit, value, path14);
  card14.bitmap.src = card14.imagePath;
  deckCards[14] = card14;
}

function finishFlushWithPairDeck() {

  //player 1
  var suit = 0;
  var value = 2;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[0] = card1;

  value = 0;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[1] = card2;

  value = 5;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[2] = card3;

  value = 9;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[3] = card4;

  suit = 0;
  value = 7;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[4] = card5;

  //player 2
  suit = 0;
  value = 8;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;

  suit = 1;
  value = 8;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  suit = 2;
  value = 6;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  value = 11;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;

  value = 10;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[9] = card10;
}

function overrideFlushDeck() {
  var suit = 1;
  var value = 0;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[0] = card1;

  value = 3;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[1] = card2;

  value = 5;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[2] = card3;

  suit = 1;
  value = 10;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[3] = card4;

  value = 12;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[4] = card5;

  suit = 0;
  value = 2;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;

  value = 5;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  value = 7;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  value = 10;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;

  value = 12;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[9] = card10;
}

function dontUseflushDeck() {
  var suit = 0;
  var value = 0;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[5] = card1;

  value = 8;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[6] = card2;

  value = 9;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[7] = card3;

  value = 10;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[8] = card4;

  value = 12;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[9] = card5;
}

function flushDeck() {
  var suit = 0;
  var indexes = [];
  for (var i = 0; i < deckCards.length; i++) {
    if (deckCards[i].suit == suit) {
      if (i <= 4 || i >= 10) {
        indexes.push(i);
        if (indexes.length == 5) {
          break;
        }
      }
    }
  }
  //addLog("indexes = " + indexes);

  //use indexes to switch into second hand
  var hand = 5;
  for (var i = 0; i < 5; i++) {
    var overwriteCard = deckCards[hand];
    deckCards[hand] = deckCards[indexes[i]];
    deckCards[indexes[i]] = overwriteCard;
    hand++;
  }
}

function kindDeck() {

}

function randomizeDeck() {
  //addLog("randomizeDeck()");
  for (var i = 0; i < 52; i++) {
    var newIndex = Math.floor(Math.random() * 52);
    var oldIndex = i;
    if (newIndex != oldIndex) {
      var overwriteCard = deckCards[newIndex];
      deckCards[newIndex] = deckCards[oldIndex];
      deckCards[oldIndex] = overwriteCard;
    }
  }
}

function createCardDeck() {
  for (var i = 0; i < 52; i++) {
    var suit = i % 4;
    var value = i % 13;
    var path = getCardImagePath(suit, value);
    var card = new Card(suit, value, path);
    card.bitmap.src = card.imagePath;
    Object.freeze(card);
    deckCards[i] = card;
  }
}

function twoPairDeck() {
  var suit = 0;
  var value = 1;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[0] = card1;

  suit = 1;
  value = 1;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[1] = card2;

  suit = 0;
  value = 9;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[2] = card3;

  suit = 1;
  value = 9;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[3] = card4;

  suit = 2;
  value = 12;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[4] = card5;

  suit = 0;
  value = 8;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;

  suit = 1;
  value = 8;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  suit = 0;
  value = 6;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  suit = 1;
  value = 6;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;
}

function twoPairDeck2() {
  var suit = 0;
  var value = 1;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[0] = card1;

  suit = 1;
  value = 1;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[1] = card2;

  suit = 0;
  value = 9;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[2] = card3;

  suit = 1;
  value = 9;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[3] = card4;

  suit = 2;
  value = 12;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[4] = card5;

  suit = 0;
  value = 8;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;

  suit = 1;
  value = 9;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  suit = 0;
  value = 10;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  suit = 1;
  value = 10;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;

  suit = 1;
  value = 11;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[9] = card10;
}

function twoPairDeck3() {
  var suit = 0;
  var value = 1;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[0] = card1;

  suit = 1;
  value = 1;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[1] = card2;

  suit = 0;
  value = 9;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[2] = card3;

  suit = 1;
  value = 9;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[3] = card4;

  suit = 2;
  value = 12;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[4] = card5;

  suit = 0;
  value = 0;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;

  suit = 0;
  value = 4;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  suit = 1;
  value = 4;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  suit = 0;
  value = 10;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;

  suit = 2;
  value = 11;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[9] = card10;
}

function twoPairDeck4() {
  var suit = 0;
  var value = 0;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[10] = card1;

  suit = 1;
  value = 0;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[11] = card2;

  suit = 2;
  value = 2;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[12] = card3;

  suit = 3;
  value = 2;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[13] = card4;

  suit = 0;
  value = 5;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[14] = card5;
}

function kind4KDeck() {

  //player 1 hand
  var suit = 0;
  var value = 10;

  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 1;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 2;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 3;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  //player 2 hand
  suit = 0;
  value = 11;

  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 1;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  suit = 2;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 3;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;
}

function kind4KDeck3() {

  //player 1 hand
  var suit = 0;
  var value = 10;

  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 1;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 2;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 3;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 0;
  value = 11;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  //player 2 hand
  suit = 0;
  value = 12;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 1;
  value = 12;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  suit = 2;
  value = 12;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 3;
  value = 12;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 1;
  value = 10;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;
}

function kind4KDeck4() {

  //player 1 hand
  var suit = 0;
  var value = 11;

  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 1;
  value = 11;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 2;
  value = 11;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 3;
  value = 11;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 0;
  value = 12;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  //player 2 hand
  suit = 0;
  value = 10;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 1;
  value = 10;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  suit = 2;
  value = 10;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 3;
  value = 10;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 1;
  value = 12;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;
}

function kind4KDeck5() {

  //player 1 hand
  var suit = 0;
  var value = 11;

  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 1;
  value = 11;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 2;
  value = 11;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 0;
  value = 1;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 0;
  value = 2;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  suit = 3;
  value = 3;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 0;
  value = 2;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  // player 2 hand
  suit = 3;
  value = 11;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 2;
  value = 2;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 3;
  value = 2;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  suit = 2;
  value = 3;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 1;
  value = 4;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  var suit = 3;
  var value = 6;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 3;
  value = 7;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;
}

function kind4KDeck2() {

  //player 1 hand
  var suit = 0;
  var value = 10;

  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 1;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 2;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 3;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  //player 2 hand
  suit = 0;
  value = 1;

  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 1;
  value = 1;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  suit = 2;
  value = 2;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 3;
  value = 3;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 1;
  value = 6;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;
}

function threeKindDeck() {

  //player 1 hand
  var suit = 0;
  var value = 12;

  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  value = 10;

  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 1;

  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 0;
  value = 12;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 2;
  value = 12;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  suit = 3;
  value = 4;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  suit = 0;
  value = 10;

  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 1;
  value = 10;

  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;
}

function finishFlushWithStrFlushDeck() {

  //player 1
  var suit = 0;
  var value = 2;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[0] = card1;

  value = 0;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[1] = card2;

  value = 5;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[2] = card3;

  value = 11;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[3] = card4;

  suit = 0;
  value = 7;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[4] = card5;

  //player 2
  suit = 0;
  value = 8;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;

  suit = 0;
  value = 9;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  suit = 0;
  value = 10;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  suit = 1;
  value = 11;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;

  value = 10;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[9] = card10;
}

function straightThreeDeck() {
  //player 1
  var suit = 0;
  var value = 9;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[0] = card1;

  suit = 1;
  value = 10;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[1] = card2;

  suit = 2;
  value = 11;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[2] = card3;

  suit = 3;
  value = 3;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[3] = card4;

  suit = 0;
  value = 4;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[4] = card5;

  //player 2
  suit = 3;
  value = 5;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;

  suit = 2;
  value = 6;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  suit = 0;
  value = 7;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  suit = 1;
  value = 1;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;

  suit = 2;
  value = 0;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[9] = card10;
}

function straightFlushDeck5() {

  //player 1
  var suit = 3;
  var value = 4;
  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  var value = 5;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  var value = 6;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 0;
  value = 7;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[6] = card8;

  value = 8;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[7] = card9;

  value = 9;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[8] = card10;

  value = 10;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[9] = card11;

  suit = 2;
  value = 3;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 1;
  value = 4;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  var suit = 3;
  var value = 6;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 3;
  value = 7;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;
}

function straightFlushBlockedFinish4kWithSFPossibleCard(){

  // player 1 plays two 10's and three q's in 4k
  var suit = 0;
  var value = 8;
  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 1;
  value = 8;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 3;
  value = 10;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 1;
  value = 10;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 2;
  value = 10;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  var suit = 0;
  var value = 0;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 0;
  value = 1;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  // player two, should have Q, K, A
  // but not wait to finish the four of a kind since the 10 blocks the SF
  var suit = 0;
  var value = 10;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 0;
  value = 11;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 0;
  value = 12;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  suit = 3;
  value = 3;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 3;
  value = 5;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  var suit = 0;
  var value = 7;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 2;
  value = 4;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;
}
