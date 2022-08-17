 let input= "I love dogs";

const output = (input) => {
    let lon=""
  const splite = input.split(" ");
 
  for (let i = 0; i < splite.length; i++){
    
    if(splite[i].length > lon.length){

        lon=splite[i]
    }
  }
console.log(lon)
};
output(input);
