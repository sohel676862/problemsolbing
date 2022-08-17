const num=[
    {id: 1, name: 'Raman Sharma', email: 'emsda2il@email.com', number: '12345678903'},
    {id: 2, name: 'Raman Sharma', email: 'emsda2il@email.com', number: '12345678903'}
];

const num1=[ {id: 2, name: 'Raman Sharma', email: 'emsda2il@email.com', number: '12345678903'}]

const result = num.map((element,index,array) => array);
console.log(result)