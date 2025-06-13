/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
  if (p == 0) return 0
  nums.sort((a, b) => a - b)
  function isValid(threshold) {
    let i = 0
    let cnt = 0
    while (i < nums.length - 1) {
      if (Math.abs(nums[i] - nums[i + 1]) <= threshold) {
        cnt++
        i += 2
      } else {
        i++
      }
      if (cnt === p) return true
    }
    return false
  }
  let l = 0
  let r = 10 ** 9
  let res = 10 ** 9
  while (l <= r) {
    const mid = Math.ceil((l + r - 1) / 2)
    if (isValid(mid)) {
      res = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return res
}
