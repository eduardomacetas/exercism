// 1. Determine how many cards of a certain type are in the deck
function cardTypeCheck(deck, card) {
  let result = 0;
  deck.forEach((e) => {
    if (e === card) {
      result = result + 1;
    }
  });
  return result;
}

// const cardType = 3;
console.log(cardTypeCheck([1, 2, 3, 4], 3)); // => 1

// 2. Determine how many odd or even cards there are
function determineOddEvenCards(deck, isOdd) {
  let result = 0;
  for (const element of deck) {
    if (isOdd) {
      if (element % 2 === 0) result = result + 1;
    } else {
      if (element % 2 !== 0) result = result + 1;
    }
  }
  return result;
}

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true)); // => 2
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false)); // => 4
