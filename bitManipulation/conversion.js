// Requirement:
// Count number of bits needs to be flipped to convert num1 to num2

function getBit(n, i) {
    const mask = 1 << i;
    return (n & mask) === 0 ? 0 : 1;
}

function clearBit(n, i) {
    const mask = 1 << i;
    return n & ~mask;
}

function countFlips(num1, num2) {
    let diff = num1 ^ num2;
    let count = 0;
    let i = 0;
    console.log(diff.toString(2));
    while(diff > 0) {
        const bit = getBit(diff, i);
        console.log("bit: ", bit);
        if (bit === 1) { count++; }

        diff = clearBit(diff, i);
        i++;
    }

    return count;
}

/* TEST */
console.log(countFlips(29, 15))