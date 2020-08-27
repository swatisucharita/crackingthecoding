function findStartEnd(array, start, end) {
    if (!array) { return new Error("array must be specified");}
    start = start || 0;
    end = end || array.length-1;

    const mid = Math.floor((end - start )/2);

    if (array[mid-1] > array[mid]) {
        return {
            start: mid,
            end: mid-1
        };
    } else {
        if (array[start] < array[mid]) {
            findStartEnd(array, mid+1, end);
        } else {
            findStartEnd(array, start, mid-1);
        }
    }
}

function searchInRotatedArray(array) {

}

/* TEST */

// findStartEnd works
console.log(JSON.stringify(findStartEnd([5, 6, 7, 8, 1, 2, 3, 4])) === JSON.stringify({ start: 4, end: 3 }));