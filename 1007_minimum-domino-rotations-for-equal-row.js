/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
  const sliceFrequency = new Map()
  let maxSliceCount = 0
  let maxSlices = ''
  let rotateTop = 0
  let rotateBottom = 0
  for (let i = 0; i < tops.length; i++) {
    sliceFrequency.set(tops[i], (sliceFrequency.get(tops[i]) || 0) + 1)
    sliceFrequency.set(bottoms[i], (sliceFrequency.get(bottoms[i]) || 0) + 1)
    if (sliceFrequency.get(tops[i]) > maxSliceCount) {
      maxSlices = tops[i]
      maxSliceCount = sliceFrequency.get(tops[i])
    }
    if (sliceFrequency.get(bottoms[i]) > maxSliceCount) {
      maxSlices = bottoms[i]
      maxSliceCount = sliceFrequency.get(bottoms[i])
    }
  }
  if (tops.length > maxSliceCount) {
    return -1
  }
  for (let i = 0; i < tops.length; i++) {
    if (tops[i] !== maxSlices && bottoms[i] !== maxSlices) {
      return -1
    }
    if (tops[i] === bottoms[i]) continue
    if (bottoms[i] == maxSlices) rotateTop++
    if (tops[i] == maxSlices) rotateBottom++
  }
  return Math.min(rotateBottom, rotateTop)
}

function minDominoRotations(tops, bottoms) {
  let res = getRotation(tops, bottoms, tops[0])
  if (bottoms[0] !== tops[0]) {
    res = Math.min(res, getRotation(tops, bottoms, bottoms[0]))
  }
  return res === Infinity ? -1 : res
}

function getRotation(tops, bottoms, target) {
  let rotateTop = 0,
    rotateBottom = 0
  for (let i = 0; i < tops.length; i++) {
    if (tops[i] !== target && bottoms[i] !== target) {
      return Infinity
    }
    if (tops[i] !== target) rotateTop++
    if (bottoms[i] !== target) rotateBottom++
  }
  return Math.min(rotateTop, rotateBottom)
}

console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]))
