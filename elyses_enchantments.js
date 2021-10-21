// More information: https://exercism.org/tracks/javascript/exercises/elyses-enchantments

// 1. Retrieve a card from a stack
function getItem(array, position) {
  return array[position];
}

// 2. Exchange a card in the stack
function setItem(array, position, newCard) {
  array[position] = newCard;
  return array;
}

// 3. Insert a card at the top of the stack
function insertItemAtTop(array, newCard) {
  array.push(newCard);
  return array;
}

// 4. Insert a card at the bottom of the stack
function insertItemAtBottom(array, newCard) {
  array.unshift(newCard);
  return array;
}

// 5. Remove a card from the stack
function removeItem(array, position) {
  array.splice(position, 1);
  return array;
}

// 6. Remove the top card from the stack
function removeItemFromTop(array) {
  array.pop();
  return array;
}

// 7. Remove a card from the bottom of the stack
function removeItemAtBottom(array) {
  array.shift();
  return array;
}

// 8. Check the size of the stack
function checkSizeOfStack(array, stackSize) {
  return array.length === stackSize ? true : false;
}

// Notes:
// pop(): Remove an item from the end of an array.
// push(): Add items to the end of an array.
// shift(): Remove an item from the beginning of an array.
// unshift(): Add items to the beginning of an array.

console.log(getItem([1, 2, 4, 1], 2));
console.log(setItem([1, 2, 4, 1], 2, 6));
console.log(insertItemAtTop([5, 9, 7, 1], 8));
console.log(insertItemAtBottom([5, 9, 7, 1], 8));
console.log(removeItem([3, 2, 6, 4, 8], 2));
console.log(removeItemFromTop([3, 2, 6, 4, 8]));
console.log(removeItemAtBottom([8, 5, 9, 7, 1]));
console.log(checkSizeOfStack([3, 2, 6, 4, 8], 4));
