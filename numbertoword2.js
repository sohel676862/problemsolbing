




const allowed=(n)=>{


    var one = [ "", "one ", "two ", "three ", "four ",
    "five ", "six ", "seven ", "eight ",
        "nine ", "ten ", "eleven ", "twelve ",
        "thirteen ", "fourteen ", "fifteen ",
        "sixteen ", "seventeen ", "eighteen ",
        "nineteen " ];
    
    // Strings at index 0 and 1 are not used, they is to
    // make array indexing simple
    var ten = [ "", "", "twenty ", "thirty ", "forty ",
    "fifty ", "sixty ", "seventy ", "eighty ",
            "ninety " ];
    
    
    
            const numToWords=(n,s)=>{
               
                var str = "";
                console.log(n,s)
            // if n is more than 19, divide it
            if (n > 19) {
             
                str += ten[parseInt(n / 10)] + one[parseInt(n % 10)]
                // if(one[parseInt(n % 10)]){
                //    let done= one[parseInt(n % 10)] 
                //    return done
               
                // }
            }
            else {
                // console.log(n)
                str += one[n];
            }
            if (n !== 0) {
                str += s;
            }
        
            return str;
            }
    
            const converttonumber=(n)=>{
            
                  // stores word representation of given number n
            var out = "";
           
            out += numToWords(parseInt(n / 10000000),
            "crore ");
            out += numToWords(parseInt((n / 1000000) % 100),
            "million ");
    
            out += numToWords(parseInt((n / 1000) % 100),
            "thousand ");
    
            // handles digit at hundreds places (if any)
            out += numToWords(parseInt((n / 100) % 10),
            "hundred ");
            

           out += numToWords(parseInt(n % 100), "");

	   	return out;
    
            }
    
     return       converttonumber(n)

}

  const result= allowed(6034)
 
console.log(result)