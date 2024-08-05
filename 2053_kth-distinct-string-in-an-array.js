/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const cache = {}
  const result = []
  for (let i = 0; i < arr.length; i++) {
    cache[arr[i]] = (cache[arr[i]] || 0) + 1
  }
  for (const key in cache) {
    if (cache[key] === 1) {
      k--
    }
    if (k == 0) return key
  }
  return ''
}
