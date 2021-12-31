// 1. Retrieve a card from a stack
function getItem(deckOfCards, position) {
  return deckOfCards[position];
}

// position = 2
console.log(getItem([1, 2, 4, 1], 2)); // => 4

// 2. Exchange a card in the stack
function setItem(deckOfCards, position, newCard) {
  deckOfCards[position] = newCard;
  return deckOfCards;
}

// position = 2, newCard = 6
console.log(setItem([1, 2, 4, 1], 2, 6)); // => [1, 2, 6, 1]

// 3. Insert a card at the top of the stack
function insertItemAtTop(deckOfCards, newCard) {
  deckOfCards.push(newCard);
  return deckOfCards;
}

// newCard = 8
console.log(insertItemAtTop([5, 9, 7, 1], 8)); // => [5, 9, 7, 1, 8]

// 4. Remove a card from the stack
function removeItem(deckOfCards, position) {
  deckOfCards.splice(position, 1);
  return deckOfCards;
}

// position = 2
console.log(removeItem([3, 2, 6, 4, 8], 2)); // => [3, 2, 4, 8]

// 5. Remove the top card from the stack
function removeItemFromTop(deckOfCards) {
  deckOfCards.pop();
  return deckOfCards;
}

console.log(removeItemFromTop([3, 2, 6, 4, 8])); // => [3, 2, 6, 4]

// 6. Insert a card at the bottom of the stack
function insertItemAtBottom(deckOfCards, newCard) {
  deckOfCards.unshift(newCard);
  return deckOfCards;
}

// newCard = 8;
console.log(insertItemAtBottom([5, 9, 7, 1], 8)); // => [8, 5, 9, 7, 1]

// 7. Remove a card from the bottom of the stack
function removeItemAtBottom(deckOfCards) {
  deckOfCards.shift();
  return deckOfCards;
}

console.log(removeItemAtBottom([8, 5, 9, 7, 1])); // => [5, 9, 7, 1]

// 8. Check the size of the stack
function checkSizeOfStack(deckOfCards, stackSize) {
  return deckOfCards.length === stackSize ? true : false;
}

// stackSize = 4;
console.log(checkSizeOfStack([3, 2, 6, 4, 8], 4)); // => false
