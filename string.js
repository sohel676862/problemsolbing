
const string="He's my king from this day until his last day"
let count=0;
let post= string.indexOf("a");
while(post !== -1) {
    count++;
    post=string.indexOf("a",post+1);
    console.log(post);
}
console.log(count);