// const scoreBoard = {
//     'Amil Pastorius': 99373,
//     'Min-seo Shin': 0,
//     'Jesse Johnson': 1337,
// };
// function updateScore(scoreBoard, player, score) {
//     // return { 
//     //     ...scoreBoard, 
//     //     [player]: scoreBoard[player] ? scoreBoard[player] + score : null 
//     // }

//     // if (scoreBoard.hasOwnProperty(player)) {
//     //     return {
//     //         ...scoreBoard, [player]: scoreBoard[player] + score
//     //     }
//     // }
//     // return scoreBoard;


//     scoreBoard[player] = scoreBoard[player] + score;
// }

// // let re= addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373);
// updateScore(scoreBoard,   'Min-seo Shin', 73)
// updateScore(scoreBoard, 'Jesse Johnson', 1337); 
//     //  console.log(scoreBoard);

// const scoreBoard = {
//     'Dave Thomas': 44,
//     'Freyja Ćirić': 539,
//     'José Valim': 265,
//   };
//   function applyMondayBonus(scoreBoards) {


//     for (let keys in scoreBoards) {



//         scoreBoards[keys] +=  100


//     }


//   }



//   applyMondayBonus(scoreBoard)

//   console.log(scoreBoard)

// function normalize(score) {


//     return 2 * score + 10;
// }

// function normalizeScore(a) {

//     return a.normalizeFunction(a.score)

// }

// const params = { score: 400, normalizeFunction: normalize };
// console.log(normalizeScore(params));

const user={
    name:"sohel",
    age:29
}

let {name:"sohel ahmed",selery=235}=user

console.log(user);
