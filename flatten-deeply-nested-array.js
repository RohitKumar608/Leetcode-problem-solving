// https://leetcode.com/problems/flatten-deeply-nested-array/
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat1 = function (arr, n) {
  if (n === 0) return arr
  let result = []
  for (let times = 1; times <= n; times++) {
    for (let idx = 0; idx < arr.length; idx++) {
      if (typeof arr[idx] === 'number') {
        result.push(arr[idx])
      }
      if (typeof arr[idx] === 'object') {
        result.push(...arr[idx])
      }
    }
    arr = [...result]
    result = []
  }

  return arr
}

var flat = function (arr, n) {
  const result = []
  function helper(arr, depth) {
    for (const val of arr) {
      if (typeof val === 'object' && depth < n) {
        helper(val, depth + 1)
      } else {
        result.push(val)
      }
    }
  }
  helper(arr, 0)
  return result
}

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)
)
