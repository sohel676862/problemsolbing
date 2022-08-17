// const primenumber = (num) => {
//     for (var counter = 0; counter <= 100; counter++) {

//         var notPrime = 0
//         for (var i = 2; i <= counter; i++) {
//             if (counter%i===0 && i!==counter) {
//                 notPrime ++;
//             }
//         }
//         if (notPrime === 0) {
//                     console.log(counter);
//         }
//     }
// };
// primenumber(10);

function primenumber(){


for (var counter = 0; counter <= 10; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
            console.log({i,counter});
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
}
primenumber()