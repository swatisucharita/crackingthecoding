function rotateMatrix(matrix) {
    if (matrix.length !== matrix[0].length) { return; } // Not a square

    const n = matrix.length;
    for (let i = 0; i < n/2; i++) {
        const m = n - 2 -i;
        for (j = i; j < m; j++ ) {

            const top = matrix[j][i];

            matrix[j][i] = matrix[m-j][i];

            matrix[i][m] = top;

        }

    }
    return matrix;
}

console.log(rotateMatrix([
    [1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]
]));