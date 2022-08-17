// const deck = [10, 4, 3, 7, 8];

// function getFirstCard(f){

// let [a,b,...rest]=f;



// const cards =[b,a,...rest];

// return cards


   
// }

// console.log(getFirstCard(deck));

// const deck = [2, 5, 4, 9, 3];

// function discardTopCard(deck) {
  
//     const [a,...rest]=deck
//  return [a,rest]
 

// }


// console.log(discardTopCard(deck));

const deck = [5, 4, 7, 10];

function insertFaceCards(){
    const [a,...rest]=deck
     return [a, 'jack', 'queen', 'king', ...rest]
}
console.log(insertFaceCards(deck));