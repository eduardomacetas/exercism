// More information: https://exercism.org/tracks/javascript/exercises/vehicle-purchase

// 1. Determine if you will need a drivers licence
function needsLicense(vehicle) {
  return vehicle === "car" || vehicle === "truck" ? true : false;
}

// 2. Choose between two potential vehicles to buy
function chooseVehicle(vehicle1, vehicle2) {
  const text = " is clearly the better choice.";
  return vehicle1 < vehicle2 ? vehicle1 + text : vehicle2 + text;
}

// 3. Calculate an estimation for the price of a used vehicle
function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return (originalPrice * 80) / 100;
  } else if (age > 10) {
    return (originalPrice * 50) / 100;
  } else {
    return (originalPrice * 70) / 100;
  }
}

console.log(needsLicense("car")); // => true
console.log(needsLicense("bike")); // => false

console.log(chooseVehicle("Wuling Hongguang", "Toyota Corolla")); // =>  'Toyota Corolla is clearly the better choice.'
console.log(chooseVehicle("Volkswagen Beetle", "Volkswagen Golf")); // =>  'Volkswagen Beetle is clearly the better choice.'

console.log(calculateResellPrice(1000, 1)); // 800
console.log(calculateResellPrice(1000, 5)); // 700
console.log(calculateResellPrice(1000, 15)); // 500
