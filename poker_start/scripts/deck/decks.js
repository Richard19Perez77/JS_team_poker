function customDeck() {
    // straight5Deck();
    // straight3Deck();
    // straight4Deck
    // flushDeck();
    // flushDeck2();
    // flushDeck3();
    // finishFlushDeck();
    // finishFlushWithPairDeck();
    // finishFlushWithStrFlushDeck();
    // dontUseflushDeck();
    // overrideFlushDeck();
    // kind4KDeck();
    // kind4KDeck2();
    // kind4KDeck3();
    // kind4KDeck4();
    // kind4KDeck5();
    // twoPairDeck();
    // twoPairDeck2();
    // twoPairDeck3();
    // twoPairDeck4();
    // threeKindDeck();
    // straightFlushDeck();
    // straightFlushDeck2();
    // straightFlushDeck3();
    // straightFlushDeck4();
    // straightFlushDeck5();
    // threeCardBlockFromPreviousPlayStrFlushDeck();
    // threeKBlockedDeck();
    // straightDeckWithSwitchCard();
    // straightFlush4CardOutOfOrder();
    // straightFlushBlockedFinish4kWithSFPossibleCard()
}

function randomizeDeck() {
    //addLog("randomizeDeck()");
    for (let i = 0; i < 52; i++) {
        let newIndex = Math.floor(Math.random() * 52);
        let oldIndex = i;
        if (newIndex !== oldIndex) {
            let overwriteCard = deckCards[newIndex];
            deckCards[newIndex] = deckCards[oldIndex];
            deckCards[oldIndex] = overwriteCard;
        }
    }
}

function createCardDeck() {
    for (let i = 0; i < 52; i++) {
        let suit = i % 4;
        let value = i % 13;
        let path = getCardImagePath(suit, value);
        let card = new Card(suit, value, path);
        card.bitmap.src = card.imagePath;
        Object.freeze(card);
        deckCards[i] = card;
    }
}
