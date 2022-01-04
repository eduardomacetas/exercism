// 1. Calculate the sum for the numbers on the slot machine
function twoSum(number1, number2) {
  let numberA = Number(String(number1).replace(/,/g, ""));
  let numberB = Number(String(number2).replace(/,/g, ""));
  return numberA + numberB;
}

console.log(twoSum([1, 2, 3], [0, 7])); //=> 130
