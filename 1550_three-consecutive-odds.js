/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let count = 0
  for (let num of arr) {
    if (num % 2 !== 0) {
      count += 1
    } else {
      count = 0
    }

    if (count === 3) {
      return true
    }
  }

  return false
}

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]))
