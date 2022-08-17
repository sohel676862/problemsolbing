function charCount(str){
    var obj={};
    for(var char of str){
       char = char.toUpperCase();
 
            if(/[a-z0-9]/.test(char)){
                console.log(obj[char])
                
                obj[char] = ++obj[char] || 1;

                }}
                console.log(obj)
               
    return obj
}

const result = charCount("hellow")

console.log(`result ${result}`)