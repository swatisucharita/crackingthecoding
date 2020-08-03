function sortedMerge(a = [], b = []) {
    let posA = 0;
    let posB = 0;
    // const result = [];

    // while (posA < a.length || posB < b.length) {
    //     if (posA === a.length) {
    //         result.push(b[posB]);
    //         posB++;
    //     } else if (posB === b.length) {
    //         result.push(a[posA]);
    //         posA++;
    //     } else if(a[posA] < b[posB]) {
    //         result.push(a[posA]);
    //         posA++;
    //     } else if (a[posA] > b[posB]) {
    //         result.push(b[posB]);
    //         posB++;
    //     } else {
    //         result.push(a[posA]); // remove duplicate
    //         posA++;
    //         posB++;
    //     }
    // }

    while (posB < b.length) {
        if (posA === a.length) {
            a.splice(posA, 0, b[posB]);
            posB++;
        } else if (a[posA] > b[posB]) {
            a.splice(posA, 0, b[posB]);
            posB++;
            posA++
        } else {
            posA++;
        }
    }
    return a;
}

console.log(JSON.stringify(sortedMerge([1,3,4], [2,6,8])) === JSON.stringify([1,2,3,4,6,8]))
console.log(JSON.stringify(sortedMerge([1,2,3,4], [0,2,3,4])) === JSON.stringify([0,1,2,2,3,3,4,4]))