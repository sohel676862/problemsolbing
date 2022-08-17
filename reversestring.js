// const reverseString = (input) => {

//     const reverse=input.split('').reverse().join('');
//     console.log(reverse)

//    };

//    reverseString("sohel")



    // console.log(chars)

   function callbacks(input){
   
    return input.split('').reverse().join('');
   }

const reverseString = (input, callbacks) => {

   return callbacks(input)
   
}

const re= reverseString("sohel fgf fdg",callbacks);
console.log({re})