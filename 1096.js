for (let i = 0; i <= 2; i = (i + 0.2)) {
    
    for (let j = 1+i; j <= 3+i; j++) {
        
        if (i < 0.2) {

         console.log('I=' + i + ' ' + "j=" + Math.round(j));   
        }
        
        else {
        
            console.log('I=' + i.toFixed(1) + ' ' + "j=" + j.toFixed(1));  
        }

    }
}