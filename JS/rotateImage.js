var rotateImage = function(matrix) {
    matrix.reverse();
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < x; y++) {
           let tmp = matrix[x][y];
           matrix[x][y] = matrix[y][x];
           matrix[y][x] = tmp;
        }
    }
    return matrix;
}

console.log(rotateImage([[1,2,3],[4,5,6],[7,8,9]]));