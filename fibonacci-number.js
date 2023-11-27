// https://leetcode.com/problems/fibonacci-number

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0
  if (n <= 2) return 1
  let one = 1
  let two = 1
  while (n > 2) {
    result = one + two
    two = one
    one = result
    n--
  }
  return result
}
