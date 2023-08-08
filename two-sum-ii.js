// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

function sortVal(val1, val2) {
  if (val1 > val2) {
    return [val2, val1]
  }
  return [val1, val2]
}

var twoSum1 = function (numbers, target) {
  const map = {}
  const length = numbers.length
  for (let i = 0; i < Math.ceil(length / 2); i++) {
    const requiredValLeft = target - numbers[i]
    const requiredValRight = target - numbers[length - 1 - i]
    if (requiredValLeft + requiredValRight === target)
      return [i + 1, length - i]
    if (map[numbers[length - 1 - i]] >= 0) {
      return sortVal(length - i, map[numbers[length - 1 - i]])
    } else if (map[numbers[i]] >= 0) {
      return sortVal(map[numbers[i]], i + 1)
    } else {
      map[requiredValLeft] = i + 1
      map[requiredValRight] = length - i
    }
  }
}

var twoSum = function (numbers, target) {
  let leftPointer = 0
  let rightPointer = numbers.length - 1
  while (leftPointer < rightPointer) {
    const sum = numbers[leftPointer] + numbers[rightPointer]
    if (sum === target) {
      return [leftPointer + 1, rightPointer + 1]
    }
    if (sum > target) rightPointer--
    if (sum < target) leftPointer++
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))
console.log(twoSum([-1, 0], -1))
console.log(twoSum([1, 3, 4, 4], 8))
