const convertToBase = (num, base, numLength = 1 + ~~(Math.log(num) / Math.log(base))) =>

    numLength ? [...convertToBase(num / base | 0, base, numLength - 1), num % base] : [];
	

/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) => {

	if (baseA <= 1 || baseA % 1) throw new Error('Wrong input base')
	if (baseB <= 1 || baseB % 1) throw new Error('Wrong output base')
	if ([!digits.length, digits.length > 1 && digits[0] === 0, digits.some((digit) => digit < 0 || digit >= baseA)].some((assertion) => assertion))
		throw new Error('Input has wrong format')
	// Convert digits in base a to base 10 then convert that number to base b.
	const digits1=	digits.reduce((num, digit) => digit + num * baseA)
	console.log(digits1)
	return convertToBase(digits1,baseB
	)
}

val = convertDigitsToAskedBase([5,8],10,16)

