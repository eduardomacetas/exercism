// 1. Build an occasion sign
function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

console.log(buildSign("Birthday", "Rob")); // => "Happy Birthday Rob!"

// 2. Build a birthday sign
function buildBirthdaySign(age) {
  if (age >= 50) {
    return "Happy Birthday! What a mature fellow you are.";
  } else {
    return "Happy Birthday! What a young fellow you are.";
  }
}

console.log(buildBirthdaySign(45)); // => "Happy Birthday! What a young fellow you are."

// 3. Build a graduation sign
function graduationFor(name, year) {
  return `Congratulations ${name}\nClas of ${year}`;
}

console.log(graduationFor("Hannah", 2022)); // => "Congratulations Hannah!\nClass of 2022"

// 4. Compute the cost of a sign
function costOf(sign, curreny) {
  const letters = sign.length * 2;
  const price = 20 + letters;
  return `Your sign costs ${price} dollars.`;
}

console.log(costOf("Happy Birthday Rob!", "dollars")); // => "Your sign costs 58.00 dollars."
