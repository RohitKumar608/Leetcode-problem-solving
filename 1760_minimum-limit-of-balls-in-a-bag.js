/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  function canDivide(maxBalls) {
    let ops = 0
    for (const n of nums) {
      ops += Math.ceil(n / maxBalls) - 1
      if (ops > maxOperations) {
        return false
      }
    }
    return true
  }
  let l = 1
  let r = Math.max(...nums)
  let res = r
  while (l < r) {
    console.log(l, r)
    const m = l + Math.round((r - l) / 2)
    if (canDivide(m)) {
      r = m
      res = r
    } else {
      l = m + 1
    }
  }
  return res
}

// console.log(minimumSize([2, 4, 8, 2], 4))
console.log(minimumSize([7, 17], 2))
