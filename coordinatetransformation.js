// function translate2d(dx,dy) {
//     let op = [];
//     return (xc, yc) => {
//         // op[0] = dx+xc;
//         // op[1] = dy+yc;

//         // return op;
//         console.log(xc, yc);
//     }

//     function translate(xc,yc){

//         // op[0] =dx +xc;
//         // op[1] = dy +yc;
//         // return op;
//         return [dx+xc,dy+yc];
//     }

//     return (xc,yc) => [dx*xc,dy*yc];
// }

// // const moveCoordinatesRight2Px = translate2d(2, 2);
// // const result = moveCoordinatesRight2Px(6, -3);
// // console.log(result);

// function translate2d(x,y){

// return (d,f)=>[x+d,y+f]

// }

// function scale2d(x,y){
//     return (d,f)=>[x*d,y*f]
// }

// const moveCoordinatesRight2Px = translate2d(2, 0);
// const doubleCoordinates = scale2d(2, 2);
// function composeTransformation(
//     moveCoordinatesRight2Px,
//     doubleCoordinates
// ) {

//    return (xc, yc) => {
//         let frest = moveCoordinatesRight2Px(xc, yc);
//         console.log({frest});

//         let fr = doubleCoordinates(frest[0], frest[1]);
//         console.log({fr});
//         return doubleCoordinates(frest[0], frest[1]);
//    }

// }
// const composedTransformations = composeTransformation(
//     moveCoordinatesRight2Px,
//     doubleCoordinates
// )
// const result = composedTransformations(0, 1);
// // result => [4, 2]
// console.log({result})

// function translate2d(a,b){

//     return (xc,yc) => [a+xc,b+yc];
// }
// function scale2d(a,b){
//     return (xc,yc) => [a*xc,b*yc];

// }

// const moveCoordinatesRight2Px = translate2d(2, 0);
// const doubleCoordinates = scale2d(2, 2);

// function composeTransformation(moveCoordinatesRight2Px, doubleCoordinates) {


//     return (xc,yc) => {
//   let first= moveCoordinatesRight2Px(xc,yc);
//   console.log(first)

// return  doubleCoordinates(first[0], first[1])


//     }


// }
// const composedTransformations = composeTransformation(
//   moveCoordinatesRight2Px,
//   doubleCoordinates
// );

// const result = composedTransformations(0, 1);
// console.log(result)

function scale2d(a, b) {

    return (xc, yc) => [a * xc, b * yc];


}


const tripleScale = scale2d(3, 3);
function memoizeTransform(tripleScale) {

    let lastResult = null;
    let lastArgs = [];

    return (a, b) => {
        if (lastArgs[0] === a && lastArgs[1] === b) {
            return lastResult;
        }
        
        lastArgs = [a, b];
        const re = tripleScale(a, b)
        lastResult = re;
        return re
    }
}

const memoizedScale = memoizeTransform(tripleScale);

console.log(memoizedScale(4, 3));
console.log(memoizedScale(4, 3));
console.log(memoizedScale(4, 4));