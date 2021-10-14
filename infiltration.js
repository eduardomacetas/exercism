// More information https://exercism.org/tracks/javascript/exercises/annalyns-infiltration

// 1. Check if the 'Fast Attack' action is possible
const knightIsAwake = true;
function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

// 2. Check if the 'Spy' action is possible
const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

// 3. Check if the 'Signal Prisoner' action is possible
const archerIsAwake = false;
const prisonerIsAwake = true;
function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake && !archerIsAwake;
}

console.log(canSignalPrisoner(false, true));

// 4. Check if the 'Free Prisoner' action is possible
const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = false;

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

console.log(
  canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
  )
);
