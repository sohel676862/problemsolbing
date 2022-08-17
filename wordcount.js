const countWords = (word) => {
  let split = word.trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .split(' ');
  console.log(split)
  //   let count = {};

  //   split.forEach((word) => {
  //     if (count[word]) {
  //         // count[word] = count[word]++;
  //         let inc = count[word];
  //         inc++;
  //         count[word] = inc;
  //     }

  //     else{
  //         count[word] = 1;
  //     }
  //   });

  // return count;

  // };
  const reduce = split.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1
    return acc
  }, {});
  console.log(reduce)
};
console.log(countWords("one,two,three"));


const countWords = phrase => phrase
  .toLowerCase()
  .match(/\w+('\w+)?/g)
  .reduce((counts, word) => ({ ...counts, [word]: ~~counts[word] + 1 }), {});