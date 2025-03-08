/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let blackColors = 0
  let result = 0
  for (let i = 0; i < k; i++) {
    blackColors += blocks[i] === 'W' ? 1 : 0
  }
  result = blackColors
  for (let i = k; i < blocks.length; i++) {
    blackColors += blocks[i] === 'W' ? 1 : 0
    blackColors -= blocks[i - k] === 'W' ? 1 : 0
    result = Math.min(result, blackColors)
  }
  return result
}
