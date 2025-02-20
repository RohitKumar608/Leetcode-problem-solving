/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  const binaryVal = [0, 1]
  const hashSet = new Set(nums)
  function backtracking(num) {
    if (num.length === nums[0].length) {
      if (!hashSet.has(num)) return num
      return false
    }
    for (let i = 0; i < binaryVal.length; i++) {
      const result = backtracking(num + binaryVal[i])
      if (result) return result
    }
  }
  return backtracking('')
}

console.log(findDifferentBinaryString(['01', '10']))
