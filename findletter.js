const validletter =(first)=>{

    let lookup={}
    for(let i=0; i<=first.length; i++){
        const letter=first[i];

        lookup[letter] ? lookup[letter] +=1 : lookup[letter] =1
        
    }
    console.log(lookup)

}

validletter("sohelahmed")