// function cookingStatus(a) {

const { floor } = require("lodash");

//     if (a === 0) {
//         return 'Lasagna is done.'
//     }

//     else if (a) {
//         return 'Not done, please wait.'
//     }
//     return 'invalid'

// }

// console.log(cookingStatus());
// const manyLayers = [
//     'sauce',
//     'noodles',
//     'béchamel',
//     'meat',
//     'mozzarella',
//     'noodles',
//     'ricotta',
//     'eggplant',
//     'béchamel',
//     'noodles',
//     'sauce',
//     'mozzarella',
//   ];
// function preparationTime(layers, number) {

//     const leyer = layers.length;

//   const setnumber = number ? number : 2;

//   return leyer * setnumber;
// }
// console.log(preparationTime(manyLayers,1));

//Compute the amounts of noodles and sauce needed////////////////////////////////

// function quantities(item) {
//   let object = {
//     noodles: 0,
//     sauce: 0,
//   };

//   for (let i = 0; i <= item.length; i++) {
//     if (item[i] === "noodles") {
//       object.noodles += 50;
//     }
//     if (item[i] === "sauce") {
//       object.sauce += 0.2;
//     }
//   }

//   return object;
// }

// console.log(
//   quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"])
// );

//  Add the secret ingredient //
// const friendsList = ["sauce", "noodles", "béchamel", "marjoram"];
// const myList = ["sauce", "noodles", "meat", "tomatoes"];
// function addSecretIngredient(a, b) {

// const ba= b.push(a[a.length-1]);
// console.log(ba)

//   // let unice = [...new Set(update)];
//   // console.log(unice);
// }

// console.log(addSecretIngredient(friendsList, myList));

Elyses Destructured Enchantments
///Scale the recipe
const recipe1 = {
  sauce: null,
  noodles: 250,
  meat: 150,
  tomatoes: 3,
  onion: 0.5,
};

function scaleRecipe(a, b) {
  let update={...a}
  let caltolateRecipe = b / 2;

  for (let key in update) {
    update[key] = update[key] * caltolateRecipe;
  }

  return update
}

scaleRecipe(recipe1, 6);
