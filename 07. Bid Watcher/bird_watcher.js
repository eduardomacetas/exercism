// 1. Determine the total number of birds that you counted so far
function totalBirdCount(birdsPerDay) {
  let totalBird = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBird = totalBird + birdsPerDay[i];
  }
  return totalBird;
}

// birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1])); // => 34

// 2. Calculate the number of visiting birds in a specific week
function birdsInWeek(birdsPerDay, week) {
  const start = (week - 1) * 7;
  const end = week * 7;
  let totalBird = 0;
  for (let i = start; i < end; i++) {
    totalBird = totalBird + birdsPerDay[i];
  }
  return totalBird;
}

// birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2)); // => 12

// 3. Fix a counting mistake
function fixBirdCountLog(birdsPerDay) {
  let fixBirdCount = [...birdsPerDay];
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    fixBirdCount[i] = birdsPerDay[i] + 1;
  }
  return fixBirdCount;
}

// birdsPerDay = [2, 5, 0, 7, 4, 1];
console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1])); // => [3, 5, 1, 7, 5, 1]
