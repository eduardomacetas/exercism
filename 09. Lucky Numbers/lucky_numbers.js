// 1. Calculate the sum for the numbers on the slot machine
function twoSum(number1, number2) {
  let numberA = Number(String(number1).replace(/,/g, ""));
  let numberB = Number(String(number2).replace(/,/g, ""));
  return numberA + numberB;
}

console.log(twoSum([1, 2, 3], [0, 7])); //=> 130

// 2. Determine if a number is a palindrome
// function luckyNumber(number) {
//   let intArr = Array.from(String(number));
//   let result = false;
//   for (let i = 0; i < intArr.length; i++) {
//     if (i < intArr.length / 2) {
//       console.log("intArr[i] =>", intArr[i]);
//       console.log(
//         "intArr[intArr.length - 1 - i] =>",
//         intArr[intArr.length - 1 - i]
//       );
//       intArr[i] === intArr[intArr.length - 1 - i]
//         ? (result = true)
//         : (result = false);
//     }
//     return result;
//   }
// }

// console.log(luckyNumber(1441)); //=>  true
// console.log(luckyNumber(1231)); //=> false
// console.log(luckyNumber(123)); //=> false

// 3. Generate an error message for invalid user input
function errorMessage(input) {
  if (isNaN(input)) {
    return "Must be a number besides 0";
  } else if (input === "") {
    return "Required field";
  } else {
    return "";
  }
}

console.log(errorMessage("123")); // => ''
console.log(errorMessage("")); // => 'Required field'
console.log(errorMessage("abc")); // => 'Must be a number besides 0'
