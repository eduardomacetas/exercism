// More information:https://exercism.org/tracks/javascript/exercises/lucky-numbers

// 1. Calculate the sum for the numbers on the slot machine
function twoSum(number1, number2) {
  return Number(number1.join("")) + Number(number2.join(""));
}

console.log(twoSum([1, 2, 3], [0, 7]));

// 2. Determine if a number is a palindrome
function luckyNumber(number) {
  let num = number.toString();
  for (let i = 0; i < num.length; i++) {
    console.log(".>>", num.length);
    console.log("num[i]", num[i]);
    console.log("num[num.length - i]", num[num.length - i - 1]);
    if (num[i] == num[num.length - i - 1]) {
      return true;
    } else return false;
  }
}

console.log(luckyNumber(1441));
console.log(luckyNumber(123));

// 3. Generate an error message for invalid user input
function errorMessage(userInput) {
  if (userInput == false) {
    return "Required field";
  }

  if (isNaN(userInput)) {
    return "''";
  } else {
    return "Must be a number besides 0";
  }
}

console.log(errorMessage(""));
console.log(errorMessage("123"));
console.log(errorMessage("abc"));
