const sprate=[
    {name:"sohel",age:25},
    {name:"ahmed",age:20,toggle:true}
]

const newTodo={name:"todo",age:24}
const updtetoso=[...sprate,{...newTodo,toggle:false}]

console.log(updtetoso)