const nums = [1,2,2,4,3]

function result(nums) {
    let increment =true;
    let decriment = true;
    for(var i = 0; i < nums.length-1; i++){
        if(nums[i]  <    nums[i+1]){
     increment =false
        }
      if(nums[i] > nums[i+1]){
        decriment=false
    
      }
     }
     console.log({increment,decriment})
     return increment || decriment
}
console.log(result(nums))