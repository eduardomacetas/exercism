// 1. Determine whether the lasagna is done
function cookingStatus(time) {
  if (time === 0) {
    return "Lasagna is done.";
  } else if (time >= 0) {
    return "Not done, please wait.";
  } else {
    return "You forgot to set the timer.";
  }
}

console.log(cookingStatus(12)); // => 'Not done, please wait.'
console.log(cookingStatus()); // => 'You forgot to set the timer.'

// 2. Estimate the preparation time
function preparationTime(layers, time = 2) {
  return layers.length * time;
}

const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];
console.log(preparationTime(layers, 3)); // => 18
console.log(preparationTime(layers)); // => 12

// 3. Compute the amounts of noodles and sauce needed
function quantities(layer) {
  var myObj = new Object();
  let totalSauce = 0;
  let tolalNoodles = 0;
  for (let i = 0; i < layer.length; i++) {
    if (layer[i] === "sauce") {
      totalSauce += 1;
    } else if (layer[i] === "noodles") {
      tolalNoodles += 1;
    }
  }
  myObj.nodles = tolalNoodles * 50;
  myObj.sauce = totalSauce * 0.2;

  return myObj;
}

console.log(
  quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"])
); // => { noodles: 100, sauce: 0.4 }

// 4. Add the secret ingredient
function addSecretIngredient(friendsList, myList) {
  const lastItem = friendsList[friendsList.length - 1];
  myList.push(lastItem);
  return myList;
}

const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];
console.log(addSecretIngredient(friendsList, myList));

// 5. Scale the recipe
function scaleRecipe(recipe, portions) {
  let result = {};
  for (let key in recipe) {
    result[key] = (recipe[key] * portions) / 2;
  }
  return result;
}

const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

console.log(scaleRecipe(recipe, 4));
// =>
// {
// noodles: 400,
// sauce: 1,
// mozzarella: 2,
// meat: 200,
// };

console.log(recipe);
// =>
// {
//   noodles: 200,
//   sauce: 0.5,
//   mozzarella: 1,
//   meat: 100,
// };
