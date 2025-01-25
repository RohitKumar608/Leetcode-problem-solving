/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  const sortedNums = [...nums].sort((a, b) => a - b)
  const n = nums.length
  const group = []
  const numToGroup = {}
  const result = []
  for (let i = 0; i < n; i++) {
    if (
      group.length === 0 ||
      Math.abs(
        sortedNums[i] -
          group[group.length - 1][group[group.length - 1].length - 1]
      ) > limit
    ) {
      group.push([])
    }
    group[group.length - 1].push(sortedNums[i])
    numToGroup[sortedNums[i]] = group.length - 1
  }
  for (const n of nums) {
    const j = numToGroup[n]
    result.push(group[j].shift())
  }
  console.log(numToGroup)
  return result
}

console.log(lexicographicallySmallestArray([1, 5, 3, 9, 8], 2))
