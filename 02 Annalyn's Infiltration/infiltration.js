let knightIsAwake;
let archerIsAwake;
let prisonerIsAwake;
let petDogIsPresent;

// 1. Check if the 'Fast Attack' action is possible
function canExecuteFastAttack(knightIsAwake) {
  return knightIsAwake ? false : true;
}

knightIsAwake = true;
console.log(canExecuteFastAttack(knightIsAwake)); // => false

// 2. Check if the 'Spy' action is possible
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake ? true : false;
}

knightIsAwake = false;
archerIsAwake = true;
prisonerIsAwake = false;
console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)); // => true

// 3. Check if the 'Signal Prisoner' action is possible
function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return archerIsAwake == false && prisonerIsAwake == true ? true : false;
}

archerIsAwake = false;
prisonerIsAwake = true;
console.log(canSignalPrisoner(false, true)); // => true

// 4. Check if the 'Free Prisoner' action is possible
function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (
    (prisonerIsAwake && !knightIsAwake && !archerIsAwake) ||
    (!archerIsAwake && petDogIsPresent)
  );
}

knightIsAwake = false;
archerIsAwake = true;
prisonerIsAwake = false;
petDogIsPresent = false;

console.log(
  canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
  ) // => false
);
