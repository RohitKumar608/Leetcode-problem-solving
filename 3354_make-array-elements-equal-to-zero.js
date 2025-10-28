/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) continue
    const leftSum = nums.slice(0, i).reduce((acc, cur) => acc + cur, 0)
    const rightSum = nums.slice(i).reduce((acc, cur) => acc + cur, 0)
    if (leftSum === rightSum) {
      count += 2
    }
    if (Math.abs(leftSum - rightSum) === 1) {
      count++
    }
  }
  return count
}

var countValidSelections = function (nums) {
  let count = 0
  const prefixSum = []
  for (let i = 0; i < nums.length; i++) {
    prefixSum[i] = nums[i] + (prefixSum[i - 1] || 0)
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) continue
    const leftSum = prefixSum[i]
    const rightSum = prefixSum[nums.length - 1] - leftSum
    if (leftSum === rightSum) {
      count += 2
    }
    if (Math.abs(leftSum - rightSum) === 1) {
      count++
    }
  }
  return count
}

console.log(countValidSelections([1, 0, 2, 0, 3]))
console.log(countValidSelections([16, 13, 10, 0, 0, 0, 10, 6, 7, 8, 7]))
