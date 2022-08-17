// const timeStr = '12:10 AM';

const secondTimeStr = '12:18 AM';
const convertTime = timeStr => {
   const [time, modifier] = timeStr.split(' ');

   let [hours, minutes] = time.split(':');

 
   if (hours === '12') {
      hours = '00';
      console.log(hours);
   }
   if (modifier.endsWith("PM")) {
      
      console.log(hours)

      hours = parseInt(hours, 10) + 12;
   
   }
   if(hours.length === 1 ){
      hours = "0" + hours;
  
   }
   if( minutes.length ===1){
      minutes = "0" + minutes;
   }
   return `${hours}:${minutes}`;
};
// console.log(convertTime(timeStr));
console.log(convertTime(secondTimeStr));