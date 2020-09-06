// Given an array of distinct integers. 
// The task is to count all the triplets such that sum of two elements equals the third element.

function findTriplets(array) {
    if (array.length < 3) {
        return -1;
    }
    let count = 0;

    for (let i =0; i < array.length-1; i++) {
        const sum = array[i] + array[i+1];

        if (array.indexOf(sum) > -1) {
            count++;
        }
    }

    return count || -1;
}

/* TEST */
console.log(findTriplets([2,3,5,4,1,9]) === 3);
console.log(findTriplets(2,3) === -1);
console.log(findTriplets(1,2,4,7) === -1);