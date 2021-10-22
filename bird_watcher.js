// More information: https://exercism.org/tracks/javascript/exercises/bird-watcher

// 1. Determine the total number of birds that you counted so far
function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBirds += birdsPerDay[i];
  }
  return totalBirds;
}

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
console.log(totalBirdCount(birdsPerDay)); // 34

// 2. Calculate the number of visiting birds in a specific week
function birdsInWeek(birdsPerDay, week) {
  let totalBirds = 0;
  for (let i = 7 * (week - 1); i < 7 * week; i++) {
    console.log(birdsPerDay[i]);
    totalBirds += birdsPerDay[i];
  }
  return totalBirds;
}

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
console.log(birdsInWeek(birdsPerDay, 2)); // => 12

// 3. Fix a counting mistake
function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] = birdsPerDay[i] + 1;
  }
  return birdsPerDay;
}

birdsPerDay = [2, 5, 0, 7, 4, 1];
console.log(fixBirdCountLog(birdsPerDay)); // => [3, 5, 1, 7, 5, 1]
