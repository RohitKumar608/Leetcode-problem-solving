/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  let count = 0
  let map = new Map()
  let left = 0
  let pairs = 0
  for (let right = 0; right < nums.length; right++) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1)
    pairs += map.get(nums[right]) - 1
    while (pairs >= k) {
      count += nums.length - right
      map.set(nums[left], map.get(nums[left]) - 1)
      pairs -= map.get(nums[left])
      left++
    }
  }
  return count
}

// console.log(countGood([1, 1, 1, 1, 1], 10))
console.log(countGood([3, 1, 4, 3, 2, 2, 4], 2))
