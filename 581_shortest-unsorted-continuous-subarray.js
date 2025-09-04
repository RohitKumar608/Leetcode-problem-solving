/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  var numsWithIdx = []
  numsWithIdx = [...nums].sort((a, b) => a - b)
  let left = Infinity
  let right = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== numsWithIdx[i]) {
      left = left === Infinity ? i : left
      right = i
    }
  }
  if (left === Infinity) return 0
  return right - left + 1
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
console.log(findUnsortedSubarray([1, 2, 3, 4]))
