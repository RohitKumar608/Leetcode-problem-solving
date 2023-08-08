// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = {}
  for (let i = 0; i < numbers.length; i++) {
    const needed = target - numbers[i]
    if (map[numbers[i]] !== undefined) {
      return [map[numbers[i]] + 1, i + 1]
    } else {
      map[needed] = i
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
