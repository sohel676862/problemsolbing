///Object Destructuring in JavaScript////////////////////////////////
const pet = {
    name: 'Captain',
    food: 'Kibble',
    color: 'Black'
   };

   //get values from
//    let name=pet.name

   //add value
   pet.address="cumilla"
  //update value;
  pet["name"]="ahmed"
  ///
 /// Object Destructuring
 let {name,address}=pet
 ////
 let updateobject=[
    {name:"ahmed",id:1},
    {name:"ahmed",id:2}
]

// let updatenewObject=updateobject.map((item)=>{
//     if(item.id==1){
//         return {...item,address:"cumilla"};
//     }
//     else{
//         return item;

//     }
// })
// console.log(updatenewObject)

//new Object add

// let newonjectadd=[...updateobject,{name:"sohel",id:3}]
// console.log(newonjectadd)
// let addnewarr={
//     name: 'Captain',
//     food: 'Kibble',
//     color: 'Black'
//    };

//    addnewarr.arr=[
//     {address:"cumilla"}
//    ]
//    console.log(addnewarr)

///access dainamik value
let a=2

let ob={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",
7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}

console.log(ob[a])