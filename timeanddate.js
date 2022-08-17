const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
const date1= new Date(dateText1)
const date2=new Date(dateText2)

     const result = (date2 - date1) / (1000 * 3600 * 24)
 console.log(result)
   
}

getDaysBetweenDates(new Date('10-15-2020'), '12/1/2020')
