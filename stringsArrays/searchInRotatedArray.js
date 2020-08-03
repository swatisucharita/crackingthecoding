function findIndexInRotatedArray(array, elem) {
    let startingPoint = null;
    let result = null;

    for (let i = 0; i< array.length; i++) {
        if (array[i] > array[i+1]) {
            startingPoint = i+1;
        }

        if (startingPoint !== null && array[i] === elem) {
            result = i;
            break;
        }
    }

    return result;
}

console.log(findIndexInRotatedArray([15,16,19,20,25,1,3,5,7,9,10], 5) === 7)