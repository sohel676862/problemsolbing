// const deck = [1, 2, 3, 4, 10];

// function seeingDouble(deck) {
//  let re=   deck.map(num=> num*2)

//   }

// seeingDouble(deck);

// const deck = [ 3, ];

// function threeOfEachThree(deck) {
//     const ts = deck.reduce((a, c) => {
//         if (c === 3) {
//             a.push(3)
//             a.push(3)

//         } else {
//             a.push(c);
//         }

//         return a;
//     }, [])
//     return ts;
// }
// console.log(threeOfEachThree(deck))

// const deck = [9, 10, 5, 9, 4, 3, 1, 2, 6, 7];

// function middleTwo(deck) {
//     const rst = deck.length - 2;
// console.log(rst)
//     const st = deck.splice(1, rst);

//     let reverst = deck.reverse();
//     const re = st.splice(st.length / 2, 0, ...deck);

//     return st;
// }

// console.log(middleTwo(deck));
// const deck = [1, 2, 9, 1, 2, 2, 6, 7];

// function twoIsSpecial(deck){

//     let fi=deck.filter(f=> f===2)
// return fi
// }
// console.log(twoIsSpecial(deck))

// const deck = [10, 1, 5, 3, 2, 8, 7]

// function perfectlyOrdered(deck) {
//     let pr=deck.sort((a,b)=> a-b)
// return pr
// }
// perfectlyOrdered(deck)
// const deck = [10, 1, 5, 3, 2];

// function reorder(deck){
//     const re=deck.reverse();
// return re
// }
// reorder(deck);