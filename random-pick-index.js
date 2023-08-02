// https://leetcode.com/problems/random-pick-index/

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.mapSet = {}
  for (let i = 0; i < nums.length; i++) {
    if (!this.mapSet[nums[i]]) {
      this.mapSet[nums[i]] = [i]
    } else {
      this.mapSet[nums[i]].push(i)
    }
  }
}

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const arrayOfValues = this.mapSet[target]
  const randomIdx = Math.floor(Math.random() * arrayOfValues.length)
  return arrayOfValues[randomIdx]
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
