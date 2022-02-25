var colors = [
  "black",
  "browm",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

function resistorColorDuo(x) {
  const newArray = x.slice(0, 2);
  return newArray.map((i) => colors.indexOf(i));
}

console.log(resistorColorDuo(["black", "red", "blue"]));
console.log(resistorColorDuo(["blue", "green"]));
