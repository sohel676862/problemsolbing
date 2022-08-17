// const transform = (old) => {
//   let res = {};
//   let keysArray = Object.keys(old);
//   //  console.log({keysArray});
//   keysArray.forEach((key) => {
//     let kvalue = old[key];

//     //  console.log({kvalue}); //
//     for (let i = 0; i < kvalue.length; i++) {
//       let convert = kvalue[i].toLowerCase();
//       let intejar= Number(key);
  
//       res[convert] = intejar;
//     }
//   });

//   let result = Object.entries(res);
//   let sort = result.sort(([a], [b]) => {
//     return a.localeCompare(b);
//   });

//   let reduce = result.reduce((r, [k, v]) => {
//     r[k] = v;
//     return r;
//   },{});
//   return reduce;
// };

// console.log(transform({ 1: ['A']}))

////////////////////////////////////////////////////////////////

// const maxSpeed = {
//   car: 300,
//   bike: 60,
//   motorbike: 200,
//   airplane: 1000,
//   helicopter: 400,
//   rocket: 8 * 60 * 60
// };

// // const sortable = Object.entries(maxSpeed).sort(([,a],[,b]) => a-b).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
// let con=Object.entries(maxSpeed)
// // console.log(con)
// let sort=con.sort(([a,],[b,])=>{

//   return a.localeCompare(b)

// })
// const reduce=  sort.reduce((r, [k, v]) => {

// r[k]=v
// return r
//  }, {});

// console.log(reduce)

// console.log(sortable);


const mixfunction=(old)=>{

  let converdnew={}
  let converdtokey=Object.keys(old);
let setvaluinkey=converdtokey.forEach(key=>{

  let setkey=old[key];
  
  for (let i=0; i<setkey.length; i++) {

    let kvalue=setkey[i].toLowerCase();
    let num=Number(key)
    converdnew={
      ...converdnew,
      [kvalue]:num
    }


  }


  
  })

let converttoarray=Object.entries(converdnew);
let sort=converttoarray.sort(([a,],[b,])=>{

  return a.localeCompare(b)

})

let reduce=sort.reduce((r,[k,v])=>{

  r[k]=v
  return r
},{})
console.log({reduce})

}
mixfunction({
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
})