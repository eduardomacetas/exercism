// More information: https://exercism.org/tracks/javascript/exercises/elyses-analytic-enchantments

// 1. Find the position of a card
function getCardPosition(stack, card) {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === card) {
      return i;
    }
  }
}

const card = 2;
console.log(getCardPosition([9, 7, 3, 2], card));

// 2. Determine if a card is present
function doesStackIncludeCard(stack, card) {
  for (let i = 0; i < stack.length; i++) {
    return stack[i] === card ? true : false;
  }
}

console.log(doesStackIncludeCard([2, 3, 4, 5], 3));

// 3. Determine if each card is even
function isEachCardEven(cards) {
  let isEven = true;

  for (let i = 0; i < cards.length; i++) {
    cards[i] % 2 === 0 ? (isEven = true) : (isEven = false);
  }
  return isEven;
}

console.log(isEachCardEven([2, 4, 6, 7]));

// 4. Check if the stack contains an odd-value card
function doesStackIncludeOddCard(cards) {
  for (let i = 0; i < cards.length; i++) {
    return cards[i] % 2 !== 0 ? true : false;
  }
}

console.log(doesStackIncludeOddCard([3, 2, 6, 4, 8]));

// 5. Get the first odd card from the stack
function getFirstOddCard(cards) {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] % 2 !== 0) {
      return cards[i];
    }
  }
}

console.log(getFirstOddCard([4, 2, 8, 7, 9]));

// 6.  Determine the position of the first card that is even
function getFirstEvenCardPosition(cards) {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] % 2 === 0) {
      return i;
    }
  }
}

console.log(getFirstEvenCardPosition([5, 2, 3, 1]));
