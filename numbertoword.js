


	var one = [ "", "one ", "two ", "three ", "four ",
				"five ", "six ", "seven ", "eight ",
					"nine ", "ten ", "eleven ", "twelve ",
					"thirteen ", "fourteen ", "fifteen ",
					"sixteen ", "seventeen ", "eighteen ",
					"nineteen " ];

	// Strings at index 0 and 1 are not used, they is to
	// make array indexing simple
	var ten = [ "", "", "twenty ", "thirty ", "forty ",
			"fifty ", "sixty ", "seventy ", "eighty ",
						"ninety " ];

	// n is 1- or 2-digit number
	function numToWords(n, s)

	{
		console.log(n)
		var str = "";
		// if n is more than 19, divide it

		if (n > 19) {
			console.log(n)
			str += ten[parseInt(n / 10)] ;
		

		}
		else {
			str += one[n];
		}

		// if n is non-zero
		if (n != 0) {
			str += s;
		}

		return str;
	}

	
	// Function to print a given number in words
	function convertToWords(n)
	{

		// stores word representation of given number n
		var out = "";

		// // handles digits at ten millions and hundred
		// // millions places (if any)
		// out += numToWords(parseInt(n / 10000000),
		// "crore ");

		// // handles digits at hundred thousands and one
		// // millions places (if any)
		// out += numToWords(parseInt((n / 100000) % 100),
		// "lakh ");

		// // handles digits at thousands and tens thousands
		// // places (if any)
		// out += numToWords(parseInt((n / 1000) % 100),
		// "thousand ");

		// // handles digit at hundreds places (if any)
		// out += numToWords(parseInt((n / 100) % 10),
		// "hundred ");

		// if (n > 100 && n % 100 > 0) {
		// 	out += "and ";
		// }

		// handles digits at ones and tens places (if any)
		out += numToWords(parseInt(n % 100), "");

		return out;
	}

	// Driver code
// var handles upto 9 digit no
	// change to unsigned var var var to
	// handle more digit number
	var n = 3;

	// convert given number in words
     const result =convertToWords(n);

    //  console.log(result);
	

