/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair1 = function (nums, k) {
  nums.sort((a, b) => a - b)
  const smallDistance = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      smallDistance.push(Math.abs(nums[j] - nums[i]))
    }
  }
  smallDistance.sort((a, b) => a - b)
  console.log(smallDistance)
  return smallDistance[k - 1]
}

var smallestDistancePair = function (nums, k) {
  let count = 0
  nums.sort((a, b) => a - b)
  console.log(nums)
  for (var i = 0; i < nums.length; i++) {
    count += nums.length - i - 1
    if (count > k) {
      console.log(count)

      count -= nums.length - i - 1
      console.log(count)

      for (let j = i; j < nums.length; j++) {
        console.log(i, j)
        if (count === k) return Math.abs(nums[i] - nums[j])
        count++
      }
      break
    }
  }
  if (i === 0) return Math.abs(nums[0] - nums[1])
  return Math.abs(nums[nums.length - 1] - nums[nums.length - 2])
}

// console.log(smallestDistancePair([1, 3, 1], 1))
// console.log(smallestDistancePair([1, 6, 1], 3))
console.log(smallestDistancePair([9, 10, 7, 10, 6, 1, 5, 4, 9, 8], 18))
console.log(smallestDistancePair1([9, 10, 7, 10, 6, 1, 5, 4, 9, 8], 18))
