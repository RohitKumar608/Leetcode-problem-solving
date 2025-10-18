/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function (nums, k) {
  nums.sort((a, b) => a - b)
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    let from = -1 * k
    let num = nums[i] + from
    while (set.has(num) && from <= k) {
      num = nums[i] + from
      from++
    }
    nums[i] = num
    set.add(num)
  }
  return set.size
}

var maxDistinctElements = function (nums, k) {
  nums.sort((a, b) => a - b)
  const result = []
  let prev = null
  for (let i = 0; i < nums.length; i++) {
    const curr = Math.min(
      nums[i] + k,
      prev === null ? nums[i] - k : Math.max(nums[i] - k, prev + 1)
    )
    if (!prev || curr > prev) {
      result.push(curr)
      prev = curr
    }
  }
  return result.length
}

// console.log(maxDistinctElements([1, 2, 2, 3, 3, 4], 2))
console.log(maxDistinctElements([7, 8, 10, 10, 7, 6, 7], 1))
