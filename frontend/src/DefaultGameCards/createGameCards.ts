import {GameCard} from "../GameLogic/GameCard.ts";

export function createGameCards(setName: string, gameSize: string) {
    let index = 1;

    const alphabetReading = [
        "a", "i", "u", "e", "o",
        "ka", "ki", "ku", "ke", "ko",
        "sa", "shi", "su", "se", "so",
        "ta", "chi", "tsu", "te", "to",
        "na", "ni", "nu", "ne", "no",
        "ha", "hi", "fu", "he", "ho",
        "ma", "mi", "mu", "me", "mo",
        "ya", "yu", "yo",
        "ra", "ri", "ru", "re", "ro",
        "wa", "wo", "n"
    ]

    const playingCards = [
        "heart-1", "heart-2", "heart-3", "heart-4", "heart-5", "heart-6", "heart-7",
        "heart-8", "heart-9", "heart-10", "heart-11", "heart-12", "heart-13",
        "spade-1", "spade-2", "spade-3", "spade-4", "spade-5", "spade-6", "spade-7",
        "spade-8", "spade-9", "spade-10", "spade-11", "spade-12", "spade-13",
        "diamond-1", "diamond-2", "diamond-3", "diamond-4", "diamond-5", "diamond-6", "diamond-7",
        "diamond-8", "diamond-9", "diamond-10", "diamond-11", "diamond-12", "diamond-13",
        "club-1", "club-2", "club-3", "club-4", "club-5", "club-6", "club-7",
        "club-8", "club-9", "club-10", "club-11", "club-12", "club-13"
    ]

    const kanaCards: GameCard[] = [];
    let listData: string[];
    if (setName === "hiragana" || setName === "katakana") {
        listData = alphabetReading;
    } else {
        listData = playingCards;
    }

    listData.forEach((data: string) => {
        const gameCard: GameCard = {
            id: String(index),
            title: data,
            cardSetName: setName
        };
        index++;
        kanaCards.push(gameCard);
    });

    const cardList: GameCard[] = [];
    while (kanaCards.length > 0) {
        const n = kanaCards.length;
        const k = Math.floor(Math.random() * n);
        cardList.push(kanaCards[k]);
        kanaCards.splice(k, 1);
    }

    const rowAndColumn: number[] = [];
    if (gameSize === "large") {
        rowAndColumn[0] = 4;
        rowAndColumn[1] = 4;
    } else if (gameSize === "medium") {
        rowAndColumn[0] = 3;
        rowAndColumn[1] = 4;
    } else {
        rowAndColumn[0] = 3;
        rowAndColumn[1] = 3;
    }

    let pairing;
    switch (gameSize) {
        case "small":
            pairing = 4;
            break;
        case "medium":
            pairing = 6;
            break;
        default:
            pairing = 8;
    }

    const cardPairs: GameCard [] = cardList.splice(0, pairing);
    const copyOfCardPairs = Array.from(cardPairs);
    const resultCardPairs = cardPairs.concat(copyOfCardPairs);

    const emptyCard: GameCard = {id: "0", title: "empty", cardSetName: setName}
    if (gameSize === "small") {
        resultCardPairs.push(emptyCard);
    }

    const shuffledPairs: GameCard[] = [];
    while (resultCardPairs.length > 0) {
        const n = cardPairs.length;
        const k = Math.floor(Math.random() * n);
        shuffledPairs.push(resultCardPairs[k]);
        resultCardPairs.splice(k, 1);
    }

    const cardGrid: GameCard[][] = [];
    const isMatched: boolean[][] = [];
    let m = 0;
    for (let i = 0; i < rowAndColumn[0]; i++) {
        cardGrid[i] = [];
        isMatched[i] = [];
        for (let j = 0; j < rowAndColumn[1]; j++) {
            cardGrid[i][j] = shuffledPairs[m];
            isMatched[i][j] = false;
            m++;
        }
    }

    const id = String(1 + Math.floor(Math.random() * 100000));

    return {id, cardGrid, isMatched}

}
