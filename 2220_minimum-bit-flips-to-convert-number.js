/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let startBinary = (start >>> 0).toString(2)
  let goalBinary = (goal >>> 0).toString(2)
  const startLen = Math.max(goalBinary.length - startBinary.length, 0)
  const goalLen = Math.max(startBinary.length - goalBinary.length, 0)
  startBinary = '0'.repeat(startLen) + startBinary
  goalBinary = '0'.repeat(goalLen) + goalBinary
  let result = 0
  for (let i = 0; i < startBinary.length; i++) {
    if (startBinary[i] !== goalBinary[i]) {
      result++
    }
  }
  return result
}
