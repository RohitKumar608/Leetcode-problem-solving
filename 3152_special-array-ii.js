/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  const badIdx = []
  const result = []
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] % 2 !== 0 && nums[j - 1] % 2 !== 0) {
      badIdx.push(j)
    }
    if (nums[j] % 2 == 0 && nums[j - 1] % 2 == 0) {
      badIdx.push(j)
    }
  }
  function findIdxBetween(from, to) {
    let left = 0
    let right = badIdx.length
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (to >= badIdx[mid] && badIdx[mid] > from) {
        return false
      }
      if (badIdx[mid] > to) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return true
  }
  for (let i = 0; i < queries.length; i++) {
    const [from, to] = queries[i]
    if (from === to) {
      result.push(true)
    } else {
      result.push(findIdxBetween(from, to))
    }
  }
  return result
}

// console.log(
//   isArraySpecial(
//     [4, 3, 1, 6],
//     [
//       [0, 2],
//       [2, 3],
//     ]
//   )
// )

// console.log(isArraySpecial([2, 2], [[0, 0]]))
// console.log(isArraySpecial([3, 7, 8], [[0, 2]]))
console.log(isArraySpecial([5, 1, 5], [[0, 1]]))
