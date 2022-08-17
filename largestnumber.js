let arr=[1,2,3,4,10,6,7,9]

let largenumber=[];
for(let i=0;i<=arr.length;i++){
    if(arr[i]>largenumber){
        largenumber=arr[i]
    }
}
console.log(largenumber)