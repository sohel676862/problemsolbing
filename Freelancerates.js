
// function priceWithMonthlyDiscount(ratePerHour, numDays, discount){
// let daywork=8;

// let result;
// const cal= budget / ratePerHour;
//  result=Math.floor(cal / daywork)
//  return result


// };



// console.log(priceWithMonthlyDiscount(89, 230, 0.42))
function dayRate(ratePerHour) {
    
    const WORKING_HOURS_IN_DAY=8;
    return ratePerHour * WORKING_HOURS_IN_DAY;
  }
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const month=22
    const workHoursPerDay=8

    let months = Math.floor(numDays/ month)
    let rest = numDays - (months*22)
    if(discount === 0){
      return Math.ceil((months * month * workHoursPerDay * ratePerHour) + (rest * workHoursPerDay *  ratePerHour) )
    }
    else {
   return Math.ceil((months * month * workHoursPerDay * ratePerHour * ( 1 - discount) + (rest * workHoursPerDay *  ratePerHour)) )} 
  }



  
  

console.log(priceWithMonthlyDiscount(16, 130, 0.15))