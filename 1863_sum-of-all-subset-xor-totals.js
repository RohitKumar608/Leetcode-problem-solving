/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  function subSets(nums) {
    if (nums.length === 0) {
      return [0]
    }
    const num = nums.slice(0, 1)[0]
    const subsets = subSets(nums.slice(1))
    const result = []
    subsets.forEach((subset) => {
      let exorSum = subset
      result.push(exorSum)
      result.push(exorSum ^ num)
    })
    return result
  }
  return subSets(nums).reduce((a, b) => a + b)
}

console.log(subsetXORSum([5, 1, 6]))
