// 1. Create a new high score board

function createScoreBoard() {
  let player = {
    "The Best Ever": "1000000",
  };

  return player;
}

console.log(createScoreBoard());

// 2. Add players to a score board
function addPlayer(existingScoreBoard, playerName, score) {
  let player = {
    existingScoreBoard: existingScoreBoard,
    playerName: playerName,
    score: score,
  };

  return player;
}

console.log(addPlayer({ "Dave Thomas": 0 }, "José Valim", 486373)); // => {'Dave Thomas': 0, 'José Valim': 486373}

// 3. Remove players from a score board
function removePlayer(existingScoreBoard, playerName) {
  delete existingScoreBoard[playerName];
  return existingScoreBoard;
}

console.log(removePlayer({ "Dave Thomas": 0 }, "Dave Thomas")); // => {}
console.log(removePlayer({ "Dave Thomas": 0 }, "Rose Fanaras")); // => { 'Dave Thomas': 0 }

// 4. Increase a player's score
function updateScore(scoreBoard, playerName, score) {
  scoreBoard[playerName] += score;
  return scoreBoard;
}

// 5. Apply Monday bonus points
function applyMondayBonus(scoreBoard) {
  let obj = {};
  for (let key in scoreBoard) {
    console.log("key ==>", key);
    console.log("obj ==>", scoreBoard[key]);
    obj[key] = scoreBoard[key] + 100;
  }
  return obj;
}

const scoreBoard = {
  "Dave Thomas": 44,
  "Freyja Ćirić": 539,
  "José Valim": 265,
};

console.log(applyMondayBonus(scoreBoard)); // => { 'Dave Thomas': 144, 'Freyja Ćirić': 639, 'José Valim': 365 }

// 6. Normalize a high score
function normalize(score) {
  return 2 * score + 10;
}

function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}

const params = { score: 400, normalizeFunction: normalize };
console.log(normalizeScore(params)); // => 810
