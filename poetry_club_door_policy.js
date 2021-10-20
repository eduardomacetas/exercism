// More information: https://exercism.org/tracks/javascript/exercises/poetry-club-door-policy

// 1. Get the first letter of a sentence
function frontDoorResponse(line) {
  return line.charAt(0);
  // return line[0];
}

// 2. Capitalize a word
function frontDoorPassword(word) {
  return (
    frontDoorResponse(word).toUpperCase() + word.substring(1).toLowerCase()
  );
}

// 3. Get the last letter of a sentence
function backDoorResponse(line) {
  let trimLine = line.trim();
  return trimLine[trimLine.length - 1];
}

// 4. Be polite
function backDoorPassword(word) {
  return frontDoorPassword(word) + ", please";
}

console.log(frontDoorResponse("Stands so high"));
console.log(frontDoorPassword("SHIRE"));
console.log(backDoorResponse("Stands so high   "));
console.log(backDoorPassword("horse"));
