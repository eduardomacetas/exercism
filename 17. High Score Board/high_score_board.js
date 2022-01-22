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
// function removePlayer(scoreBoard, playerName) {

// }

// console.log(removePlayer({ "Dave Thomas": 0 }, "Dave Thomas")); // => {}
// console.log(removePlayer({ "Dave Thomas": 0 }, "Rose Fanaras")); // => { 'Dave Thomas': 0 }
