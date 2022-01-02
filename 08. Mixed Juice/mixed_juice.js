// 1. Determine how long it takes to mix a juice
function timeToMixJuice(juice) {
  switch (juice) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;
    case "Energizer and Green Garden":
      return 1.5;
      break;
    case "Tropical Island":
      return 3;
      break;
    case "All or Nothing":
      return 5;
      break;
    default:
      return 2.5;
      break;
  }
}

console.log(timeToMixJuice("Tropical Island")); // => 3
console.log(timeToMixJuice("Berries & Lime")); // => 2.5

// 2. Replenish the lime wedge supply
function limesToCut(limeWedges, limes) {
  let numberOfLimes = 0;
  let numberOfLimesWedges = 0;
  let i = 0;

  while (numberOfLimesWedges <= limeWedges) {
    switch (limes[i]) {
      case "small":
        numberOfLimesWedges += 6;
        numberOfLimes++;
        i++;
        break;
      case "medium":
        numberOfLimesWedges += 8;
        numberOfLimes++;
        i++;
        break;
      case "large":
        numberOfLimesWedges += 10;
        numberOfLimes++;
        i++;
        break;
    }
  }
  return numberOfLimes;
}

console.log(limesToCut(25, ["small", "small", "large", "medium", "small"])); // => 4

// 3. Finish up the shift
function remainingOrders(time, juices) {
  let timeSpend = 0;
  let i = 0;
  let unpreparedJuices = [...juices];

  while (timeSpend <= time) {
    timeSpend = timeToMixJuice(juices[i]);
    unpreparedJuices.shift();
    i++;
    timeSpend++;
  }

  return unpreparedJuices;
}

console.log(
  remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
); // => ['Green Garden']
