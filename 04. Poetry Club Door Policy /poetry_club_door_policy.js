// 1. Get the first letter of a sentence
function frontDoorResponse(line) {
  return line[0];
}

console.log(frontDoorResponse("Stands so high"));

// 2. Capitalize a word
function frontDoorPassword(password) {
  return password.charAt(0).toUpperCase() + password.slice(1);
}

console.log(frontDoorPassword("SHIRE"));
console.log(frontDoorPassword("shire"));

// 3. Get the last letter of a sentence
function backDoorResponse(line) {
  let word = line.trim();
  return word[word.length - 1];
}

console.log(backDoorResponse("Stands so high"));
console.log(backDoorResponse("Stands so high   "));

// 4. Be polite
function backDoorPassword(word) {
  return frontDoorPassword(word) + ", please";
}

console.log(backDoorPassword("horse"));
