process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    // main();    
});

function readLine() {
    return inputString[currentLine++];
}
const n = +(readLine());
console.log(n);
for (let i = 0; i < n; i++) {
    const a = +(readLine());
  
    try {
        console.log(isPositive(a));
    } catch (e) {
        console.log(e.message);
    }
}