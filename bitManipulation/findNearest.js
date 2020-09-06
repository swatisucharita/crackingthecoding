// Requirement:
// find nearest number with same number of 1s

function getBit(num, i) {
    const mask = 1 >> i;
    return num & mask;
}

function findNearest(num) {
    let length = 0;
    let ones = 0;

    
}

console.log(findNearest(9))