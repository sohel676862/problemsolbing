// var DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
// function encodeId(num){
// var base= DICTIONARY.length;
// let endode=0;
// if(num==0){
//     return DICTIONARY[0]
// }
// while(num>0){
//     endode +=DICTIONARY[(num % base)];
//     num=Math.floor(num/base);
// }
// return reverseFunction(endode)
// }
// function reverseFunction(str){
// console.log({str})
//   let reverse='';
//   for(var i=str.length-1;i>=0;i--){
//     reverse += str[i];

//   }
//  return reverse
// }
// console.log(encodeId(11231230 ));



// function decodeId(id){
//     let base=DICTIONARY.length;
//     let decode=0;
//     for(var i=0;i<id.split("").length;i++){
//         decode =decode*base +DICTIONARY.indexOf(id.charAt(i));
//         console.log(decode)
//     }
//     console.log(decode);
// }
// decodeId('VhU2')

let arr = [1, 2, 3, 4, 5];
let target = 9

function findtowNumberadd(a, b) {
    for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
           if(a[i] + a[j]===b){
            console.log(a[i],a[j])
           }
        }
    }
    return -1
}
findtowNumberadd(arr, target)