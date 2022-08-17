// function buildBirthdaySign(age) {

//     return `Happy Birthday! What a ${age>=50? 'mature':'young'} fellow you are.`
//    }
   
//    console.log(buildBirthdaySign(40))

// function graduationFor(name, year) {
 
//     return `Congratulations ${name}!\nClass of ${year}`
// }

// console.log(graduationFor('Hannah', 2022))

function costOf(sign, currency) {
let ln=sign.length
return `Your sign costs ${((ln*2)+20).toFixed(2)} ${currency}`
  
}


console.log(costOf('Happy Birthday Rob!', 'dollars'))