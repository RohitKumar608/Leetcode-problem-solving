/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let secondDuplicateIdx = 0
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (!map[num]) {
      map[num] = []
    }
    map[num].push(i + 1)
    secondDuplicateIdx = Math.max(
      map[num][map[num].length - 2] || 0,
      secondDuplicateIdx
    )
  }
  return Math.ceil(secondDuplicateIdx / 3)
}
