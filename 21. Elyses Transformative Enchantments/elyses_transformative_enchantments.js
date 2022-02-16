// 1. Double every single card
function seeingDouble(deck) {
  return deck.map((value) => value * 2);
}

const deck = [1, 2, 3, 4, 10];
console.log(seeingDouble(deck)); // => [2, 4, 6, 8, 20]

// 2. Create multiple copies of every 3 found in the deck
function threeOfEachThree(deck) {
  let newDeck = [];
  for (let i = 0; i < deck.length; i++) {
    if (deck[i] === 3) {
      newDeck.push(3);
      newDeck.push(3);
      newDeck.push(3);
    } else {
      newDeck.push(deck[i]);
    }
  }
  return newDeck;
}

const deck2 = [1, 3, 9, 3, 7];
console.log(threeOfEachThree(deck2)); // => [1, 3, 3, 3, 9, 3, 3, 3, 7]

// 3. Find two cards from the exact middle of the deck
function middleTwo(deck) {
  const middle = deck.length / 2;
  return deck.slice(middle - 1, middle + 1);
}

const deck3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(middleTwo(deck3)); // => [5, 6]

// 4. The outside two cards will reappear in the middle of the deck
function sandwichTrick(deck) {
  return "come back later :chocolate_bar:";
}

const deck4 = [1, 2, 3, 5, 6, 10];
console.log(sandwichTrick(deck4)); // => [2, 3, 10, 1, 5, 6]

// 5. Every card that isn't 2 disappears
function twoIsSpecial(deck) {
  return deck.filter((value) => value === 2);
}

const deck5 = [1, 2, 3, 4, 10, 2];
console.log(twoIsSpecial(deck5)); // => [2, 2]

// 6. Convert a shuffled deck into a perfectly ordered deck
function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

const deck6 = [10, 1, 5, 3, 2, 8, 7];
console.log(perfectlyOrdered(deck6)); // => [1, 2, 3, 5, 7, 8, 10]

// 7. Reorder the deck
function reorder(deck) {
  return "come back later :chocolate_bar:";
}

const deck7 = [10, 1, 5, 3, 2];
console.log(reorder(deck7)); // => [2, 3, 5, 1, 10]
