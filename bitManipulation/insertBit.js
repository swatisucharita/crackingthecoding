function clearBit(N, i) {
    let mask = 1 << i;
    return N & ~mask;
}

function getBit(M, i) {
    let mask = 1 << i;
    return (M & mask) === 0 ? 0 : 1;
}

function updateBit(N, i, bit){
    const mask = 1 << i;
    if(bit === 1){
        return N | mask;
    } else if (bit === 0){
        return N & ~mask;
    } 
}

function insertBit(N, M, i, j){
    // Clear bits in N
    for(let k = i; k <= j; k++) {
        N = clearBit(N, k);
    }
    let n = 0;
    for(let k=i; k <= j; k++) {
        const bit = getBit(M, n++);
        N = updateBit(N, k, bit);
    }
    return N.toString(2);
}

/* TEST */
// N = 10000000000, M = 10011, i=2, j=6
// op = 10001001100

console.log(insertBit(1024, 19, 2, 6))
console.log(insertBit(1024, 19, 1, 5))
