function threeCardBlockFromPreviousPlayStrFlushDeck(){

  //block 3 card straight
  let suit = 0;
  let value = 0;
  let path0 = getCardImagePath(suit, value);
  let card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 0;
  value = 1;
  let path1 = getCardImagePath(suit, value);
  let card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 0;
  value = 5;
  let path2 = getCardImagePath(suit, value);
  let card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 0;
  value = 6;
  let path3 = getCardImagePath(suit, value);
  let card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 1;
  value = 11;
  let path4 = getCardImagePath(suit, value);
  let card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  suit = 3;
  value = 10;
  let path5 = getCardImagePath(suit, value);
  let card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 2;
  value = 10;
  let path6 = getCardImagePath(suit, value);
  let card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  // 3 card straight flush
  suit = 0;
  value = 2;
  let path7 = getCardImagePath(suit, value);
  let card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 0;
  value = 3;
  let path8 = getCardImagePath(suit, value);
  let card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 0;
  value = 4;
  let path9 = getCardImagePath(suit, value);
  let card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  suit = 3;
  value = 10;
  let path10 = getCardImagePath(suit, value);
  let card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 3;
  value = 9;
  let path11 = getCardImagePath(suit, value);
  let card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  suit = 0;
  value = 10;
  let path12 = getCardImagePath(suit, value);
  let card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 0;
  value = 11;
  let path13 = getCardImagePath(suit, value);
  let card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;
}

function straightFlush4CardOutOfOrder(){
  //player one 4 of 5
  let suit = 0;
  let value = 0;
  let path0 = getCardImagePath(suit, value);
  let card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 0;
  value = 1;
  let path1 = getCardImagePath(suit, value);
  let card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 0;
  value = 3;
  let path2 = getCardImagePath(suit, value);
  let card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 0;
  value = 4;
  let path3 = getCardImagePath(suit, value);
  let card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 1;
  value = 11;
  let path4 = getCardImagePath(suit, value);
  let card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  suit = 3;
  value = 10;
  let path5 = getCardImagePath(suit, value);
  let card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 2;
  value = 10;
  let path6 = getCardImagePath(suit, value);
  let card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  // 3 card straight flush
  suit = 0;
  value = 2;
  let path7 = getCardImagePath(suit, value);
  let card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;
}

function straightFlushDeck() {
  for (let i = 0; i < 52; i++) {
    let value = i % 13;
    let suit = 0;

    if (i < 13) {
      suit = 0;
    } else if (i < 26) {
      suit = 1;
    } else if (i < 39) {
      suit = 2;
    } else if (i < 52) {
      suit = 3;
    }

    let path = getCardImagePath(suit, value);
    let card = new Card(suit, value, path);
    card.bitmap.src = card.imagePath;
    deckCards[i] = card;
  }
}

function straightFlushDeck2() {
  //player 2
  let suit = 0;
  let value = 8;
  let path6 = getCardImagePath(suit, value);
  let card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[5] = card6;

  value = 9;
  let path7 = getCardImagePath(suit, value);
  let card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[6] = card7;

  value = 10;
  let path8 = getCardImagePath(suit, value);
  let card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[7] = card8;

  value = 11;
  let path9 = getCardImagePath(suit, value);
  let card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[8] = card9;

  value = 12;
  let path10 = getCardImagePath(suit, value);
  let card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[9] = card10;

  //player 3
  suit = 1;
  value = 1;
  path10 = getCardImagePath(suit, value);
  card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  value = 2;
  let path11 = getCardImagePath(suit, value);
  let card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  value = 3;
  let path12 = getCardImagePath(suit, value);
  let card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  value = 4;
  let path13 = getCardImagePath(suit, value);
  let card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;

  value = 5;
  let path14 = getCardImagePath(suit, value);
  let card14 = new Card(suit, value, path14);
  card14.bitmap.src = card14.imagePath;
  deckCards[14] = card14;

  //player 4
  suit = 3;
  value = 5;
  let path15 = getCardImagePath(suit, value);
  let card15 = new Card(suit, value, path15);
  card15.bitmap.src = card15.imagePath;
  deckCards[15] = card15;

  value = 6;
  let path16 = getCardImagePath(suit, value);
  let card16 = new Card(suit, value, path16);
  card16.bitmap.src = card16.imagePath;
  deckCards[16] = card16;

  value = 7;
  let path17 = getCardImagePath(suit, value);
  let card17 = new Card(suit, value, path17);
  card17.bitmap.src = card17.imagePath;
  deckCards[17] = card17;

  value = 8;
  let path18 = getCardImagePath(suit, value);
  let card18 = new Card(suit, value, path18);
  card18.bitmap.src = card18.imagePath;
  deckCards[18] = card18;

  value = 9;
  let path19 = getCardImagePath(suit, value);
  let card19 = new Card(suit, value, path19);
  card19.bitmap.src = card19.imagePath;
  deckCards[19] = card19;
}

