let nums = [2, 1, -1];
function pivot(nums) {
    let sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    let left = 0;
    let right = sum;
   
    for (var i = 0; i < nums.length; i++) {
        right = right - nums[i];
        if (right === left) {
            
            return i
        }
    
        left += nums[i];
        console.log({left})
    }
    console.log({left,right})
    return -1
}
pivot(nums)