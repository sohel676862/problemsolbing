
// const str="sohel ahmed"
// function reverseAString(str) {
//     // write your solution here
// let array=""
// array=str.split("")
// let rebersing=array.reverse()
// let joningarray=rebersing.join("");
// return joningarray

// }


// const reverse=reverseAString(str)
// console.log(reverse)

const num = 3849;

function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }

  const result=reversedNum(num);
console.log(result)