
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return matrix = (matrix === undefined)
        ? []
        : matrix.map((item, i) => i % 2 === 1
            ? matrix[i].reverse()
            : matrix[i]).flat();
}
