const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = false;
function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent){

   return   archerIsAwake || prisonerIsAwake ;

};

const result = canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)
console.log(result)

// const num=123;
// const are="sadfas"
// const str="456"

// const result =(are, num, str)=>{

//    // console.log(are)
//    // console.log(num)
//    console.log(str,num)
// }

// result(num,are,str)