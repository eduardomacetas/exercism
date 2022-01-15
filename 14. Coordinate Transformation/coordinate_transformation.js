// // 1. Translate the coordinates
function translate2d(dx, dy) {
  return function moveCoordinatesRight2Px(x, y) {
    return [x + dx, y + dy];
  };
}

// const moveCoordinatesRight2Px = translate2d(2, 0);
// const result1 = moveCoordinatesRight2Px(4, 8); // result => [6, 8]
// console.log("Result =>", result1);

// 2. Scale the coordinates
function scale2d(dx, dy) {
  return function doubleScale(x, y) {
    return [x * dx, y * dy];
  };
}

// const doubleScale = scale2d(2, 2);
// const result2 = doubleScale(6, -3); // result => [12, -6]
// console.log("result =>", result2);

// 3. Compose transformation functions
function composeTransformation(firstFunction, secondFunction) {
  return function (x, y) {
    const fResult = firstFunction(x, y);
    return secondFunction(fResult[0], fResult[1]);
  };
}

const moveCoordinatesRight2Px = translate2d(2, 0);
const doubleCoordinates = scale2d(2, 2);
const composedTransformations = composeTransformation(
  moveCoordinatesRight2Px,
  doubleCoordinates
);
const result3 = composedTransformations(0, 1); // result => [4, 2]
console.log("result =>", result3);

// 4. Save the results of functions
function memoizeTransform(someFunction) {
  let savedX, savedY, savedResult;
  return function (x, y) {
    if (x !== savedX || y !== savedY) {
      savedX = x;
      savedY = y;
      savedResult = someFunction(x, y);
    }
    return savedResult;
  };
}

const tripleScale = scale2d(3, 3);
const memoizedScale = memoizeTransform(tripleScale);

console.log(memoizedScale(4, 3)); // => [12, 9], this is computed since it hasn't been computed before for the arguments
console.log(memoizedScale(4, 3)); // => [12, 9], this is remembered, since it was computed already
