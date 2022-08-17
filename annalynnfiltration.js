// const knightIsAwake = true;
 
// function canExecuteFastAttack(knightIsAwake){

//     if(!knightIsAwake){
//         return true;
//     }
//     else return false;

// }

// const result=canExecuteFastAttack(knightIsAwake)
// console.log(result)
// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;
// function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {

//     if(archerIsAwake && (!knightIsAwake && !prisonerIsAwake)){
//         return true
//     }
//       return false
//     }

//     const result=canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)
//     console.log(result)

const archerIsAwake = false;
const prisonerIsAwake = true;
function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
    if( !archerIsAwake && prisonerIsAwake){
        return true
      }
      else{
        return false
      }

}

console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake))


// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;
// const petDogIsPresent = false;


// const canFreePrisoner=( knightIsAwake,archerIsAwake, prisonerIsAwake, petDogIsPresent) => {

//     if((prisonerIsAwake && !knightIsAwake && !archerIsAwake) || (!archerIsAwake && petDogIsPresent)){
//         return true;
//     }
// return false;

// }

// const result=canFreePrisoner( knightIsAwake,archerIsAwake, prisonerIsAwake, petDogIsPresent)

// console.log(result)