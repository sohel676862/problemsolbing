// let input = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
// let st="asdfasdf"

// const output = (input) => {
//   let a=input[0].split(',')
//   let b=input[1].split(',')
// //   console.log({b})
//  let result=a.filter(x=> b.find(a=> a===x) )
//  console.log(result)

// };
// output(input);

let input = ["1, 3, 4, 7, 13, 15", "1, 2, 4, 13, 15"];

const output = (input) => {
  let ele1 = input[0].split(",");
  let ele2 = input[1].split(",");

  let newArray = [];

  for (let i = 0; i < ele1.length; i++) {
   
    if (ele2.includes(ele1[i])) {
     
      newArray.push(ele1[i]);
    }
  }
  console.log(newArray)
 
    // if (newArray.length === 0) {
    //   return false;
    // } else {
        
    //   return newArray.toString();
    // }
  
};



const callbacks = (input,callback) => {
    callback(input)


}
callbacks(input,output)