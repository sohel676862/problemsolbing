var str="acc?7??sss?4rr1??????5"

function quesctioncheck(str) {
    
res = false;
for(let i=0; i<str.length; i++){
    for(let j=i+1; j<str.length; j++){
        if(Number(str[i]) + Number(str[j])=== 10){
            
            res = true;
            if(str.slice(i,j).split("?").length -1 < 3){
                return false;
            }
        }
    }
}
console.log(res);
return res;
}
 quesctioncheck(str); 
