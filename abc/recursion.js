

let arr=[1,2,3,4,5,6,7,8,9]
let result=[]
const helper=(arr)=>{
   
if(arr.length === 0) return;
if(arr[0] % 2===0){
 result.push(arr[0])
}
helper(arr.slice(1))
return result 
}

console.log(helper(arr))