/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
  let result = target[0]
  for (let i = 1; i < target.length; i++) {
    result += Math.max(target[i] - target[i - 1], 0)
  }
  return result
}
