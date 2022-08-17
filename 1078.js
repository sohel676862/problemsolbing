var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let n = parseInt(lines[0])
console.log({n})
console.log({ input })
console.log({ lines });
let splittedArray = [];
for (let i = 1; i < lines.length; i++) {
    // console.log(lines[i].split(" "));
    let splitted = lines[i].split(" ").map(item => parseFloat(item));
    splittedArray.push(splitted);

}

console.log({splittedArray})

splittedArray.forEach((element, idx) => {
    let avg = 0;
    let sum = 0;
    console.log({element})
    element.forEach(item => {
        // console.log(item);
        sum += (item * (idx + 2));
    });
    console.log(sum);
    avg = sum / element.length;
    // console.log(avg)
});