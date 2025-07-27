/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  const continuousUniqueVal = []
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (continuousUniqueVal[continuousUniqueVal.length - 1] !== nums[i]) {
      continuousUniqueVal.push(nums[i])
    }
  }
  for (let i = 1; i < continuousUniqueVal.length; i++) {
    const currVal = continuousUniqueVal[i]
    if (
      (currVal > continuousUniqueVal[i - 1] &&
        currVal > continuousUniqueVal[i + 1]) ||
      (currVal < continuousUniqueVal[i - 1] &&
        currVal < continuousUniqueVal[i + 1])
    ) {
      result++
    }
  }
  return result
}

console.log(countHillValley([2, 4, 1, 1, 6, 5]))
