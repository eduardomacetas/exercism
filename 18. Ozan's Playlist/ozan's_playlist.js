// 1. Remove duplicate tracks
function removeDuplicates(playlist) {
  const set = new Set();
  for (let i = 0; i < playlist.length; i++) {
    set.add(playlist[i]);
  }
  return set;
}

const playlist = [
  "Court and Spark - Joni Mitchell",
  "Big Yellow Taxi - Joni Mitchell",
  "Court and Spark - Joni Mitchell",
];

console.log(removeDuplicates(playlist));
//=> ['Court and Spark - Joni Mitchell', 'Big Yellow Taxi - Joni Mitchell']

// 2. Check whether a track has already been added
function hasTrack(playlist, track) {
  const set = new Set(playlist);
  return set.has(track);
}

const playlist2 = [
  "The Fashion Show - Grace Jones",
  "Dr. Funkenstein - Parliament",
];

console.log(hasTrack(playlist2, "Dr. Funkenstein - Parliament")); //=> true
console.log(hasTrack(playlist2, "Walking in the Rain - Grace Jones")); //=> false

// 3. Add a track
function addTrack(playlist, track) {
  const set = new Set(playlist);
  if (!set.has(track)) {
    set.add(track);
  }
  return set;
}

const playlist3 = ["Selma - Bijelo Dugme"];
console.log(addTrack(playlist3, "Atomic Dog - George Clinton")); //=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']
console.log(addTrack(playlist3, "Selma - Bijelo Dugme")); //=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']

// 4. Delete a track
function deleteTrack(playlist, track) {
  const set = new Set(playlist);
  set.delete(track);
  return Array.from(set);
}

const playlist4 = [
  "The Treasure - Fra Lippo Lippi",
  "After the Fall - Klaus Nomi",
];

console.log(deleteTrack(playlist4, "The Treasure - Fra Lippo Lippi")); //=> ['After the Fall - Klaus Nomi']
console.log(deleteTrack(playlist4, "I Feel the Magic - Belinda Carlisle")); //=> ['After the Fall - Klaus Nomi']

// 5. List unique artists
function listArtists(playlist) {
  const artists = new Set();
  for (let track of playlist) {
    artists.add(track.substring(track.indexOf("-") + 1, track.length).trim());
  }
  return Array.from(artists);
}

const playlist5 = [
  "All Mine - Portishead",
  "Sight to Behold - Devendra Banhart",
  "Sour Times - Portishead",
];

console.log(listArtists(playlist5)); //=> ['Portishead', 'Devendra Banhart']
