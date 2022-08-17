// let arr = [2, 3, 6, 5];
// let sort = (arr) => {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length - 1; j++) {
//       if (arr[j] < arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };
// let re = sort(arr);
// let largest = re[0];
// let second=re[1];
// for (let i = 1; i < re.length; i++) {
//   if (re[i] === largest) {
//     continue;
//   } else {
//     second = re[i];
//     break;
//   }
// }
// console.log(second);

function getSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            continue;
        }
        
        if ((nums[i] > secondLargest) && (nums[i] < largest)) {
            secondLargest = nums[i];
        }
    }
    
    return secondLargest;
}
