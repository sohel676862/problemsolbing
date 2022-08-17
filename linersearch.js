const linirsearch=(arr,val,i=0) => {
if(i>=arr.length) return -1;
if(arr[i]==val) return arr[i];

return linirsearch(arr,val,i+1)

   
}

let re= linirsearch([1,2,3,4,5,6,7,8,9],3)
console.log(re)