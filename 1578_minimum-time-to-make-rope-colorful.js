/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */

var minCost1 = function (colors, neededTime) {
  let result = 0
  let i = 0
  let fast = 1
  colors = colors.split('')
  while (i < colors.length) {
    if (colors[i] === colors[i + 1]) {
      colors.splice(i + 1, 1)
      if (neededTime[i] > neededTime[i + 1]) {
        result += neededTime[i + 1]
        neededTime.splice(i + 1, 1)
      } else {
        result += neededTime[i]
        neededTime.splice(i, 1)
      }
    } else {
      i++
    }
  }
  return result
}

var minCost = function (colors, neededTime) {
  let result = 0
  let i = 0
  let fast = 1
  colors = colors.split('')
  while (fast < colors.length) {
    if (colors[i] === colors[fast]) {
      console.log(i, fast)
      if (neededTime[i] > neededTime[fast]) {
        result += neededTime[fast]
      } else {
        result += neededTime[i]
        i = fast
      }
      fast++
    } else {
      i = fast
      fast++
    }
  }
  return result
}

// console.log(minCost('abaac', [1, 2, 3, 4, 5]))
// console.log(minCost('aabaa', [1, 2, 3, 4, 1]))

console.log(minCost('bbbaaa', [4, 9, 3, 8, 8, 9]))
