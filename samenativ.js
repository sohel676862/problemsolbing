function same(arr1, arr2) {

    if(arr1.length !== arr2.length){
        console.log("false")
        return false;
    }
   
    for(var i = 0; i <arr1.length; i++) {
       
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        // console.log(correctIndex)
        if(correctIndex === -1){
            console.log("false")
            return false;
        }
        console.log(  arr2.splice(correctIndex, 1))
        arr2.splice(correctIndex, 1); 
    }


return true;
}

  const result =same([1,2,3,2],[9,1,4,4]) 
//   console.log(`"erwaerw" ${result}`  )