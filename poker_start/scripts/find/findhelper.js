function removeFrom4kLists(card) {
    if (card == null) {
        return;
    }

    valueArr4k.remove(card.value);
    suitArr4k.remove(card.suit);
}

function addTo4kLists(card) {
    if (card == null) {
        return;
    }
    valueArr4k.add(card.value);
    suitArr4k.add(card.suit);
}

function checkHandForNextStrFlushCard(card, cardArr) {
    for (let i = 0; i < cardArr.length; i++) {
        let possibleStrFlushCard = cardArr[i];
        if (card.suit === possibleStrFlushCard.suit) {
            if (card.value === possibleStrFlushCard.value + 1 || card.value === possibleStrFlushCard.value - 1 ||
                card.value === possibleStrFlushCard.value + 2 || card.value === possibleStrFlushCard.value - 2) {
                return true;
            }
        }
    }

    return false;
}
