/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
  const topSliceFreq = new Map()
  const bottomsSliceFreq = new Map()
  let maxSliceCount = 0
  let swapSlice = ''
  let swapFrom = ''
  let result = 0
  for (let i = 0; i < tops.length; i++) {
    topSliceFreq.set(tops[i], (topSliceFreq.get(tops[i]) || 0) + 1)
    bottomsSliceFreq.set(
      bottoms[i],
      (bottomsSliceFreq.get(bottoms[i]) || 0) + 1
    )
  }
  for (const [key, topSliceCount] of topSliceFreq) {
    const bottomSliceCount = bottomsSliceFreq.get(key)
    const totalSliceCount = topSliceCount + bottomSliceCount
    if (totalSliceCount > maxSliceCount) {
      maxSliceCount = totalSliceCount
      swapSlice = +key
      swapFrom = topSliceCount > bottomSliceCount ? 'bottom' : 'top'
    }
  }
  if (tops.length > maxSliceCount) {
    return -1
  }
  for (let i = 0; i < tops.length; i++) {
    if (tops[i] !== swapSlice && bottoms[i] !== swapSlice) {
      return -1
    }
    if (tops[i] === bottoms[i]) continue
    if (swapFrom == 'bottom' && bottoms[i] == swapSlice) {
      result++
    }
    if (swapFrom == 'top' && tops[i] == swapSlice) result++
  }
  return result
}

console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]))
