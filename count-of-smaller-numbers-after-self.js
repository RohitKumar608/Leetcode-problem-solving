// https://leetcode.com/problems/count-of-smaller-numbers-after-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const data = nums[i]
    let count = 0
    for (let j = i + 1; j < nums.length; j++) {
      if (data > nums[j]) {
        count++
      }
    }
    result.push(count)
  }
  return result
}
