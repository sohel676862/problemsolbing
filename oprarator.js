function same(a,b) {

   
if(a.length !== b.length){
    console.log("first fasle")
    return false;
    
}

for(var i = 0; i < a.length; i++){
    let correctIndex=b.indexOf(a[i] **2);
    if(correctIndex === -1){
        console.log("second fasle")
        return false;
    }
    console.log(b)
    arr2.splice(correctIndex,1)
}
return true;
}


const result =same([12,34,34,21],[2,4,6,5]) 
console.log(result)