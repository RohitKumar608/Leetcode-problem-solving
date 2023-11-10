/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 1) return n
  let result = 0
  let one = 1
  let two = 1
  while (n > 1) {
    result = one + two
    two = one
    one = result
    n--
  }
  return result
}

console.log(climbStairs(4))
