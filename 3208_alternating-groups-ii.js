/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
  const len = colors.length
  colors = colors.concat(colors)
  let result = 0
  let left = 0
  for (let i = 0; i < len + k - 1; i++) {
    if (colors[i] === colors[i + 1]) {
      left = i
    }
    if (i - left + 1 >= k) {
      result++
      left++
    }
  }
  return result
}

console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3))
// console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6)) // 3;
