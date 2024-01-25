// https://leetcode.com/problems/house-robber

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let rob1 = 0
  let rob2 = 0
  for (let i = 0; i < nums.length; i++) {
    const temp = Math.max(rob1 + nums[i], rob2)
    rob1 = rob2
    rob2 = temp
  }

  return rob2
}

console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
console.log(rob([2, 4, 8, 9, 9, 3]))
console.log(rob([2, 1, 1, 2]))
console.log(rob([2, 1, 2, 6, 1, 8, 10, 10]))
