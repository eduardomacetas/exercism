// 1. Monitor the humidity level of the room
function checkHumidityLevel(percentage) {
  if (percentage >= 70) {
    return "Throws an error";
  }
}

console.log(checkHumidityLevel(60)); // => undefined
console.log(checkHumidityLevel(100)); // Throws an error
