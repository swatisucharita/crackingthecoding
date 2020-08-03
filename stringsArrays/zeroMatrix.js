function zeroMatrix(matrix) {
    const zeroRows = {};
    const zeroColumns = {};

    for (let i = 0; i< matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroRows[i] = true;
                zeroColumns[j] = true;
            }
        }
    }

    for (let i = 0; i< matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (zeroRows[i]) {
                matrix[i][j] = 0;
            }

            if (zeroColumns[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

const output = [
    [0,2,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

console.log(JSON.stringify(zeroMatrix([
    [1,2,3,4],
    [5,6,0,8],
    [0,9,8,3],
    [5,7,0,0]
])) === JSON.stringify(output))