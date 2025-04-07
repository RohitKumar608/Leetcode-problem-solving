/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 !== 0) {
    return false
  }
  const map = new Map()
  const requiredSum = sum / 2
  function backtrack(idx, sum, map) {
    if (sum === requiredSum) return true
    if (idx >= nums.length) return false
    if (sum > requiredSum) return false
    if (map.has(`${idx}, ${sum}`)) return map.get(`${idx}, ${sum}`)
    const result =
      backtrack(idx + 1, sum, map) || backtrack(idx + 1, sum + nums[idx], map)
    map.set(`${idx}, ${sum}`, result)

    return result
  }

  return backtrack(0, 0, map)
}

// console.log(canPartition([2, 2, 1, 5]))
// console.log(canPartition([1, 5, 7, 4, 5]))
// console.log(canPartition([2, 2, 3, 5]))
// console.log(canPartition([14, 9, 8, 4, 3, 2]))
console.log(canPartition([1, 1, 1, 1]))
