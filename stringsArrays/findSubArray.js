// Requirement:
// Find sub arrays with given sum;

function findSubArrays(array, sum) {
    let start = 0, total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
        if (total > sum) {
            total = total - array[start];
            start++;
        }
        if (total == sum) {
            return array.slice(start, i+1);
        }
    }
}

/* TEST */
console.log(findSubArrays([10, 2, 3,4,5], 10))
console.log(findSubArrays([10, 2, 3,4,5], 5))
console.log(findSubArrays([10, 2, 3,4,5], 14))