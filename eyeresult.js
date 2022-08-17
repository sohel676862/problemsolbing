// const position = 2;
// function getItem(a,b){
   
//     const re=a[b]
//     console.log(re)
// };

// getItem([1, 2, 4, 1], position)

// const position = 0;
// const replacementCard = 7;

// function setItem(a,b,c){
// const re=a.splice(b,1,c)
// console.log(a)

// }

// setItem([1, 2, 3], position, replacementCard)

// const newCard = 8;

// function insertItemAtTop(a,b,){
 
// const re=a.push(b)
// console.log(a)
// }

// insertItemAtTop([5, 9, 7, 1], newCard);

const position = 2;
 function removeItem(a,b){

    const re=a.splice(2,2)
    console.log(re,a)
  

 }

removeItem([3, 2, 6, 4, 8], position);