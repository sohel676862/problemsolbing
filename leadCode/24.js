let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
function isPrime(arr) {
    for (var i = 0; i < arr.length; i++) {
        let prime = 1
        let count=Math.sqrt(arr[i])
        // console.log(count)
        for (var j = 2; j < count; j++) {
            if (i % j === 0) {
                prime = 0
                count++
                break;

            }
        }
        if (prime) {
            console.log(i)
        }
    }

}
isPrime(arr) 