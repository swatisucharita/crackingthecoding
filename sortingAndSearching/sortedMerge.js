function mergeArrays(arr1, arr2) {
    let i1 = 0,
        i2 = 0;
    
    while(arr2[i2]) {
        if (i1 >= arr1.length) {
            arr1 = arr1.concat(arr2.slice(i2));
        } else if (arr1[i1] < arr2[i2]) {
            i1++;
        } else if (arr1[i1] > arr2[i2]) {
            const ele = arr2[i2]; 
            arr1.splice(i1, 0, ele);
            i2++;
        } else {
            i1++;
            i2++;
        }
    }

    return arr1;
}

/* TEST */
const a = [1,3,4,5,6];
const b = [2,3,8,9,10];
console.log(JSON.stringify(mergeArrays(a,b)) === JSON.stringify([1,2,3,4,5,6,8,9,10]));
