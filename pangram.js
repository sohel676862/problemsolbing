
const isPangram = (input) => {
    // Code here
    const ALPHABET_ARRAY = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const inputArray = input.toLowerCase().split('')
//    console.log(inputArray)
    // let isItAPangram = true

  return  ALPHABET_ARRAY.every((alphabet) => inputArray.includes(alphabet))


}

console.log(isPangram('The the quick brown fox jumps over the lazy dog brown  over the lazy dog.' ))
// const arr=[1,2,3,4,5]
// const  isPangram = (input) => {

//     // const ALPHABET_ARRAY = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//     // const inputconvert=input.toLowerCase().split('');
        
    
//   const result=  input.every(alphabet=>{
 
//     alphabet > 0
        
//     })

//     console.log(result)
//   };
  
// console.log(isPangram(arr))
// let numbers = [1, 3, 5];
// let isEven = numbers.every(function (e) {
//     return  e === 1,2,3;
// });

// console.log(isEven);