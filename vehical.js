

function chooseVehicle(a,b){

if(a.localeCompare(b) <0 ){
    return `${a} is clearly the better choice.`;
}
else {
    return `${b} is clearly the better choice.`;
}

}

console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));
// =>  'Toyota Corolla is clearly the better choice.'
console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'))