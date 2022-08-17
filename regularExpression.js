
const number = '+919876543210';
const test= /(\+91|0)?-?\d{10}/g

const result=number.match(test)

const test1=test.test(number)
console.log(test1,result)