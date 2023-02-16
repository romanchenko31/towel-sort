
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
    matrix?.map((v, i) => {
        if (i % 2 !== 0) {
            arr.push(v.reverse());
        } else {
            arr.push(v);
        }
    });
    return arr.flat();
}
