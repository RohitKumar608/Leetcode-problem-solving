/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  function createSubArray(nums) {
    if (nums.length == 0) {
      return ''
    }
    const num = nums[0]
    const result = []
    const res =
      typeof createSubArray(nums.slice(1)) !== 'object'
        ? [createSubArray(nums.slice(1))]
        : createSubArray(nums.slice(1))
    res.forEach((val) => {
      result.push([...val])
      result.push([...val, num])
    })
    return result
  }
  return createSubArray(nums)
}

console.log(subsets([1, 2, 3, 4]))
