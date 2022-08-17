const add=(re)=>{
    console.log({re})

}

const re=(a,b,callback)=>{

    res=a+b;
    callback(res)


}

re(1,2,add)