let str = "Vivasoft";
let arr = [1, 2, 3];
console.log(Array.from(str)); // ["V", "i", "v", "a", "s", "o", "f", "t"];
console.log(Array.from(arr, x => x * x)); // [1, 4, 9]