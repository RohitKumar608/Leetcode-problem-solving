/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let set = new Set()
  let res = 0
  let sum = 0
  for (i = 0, l = 0; i < nums.length; i++) {
    while (set.has(nums[i])) {
      set.delete(nums[l])
      sum -= nums[l]
      l++
    }

    set.add(nums[i])
    sum += nums[i]

    res = Math.max(res, sum)
  }
  return res
}

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]))
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]))
console.log(maximumUniqueSubarray([10000, 1, 10000, 1, 1, 1, 1, 1, 1]))
