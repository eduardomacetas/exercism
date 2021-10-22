// More information:https://exercism.org/tracks/javascript/exercises/mixed-juices

// 1. Determine how long it takes to mix a juice
function timeToMixJuice(juice) {
  switch (juice) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

console.log(timeToMixJuice("Tropical Island"));
console.log(timeToMixJuice("Berries & Lime"));

// 2. Replenish the lime wedge supply
function limesToCut(limeWedges, array) {
  let wedgeCut = 0; // cantidad de litros
  let limes = 0; // cantidad de limones
  while (wedgeCut < limeWedges) {
    if (array[limes] === "small") {
      limes += 1;
      wedgeCut += 6;
    } else if (array[limes] == "medium") {
      limes += 1;
      wedgeCut += 8;
    } else {
      limes += 1;
      wedgeCut += 10;
    }
  }
  return limes;
}

console.log(limesToCut(25, ["small", "small", "large", "medium", "small"])); // => 4

// 3. Finish up the shift

function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders);
    orders.shift();
  }
  return orders;
}

console.log(
  remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
);
