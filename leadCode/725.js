let arr= [1,2,3,4,5,6,7,8,9,10]

function linklist(head,k){
    let len = 0;
    let cur = head;
    while (cur) {
        ++len;
        cur = cur.next;
    }
console.log(cur);
    let remainder = 0;
    let width = Math.floor(len / k);
    if (width === 0) width = 1;
    else remainder = len % k;

    let result = [];
    cur = head;
    for (let i = 0; i < k; i++) {
        const tmp = cur;

        let j = 0;
        while (j < width + (i < remainder) - 1) {
            if (cur) {
                cur = cur.next;
            }
            j++;
        }

        if (cur) {
            const temp = cur.next;
            cur.next = null;
            cur = temp;
        }

        result.push(tmp);
    }
    return result;
   

  
}
console.log(linklist(3,arr))