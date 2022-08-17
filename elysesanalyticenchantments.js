// const card = 3;
// function getCardPosition(stack, card) {

// //   for (let i = 0; i < stack.length; i++) {
// //     if (stack[i] === card) {
// //       return i;
// //     }
   
// //   }
// return stack.indexOf(card)
// }

// console.log(getCardPosition([9, 7, 3, 2], card));

// const card = 1;
// function doesStackIncludeCard(stack, card) {
    
//    return stack.includes(card)
//   }

//   console.log(doesStackIncludeCard([2, 3, 4, 5], card))

// function isEachCardEven(stack) {
 
//     const ev= stack.every((e)=> e % 2 == 0)

//   }

// isEachCardEven([2, 4, 6,7]);

// function doesStackIncludeOddCard(stack) {
// let st=stack.some((e)=> e % 2 !== 0)
// console.log(st)



// }

// doesStackIncludeOddCard([2, 4, 6,8]);

// function getFirstOddCard(stack) {

//   let st=stack.find((e)=> e % 2 !== 0)
//   console.log(st)
// }

// getFirstOddCard([2, 4, 1, 3]);
function getFirstEvenCardPosition(stack) {
let st=stack.findIndex((e)=> e % 2 == 0)
return st

}

console.log(getFirstEvenCardPosition([5, 2, 3, 1]))