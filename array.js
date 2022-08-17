// let arr1={
//     items: [

//     ]
// }

// let update={
//   ...arr1,items: [...arr1.items,{name:"sohel"},{id:1}]
// }
// console.log(update)

// function avarage(a, index = 0) {

//   let arr = [];

//   if (Array.isArray(a[index])) {
    
//   } else {
//     return avarage(a[index], index + 1);
//     arr.push(a[index]);
//   }
//   console.log(arr);

// }

// avarage([ [1, 2, 3], [2, 4, 5],[6, 7, 8],]);
var matrix3by3 = [[1,2,3],[4,5,6],[7,8,9]];

function matrix(a){
  for (var i = 0; i < a.length; i++) {
for (var j = 0; j < a.length; j++) {
  console.log(a[i][j]);
}
  }

}
matrix(matrix3by3)