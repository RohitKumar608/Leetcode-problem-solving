/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray1 = function (nums) {
  const result = []
  const positiveArray = []
  const negativeArray = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      positiveArray.push(nums[i])
    } else {
      negativeArray.push(nums[i])
    }
  }
  for (let i = 0; i < positiveArray.length; i++) {
    result.push(positiveArray[i])
    result.push(negativeArray[i])
  }
  return result
}
var rearrangeArray = function (nums) {
  const result = []
  let positiveIdx = 0
  let negativeIdx = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      result[positiveIdx] = nums[i]
      positiveIdx += 2
    } else {
      result[negativeIdx] = nums[i]
      negativeIdx += 2
    }
  }

  return result
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]))
