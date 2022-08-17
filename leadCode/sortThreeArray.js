// var arr1 = [1, 5, 5, 10];
// var arr2 = [3, 4, 5, 5, 10];
// var arr3 = [5, 5, 10, 20];

// function sortThreeArray(arr) {
//   var hashmap = {},
//     last,
//     answer = [];

//   for (var i = 0; i < arr.length; i++) {
//     let itemArray = arr[i];
//     // console.log(itemArray.length)
//     last = null;
//     for (var j = 0; j < itemArray.length; j++) {
//       var currentItem = itemArray[j];
//       if (last !== currentItem) {
//         if (!hashmap[currentItem]) {
//           hashmap[currentItem] = 1;
//             // console.log({hashmap})
//         } 
//         else {
//          hashmap[currentItem]++;
//          // console.log(hashmap);
//        }
//       }
//       last = currentItem;
//     }
//   }
  
//   console.log({hashmap})
//   for(var prop in hashmap) {
 

// if(hashmap[prop] === arr.length) {
 
  
//   //  console.log(hashmap[prop])
// }
//   }
// }

// sortThreeArray([
//   [1, 2, 3],
//   [1, 2, 3, 4],
//   [1, 2],
// ]);
function sortThreeArray(arr) {
  let answer=[];
  let hashmap={};
  for(var i=0; i<arr.length; i++) {
let arritem = arr[i];
let last=null;
for(var j=0; j<arritem.length;j++){
  let arrElement=arritem[j]

 if(last !== arrElement){
    if(!hashmap[arrElement]) {
     hashmap[arrElement]=1
    }
    else {
      hashmap[arrElement] ++
    }
 }

}
  }
  
  for( var props in hashmap){
    if(hashmap[props]===arr.length){
    answer.push(parseInt(props))
    }
  }
console.log(answer)
};
sortThreeArray([
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2],
]);
