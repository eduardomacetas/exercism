// 1. Find the position of a card
function getCardPosition(stack, card) {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === card) return i;
  }
  return "Is not found";
}

// card = 2;
console.log(getCardPosition([9, 7, 3, 2], 2)); // => 3

// 2. Determine if a card is present
function doesStackIncludeCard(stack, card) {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === card) return true;
  }
  return false;
}

// card = 3;
console.log(doesStackIncludeCard([2, 3, 4, 5], 3)); // => true

// 3. Determine if each card is even
function isEachCardEven(stack) {
  let result = false;
  for (let i = 0; i < stack.length; i++) {
    stack[i] % 2 === 0 ? (result = true) : (result = false);
  }
  return result;
}

console.log(isEachCardEven([2, 4, 6, 7])); // => false

// 4. Check if the stack contains an odd-value card
function doesStackIncludeOddCard(stack) {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] % 2 !== 0) {
      return true;
    }
  }
  return false;
}

console.log(doesStackIncludeOddCard([3, 2, 6, 4, 8])); // => true

// 5. Get the first odd card from the stack
function getFirstOddCard(stack) {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] % 2 !== 0) {
      return stack[i];
    }
  }
  return "there is no odd card";
}

console.log(getFirstOddCard([4, 2, 8, 7, 9])); // => 7

// 6. Determine the position of the first card that is even
function getFirstEvenCardPosition(stack) {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] % 2 === 0) return i;
  }
  return "there is no even card";
}

console.log(getFirstEvenCardPosition([5, 2, 3, 1])); // => 1
