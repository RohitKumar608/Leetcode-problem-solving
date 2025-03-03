/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const leftSide = []
  const accurateVal = []
  const greaterVal = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      leftSide.push(nums[i])
    } else if (nums[i] === pivot) {
      accurateVal.push(pivot)
    } else {
      greaterVal.push(nums[i])
    }
  }
  return leftSide.concat(accurateVal).concat(greaterVal)
}
