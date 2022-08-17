function br(array, value) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {

        let mid = Math.round((start + end) / 2);
        console.log(array[mid])
        if (array[mid] == value) return array[mid];
      

        else if (array[mid] < value) start = mid + 1

        else if (array[mid] > value) end = mid - 1


    }
    return -1
}

let re = br([1, 2, 3, 4, 5, 6, 7, 8], 4)
// console.log(re)