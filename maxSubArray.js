// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (arr) {
  let result = arr[0]
  let previousRes = arr[0]
  for (let i = 1; i < arr.length; i++) {
    result = Math.max(arr[i], result + arr[i])
    previousRes = Math.max(previousRes, result)
  }
  return previousRes
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([5, 4, -1, 7, 8]))
