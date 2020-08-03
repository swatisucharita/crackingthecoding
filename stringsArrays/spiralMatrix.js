function spiralMatrix(arr = []) {
    const rowLength = arr.length;
    const columnLength = arr[0].length;
    if (arr.some(r => r.length !== columnLength)) {
        return "Not a valid matrix";
    }
    const result = [];
    for (let i = 0; i < rowLength/2; i++) {
        for (let j = i; j < columnLength-i; j++) {
            if (j === columnLength-1-i) {
                for (let k =i; k<rowLength-i; k++) {
                    if (k === rowLength-1-i) {
                        for (let l = j; l >= i; l--) {
                            if (l === i) {
                                for (let m=rowLength-1-i; m > i; m--) {
                                    result.push(arr[m][l]);
                                }
                            } else {
                                result.push(arr[k][l]);
                            }
                        }
                    } else {
                        result.push(arr[k][j]);
                    }
                }
            } else {
                result.push(arr[i][j]);
            }
        }
    }

    return result;
}

const expectedOutput = [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12];

console.log(JSON.stringify(spiralMatrix([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20]
])) === JSON.stringify(expectedOutput));

console.log(JSON.stringify(spiralMatrix([
    [7,8,9],
    [12,13,14]
])) === JSON.stringify([7,8,9,14,13,12]))

//start from 0.
// rows length: 4.
// column length: 5
// layer 1, layer 2
