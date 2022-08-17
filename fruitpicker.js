

function findOldnumber(array) {
  let old = []
  function helper(input) {
    if (input.length === 0) return;

    if (input[0] % 2 !== 0) {

      old.push(input[0])
    }
    helper(input.slice(1))
  }
  helper(array)
  console.log(old)
}


let result = findOldnumber([1, 2, 3, 4, 5, 6, 7])