function straightFlushDeck3() {
  //player 1
  let suit = 0;
  let value = 12;
  let path0 = getCardImagePath(suit, value);
  let card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  //player 2
  suit = 0;
  value = 8;
  let path5 = getCardImagePath(suit, value);
  let card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  value = 9;
  let path6 = getCardImagePath(suit, value);
  let card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  value = 10;
  let path7 = getCardImagePath(suit, value);
  let card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  value = 11;
  let path8 = getCardImagePath(suit, value);
  let card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  value = 2;
  let path9 = getCardImagePath(suit, value);
  let card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  //player 3
  suit = 1;
  value = 1;
  let path10 = getCardImagePath(suit, value);
  let card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 2;
  value = 2;
  let path11 = getCardImagePath(suit, value);
  let card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  value = 3;
  let path12 = getCardImagePath(suit, value);
  let card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 0;
  value = 12;
  let path13 = getCardImagePath(suit, value);
  let card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;

  suit = 1;
  value = 11;
  let path14 = getCardImagePath(suit, value);
  let card14 = new Card(suit, value, path14);
  card14.bitmap.src = card14.imagePath;
  deckCards[14] = card14;
}

function straightFlushDeck4() {

  //player 1
  let suit = 0;
  let value = 7;
  let path0 = getCardImagePath(suit, value);
  let card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 0;
  value = 8;
  let path1 = getCardImagePath(suit, value);
  let card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 0;
  value = 9;
  let path2 = getCardImagePath(suit, value);
  let card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 0;
  value = 10;
  let path3 = getCardImagePath(suit, value);
  let card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 0;
  value = 11;
  let path4 = getCardImagePath(suit, value);
  let card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  //player 2
  suit = 0;
  value = 6;
  let path5 = getCardImagePath(suit, value);
  let card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  value = 7;
  let path6 = getCardImagePath(suit, value);
  let card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  value = 8;
  let path7 = getCardImagePath(suit, value);
  let card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  value = 9;
  let path8 = getCardImagePath(suit, value);
  let card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  value = 10;
  let path9 = getCardImagePath(suit, value);
  let card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  //player 3
  suit = 1;
  value = 1;
  let path10 = getCardImagePath(suit, value);
  let card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 2;
  value = 2;
  let path11 = getCardImagePath(suit, value);
  let card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  value = 3;
  let path12 = getCardImagePath(suit, value);
  let card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 0;
  value = 12;
  let path13 = getCardImagePath(suit, value);
  let card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;

  suit = 1;
  value = 11;
  let path14 = getCardImagePath(suit, value);
  let card14 = new Card(suit, value, path14);
  card14.bitmap.src = card14.imagePath;
  deckCards[14] = card14;
}

function straightFlushDeck5() {

  //player 1
  let suit = 3;
  let value = 4;
  let path0 = getCardImagePath(suit, value);
  let card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  value = 5;
  let path1 = getCardImagePath(suit, value);
  let card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  value = 6;
  let path2 = getCardImagePath(suit, value);
  let card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 0;
  value = 7;
  let path8 = getCardImagePath(suit, value);
  let card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[6] = card8;

  value = 8;
  let path9 = getCardImagePath(suit, value);
  let card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[7] = card9;

  value = 9;
  path10 = getCardImagePath(suit, value);
  card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[8] = card10;

  value = 10;
  path11 = getCardImagePath(suit, value);
  card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[9] = card11;

  suit = 2;
  value = 3;
  let path10 = getCardImagePath(suit, value);
  let card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 1;
  value = 4;
  let path11 = getCardImagePath(suit, value);
  let card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  suit = 3;
  value = 6;
  let path12 = getCardImagePath(suit, value);
  let card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 3;
  value = 7;
  let path13 = getCardImagePath(suit, value);
  let card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;
}
