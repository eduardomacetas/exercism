// 1. Determine if you will need a drivers licence
function needsLicense(kind) {
  return kind === "car" ? true : false;
}

console.log(needsLicense("car")); // => true
console.log(needsLicense("bike")); // => false

// 2. Choose between two potential vehicles to buy
function chooseVehicle(option1, option2) {
  return option1 < option2
    ? option1 + " is clearly the better choice."
    : option2 + "is clearly the better choice.";
}

console.log(chooseVehicle("Wuling Hongguang", "Toyota Corolla")); // =>  'Toyota Corolla is clearly the better choice.'
console.log(chooseVehicle("Volkswagen Beetle", "Volkswagen Golf")); // =>  'Volkswagen Beetle is clearly the better choice.'

// 3. Calculate an estimation for the price of a used vehicle
function calculateResellPrice(originalPrice, age) {
  if (age <= 3) {
    return originalPrice * 0.8;
  } else if (age > 10) {
    return originalPrice * 0.5;
  } else {
    return originalPrice * 0.7;
  }
}

console.log(calculateResellPrice(1000, 1)); // => 800
console.log(calculateResellPrice(1000, 5)); // => 700
console.log(calculateResellPrice(1000, 15)); // => 500
