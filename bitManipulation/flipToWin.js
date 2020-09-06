// requirement:
// flip one bit atmost to get max number of consecutive 1s
// input: 10101111 / 175
// output: 6
// calculate previous count, next count

function clearBit(N, i) {
    let mask = 1 << i;
    return N & ~mask;
}

function getBit(M, i) {
    let mask = 1 << i;
    return (M & mask) === 0 ? 0 : 1;
}

function flipToWin(num) {
    let prevSum = 0;
    let curSum = 0;
    let longest = 0;
    let i = 0; 
    while(num > 0) {
        const bit = getBit(num, i);
        if (bit === 1) {
            curSum++;
        } else if (bit === 0) {
            const nextBit = getBit(num, i+1);
            if (nextBit === 0) {
                prevSum = 0;
                curSum = 0;
            } else {
                prevSum = curSum;
                curSum = 0;
            }
        }

        if ((prevSum + curSum + 1) > longest) {
            longest = prevSum + curSum + 1;
        }
        num = clearBit(num, i);
        i++;
    }

    return longest;
}

// 11011101111
console.log((175).toString(2));
console.log((1775).toString(2));
console.log(flipToWin(175) === 6);
console.log(flipToWin(1775) === 8)