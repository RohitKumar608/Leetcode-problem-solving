/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries1 = function (arr, queries) {
  const result = []
  for (const [left, right] of queries) {
    let exor = arr[left]
    for (let i = left + 1; i <= right; i++) {
      exor = exor ^ arr[i]
    }
    result.push(exor)
  }
  return result
}

var xorQueries = function (arr, queries) {
  const result = []
  for (let i = 1; i < arr.length; i++) {
    arr[i] ^= arr[i - 1]
  }
  for (const [left, right] of queries) {
    result.push((arr[left - 1] || 0) ^ arr[right])
  }
  return result
}
