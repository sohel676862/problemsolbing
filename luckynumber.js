
// function twoSum(array1, array2) {


//     let jn = parseInt(array1.join(''));
//     let jn1 = parseInt(array2.join(''));

//     return jn+jn1;





// }

// console.log(twoSum([1, 2, 3], [0, 7]));
//Determine if a number is a palindrome///


// function luckyNumber(input) {

//     const convert=input.toString();

// const palendom= convert.split('').reverse().join('').trim();
// console.log(palendom)
// if(convert === palendom) {
//     return true;
// }
// else {
//     return false;
// };


//   }


// console.log(luckyNumber(121));

//Generate an error message for invalid user input//

function errorMessage(input) {
    let getvalue = input || null;

    if (getvalue == null) {
        return 'Required field'
    }

    else if (!Number(input)) {

        return 'Must be a number besides 0'
    }

    return ""

    // let convertostring=input.toString();

}

console.log(errorMessage('123.2'));