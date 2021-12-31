// More information: https://exercism.org/tracks/javascript/exercises/elyses-looping-enchantments

// 1. Determine how many cards of a certain type are in the deck
function cardType(cards, cardType) {
  let numberOfCards = 0;
  cards.forEach((element) => {
    if (element === cardType) {
      numberOfCards += 1;
    }
  });
  return numberOfCards;
}
console.log(cardType([1, 2, 3, 4], 3)); // => 1

// 2. Determine how many odd or even cards there are
function determineOddEvenCards(cards, even) {
  let numberOfCards = 0;
  for (let card of cards) {
    if (even == true) {
      if (card % 2 == 0) {
        numberOfCards += 1;
      }
    } else {
      if (card % 2 != 0) {
        numberOfCards += 1;
      }
    }
  }
  return numberOfCards;
}

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true));
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false));
