function findKthNumber(arr, x, k, type=0) {
    if (!arr) { return new Error("array must be specified");}
    if (![0,1].includes(type)) { return new Error("Invalid query type");}
    
    const sorted = arr.sort((e1, e2) => {
        return type === 1 ? e2-e1 : e1-e2;
    });

    let breakPoint = null;
    for (let i =0; i<sorted.length; i++) {
        if (type === 0 && sorted[i] > x) {
            breakPoint = i;
            break;
        } else if (type === 1 && sorted[i] < x){
            breakPoint = i;
            break;
        }
    }

    const subArray = breakPoint !== null ? sorted.slice(breakPoint) : [];
    return subArray[k-1] === undefined ? -1 : subArray[k-1];
}

const arr = [1,2,3,4,5,6,7,8];
const x = 2;
const k = 3;
console.log(findKthNumber(arr, 2, 3, 0) === 5);
console.log(findKthNumber(arr, 5, 2, 1) === 3)
console.log(findKthNumber(arr, 2, 2, 1) === -1)

let arr1 = []
for (let i =0; i< 2000; i++) {
    arr1.push(i);
}
let x1 = 1500;
let k1 = 3;
console.log(findKthNumber(arr1, x1, k1, 0) === 1503);
console.log(findKthNumber(arr1, x1, k1, 1) === 1497)
console.log(findKthNumber(arr1, x1, 3000, 0) === -1)
