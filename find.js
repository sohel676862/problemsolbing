const checkfind=[
{
    id: 1,
    name: 'sohel',
    email: 'sohel@gmail.com',
    number:01818188181,
    subjects:"englsi"
},
{
    id: 2,
    name: 'sohel2',
    email: 'sohel@gmail21.com',
    number:018181881811,
    subjects:"bangla"
},
{
    id: 3,
    name: 'sohel12',
    email: 'sohel@gmail13.com',
    number:018181881811,
    subjects:"bangla2"
},
{
    id: 4,
    name: 'sohel23',
    email: 'sohel@gmail23.com',
    number:018181881811,
    subjects:"bangla3"
}


]

const result = checkfind.map(nm=> nm.name).slice(0,1)
console.log(result)