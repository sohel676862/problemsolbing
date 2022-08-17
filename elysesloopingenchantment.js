// const cardType = 3;

// function cardTypeCheck(stack, card) {
//   let update = 0;

//   const lt = stack.forEach( (num,index) => {
//     if (num === card) {
//       update++;
//     }
//   });
//   return update;
// }

// console.log(cardTypeCheck([1, 2, 3, 3, 4], cardType));

function determineOddEvenCards(stack, type) {
    let update = 0;
    for (const n of stack) {
        if (type) {   
            if(n %2==0){
               update++;
            }
        }
      else if(n %2!==0){

        update++;
      }
    }
    return update;
}
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true));
