/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const uniqueNumber = []
  const mapSet = {}
  for (let i = 0; i < nums.length; i++) {
    if (!mapSet[nums[i]]) {
      mapSet[nums[i]] = nums[i]
      uniqueNumber.push(nums[i])
    }
  }
  uniqueNumber.sort((a, b) => a - b)
  return uniqueNumber.length >= 3
    ? uniqueNumber[uniqueNumber.length - 3]
    : uniqueNumber[uniqueNumber.length - 1]
}

console.log(thirdMax([3, 2, 1]))
console.log(thirdMax([1, 2, 2, 5, 3, 5]))
console.log(thirdMax([-2147483648, 1, 1]))
