// birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

// function totalBirdCount(a, b) {
//   let sum = 0;

//   const weeks = parseInt(a.length );

//   for (let i = 0; i < a.length; i++) {
//     sum = sum + a[i];
//   }
//   console.log(sum);
//   return parseInt(sum / );
// }

// console.log(totalBirdCount(birdsPerDay, 2));

// function birdsInWeek(birdsPerDay, week) {

//   return  birdsPerDay.slice(7 * week - 7, 7 * week)

//   }
// console.log(  birdsInWeek(birdsPerDay, 2))
birdsPerDay = [2, 5, 0, 7, 4, 1];
function fixBirdCountLog(birdsPerDay) {


  for (let i = 0; i < birdsPerDay.length; i=i+2) {


 birdsPerDay[i] +=1
  }
 
  return birdsPerDay

}

console.log(fixBirdCountLog(birdsPerDay))
