// 1. Define the expected oven time in minutes
const EXPECTED_MINUTES_IN_OVEN = 40;

// 2. Calculate the remaining oven time in minutes
function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}
console.log(remainingMinutesInOven(30)); // => 10

// 3. Calculate the preparation time in minutes
function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}
console.log(preparationTimeInMinutes(2)); // => 4

// 4. Calculate the total working time in minutes
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
console.log(totalTimeInMinutes(3, 20)); // => 26
