// More information: https://exercism.org/tracks/javascript/exercises/elyses-destructured-enchantments

// 1. Get the first card
function getFirstCard(deck) {
  let [x, ...args] = deck;
  return x;
}

const deck1 = [5, 9, 7, 1, 8];
console.log(getFirstCard(deck1)); // => 5

// 2. Get the second card
function getSecondCard(deck) {
  let [x, y, ...args] = deck;
  return y;
}

const deck2 = [3, 2, 10, 6, 7];
console.log(getSecondCard(deck2)); // => 2

// 3. Swap the first two cards
function swapTopTwoCards(deck) {
  let [x, y, ...cards] = deck;
  return [y, x, ...cards];
}

const deck3 = [10, 7, 3, 8, 5];
console.log(swapTopTwoCards(deck3)); // => [7, 10, 3, 8, 5]

// 4. Discard the top card
function discardTopCard(deck) {
  let [x, ...cards] = deck;
  return [x, cards];
}

const deck4 = [2, 5, 4, 9, 3];
console.log(discardTopCard(deck4)); // => [2, [5, 4, 9, 3]]

// 5. Insert face cards
function insertFaceCards(deck) {
  let [x, ...cards] = deck;
  return [x, "jack", "queen", "king", ...cards];
}

const deck5 = [5, 4, 7, 10];
console.log(insertFaceCards(deck5)); // => [5, 'jack', 'queen', 'king', 4, 7, 10]
