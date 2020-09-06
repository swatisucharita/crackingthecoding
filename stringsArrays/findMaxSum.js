// Given an array arr of N integers. 
// Find the contiguous sub-array with maximum sum.

function findMaxSum(arr) {
    let curSum = 0,
        maxSoFar = 0;

    for (let i = 0; i < arr.length; i++) {
        if (curSum < 0) {
            curSum = 0;
        }
        curSum += arr[i];

        if (curSum > maxSoFar) {
            maxSoFar = curSum;
        }
    }

    return maxSoFar;
}

/* TEST */
console.log(findMaxSum([-3, -2, 4, -1,-1,3, 4]) === 9) // [4, -1, -1, 3, 4]