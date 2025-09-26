/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  let result = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      const k = getLastNumber(j, nums[i], nums[j])
      if (k - j >= 1) {
        result += k - j
      }
    }
  }

  function getLastNumber(left, a, b) {
    let right = nums.length
    let mid = Math.floor((left + right) / 2)
    while (left < right) {
      const c = nums[mid]
      if (a + b > c && a + c > b && b + c > a) {
        left = mid + 1
      } else {
        right = mid
      }
      mid = Math.floor((left + right) / 2)
    }
    return left - 1
  }
  return result
}

console.log(triangleNumber([2, 2, 3, 4]))
