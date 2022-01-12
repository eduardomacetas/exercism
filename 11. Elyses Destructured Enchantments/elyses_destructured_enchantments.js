// 1. Get the first card
function getFirstCard(deck) {
  const [fistCard] = deck;
  return fistCard;
}

// const deck = [5, 9, 7, 1, 8];
console.log(getFirstCard([5, 9, 7, 1, 8])); // => 5

// 2. Get the second card
function getSecondCard(deck) {
  const [, secondCard] = deck;
  return secondCard;
}

// const deck = [3, 2, 10, 6, 7];
console.log(getSecondCard([3, 2, 10, 6, 7])); // => 2

// 3. Swap the first two cards
function swapTopTwoCards(deck) {
  const [first, second, ...last] = deck;
  return [second, first, ...last];
}

// const deck = [10, 7, 3, 8, 5];
console.log(swapTopTwoCards([10, 7, 3, 8, 5])); // => [7, 10, 3, 8, 5]

// 4. Discard the top card
function discardTopCard(deck) {
  const [first, ...last] = deck;
  return [first, [...last]];
}

// const deck = [2, 5, 4, 9, 3];
console.log(discardTopCard([2, 5, 4, 9, 3])); // => [2, [5, 4, 9, 3]]

// 5. Insert face cards
function insertFaceCards(deck) {
  const [first, ...last] = deck;
  return [first, "jack", "queen", "king", ...last];
}

// const deck = [5, 4, 7, 10];
console.log(insertFaceCards([5, 4, 7, 10])); // => [5, 'jack', 'queen', 'king', 4, 7, 10]
