/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let maxExor = 0
  const map = new Map()
  function getSubSets(nums) {
    if (nums.length === 0) {
      return [[]]
    }
    const num = nums[0]
    const result = getSubSets(nums.slice(1))
    const subset = []
    result.forEach((arr) => {
      if (arr.length) {
        const exor = arr[arr.length - 1] | num
        map.set(exor, (map.get(exor) || 0) + 1)
        maxExor = Math.max(maxExor, exor)
        subset.push([...arr, exor])
      } else {
        subset.push([num])
        map.set(num, (map.get(num) || 0) + 1)
      }
      subset.push([...arr])
    })
    return subset
  }
  getSubSets(nums, 0)

  return map.get(maxExor)
}

var countMaxOrSubsets = function (nums) {
  let set = new Set()
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    ans |= nums[i]
  }
  let count = 0
  function recursion(ind, currentAns, currentOr) {
    if (currentOr == ans) {
      count++
    }
    for (let i = ind; i < nums.length; i++) {
      currentAns.push(nums[i])
      recursion(i + 1, currentAns, currentOr | nums[i])
      currentAns.pop()
    }
  }
  recursion(0, [], 0)
  return count
}

console.log(countMaxOrSubsets([3, 2, 1, 5]))
console.log(countMaxOrSubsets([2, 2, 2]))
