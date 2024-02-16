/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const map = {}
  for (const num of arr) {
    map[num] = (map[num] || 0) + 1
  }
  const freqVal = Object.values(map)
  freqVal.sort((a, b) => a - b)
  let idx = 0
  for (idx = 0; idx < freqVal.length; idx++) {
    k -= freqVal[idx]
    if (k < 0) {
      break
    }
  }
  return freqVal.length - 1 - idx
}

console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3))
