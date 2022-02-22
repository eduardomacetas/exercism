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

function colorCode(color) {
  return colors.indexOf(color.toLowerCase());
}

console.log(colorCode("black"));
