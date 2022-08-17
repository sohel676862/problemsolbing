function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
const number=Math.floor(Math.random() *(rangeEnd - rangeStart))+rangeStart;
	return number
}

// console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
const result= randomNumberGeneratorInRange(5, 100)
console.log(result)
