/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let max = 0
  for (let i = 0; i <= 9; i++) {
    if (n.indexOf(i) >= 0) {
      if (i > max) {
        max = i
      }
    }
  }

  return max
}
