const d = new Date('10/11/2009')
console.log(d)
 function date(d){
    let dayName;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
  const dayIndex = d.getDay()
  console.log(dayIndex)
 dayName = days[dayIndex] 
 console.log(dayName)
 }
date(d)