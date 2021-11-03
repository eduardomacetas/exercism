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
