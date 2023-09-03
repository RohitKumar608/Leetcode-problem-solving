// https://leetcode.com/problems/jump-game
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let goal = nums.length - 1
  for (let idx = nums.length - 1; idx >= 0; idx--) {
    if (idx + nums[idx] >= goal) goal = idx
  }

  return goal === 0
}

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([1, 2, 0, 1]))
console.log(canJump([2, 5, 0, 0]))
console.log(canJump([1, 1, 2, 2, 0, 1, 1]))

console.log(canJump([4, 2, 0, 0, 1, 1, 4, 4, 4, 0, 4, 0]))
