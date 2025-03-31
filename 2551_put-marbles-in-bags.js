/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
  if (weights.length === k) {
    return 0
  }
  const split = []
  for (let i = 0; i < weights.length - 1; i++) {
    split.push(weights[i] + weights[i + 1])
  }
  split.sort((a, b) => a - b)
  const minScore = split.slice(0, k - 1).reduce((a, b) => a + b)
  const maxScore = split.slice(weights.length - k).reduce((a, b) => a + b)
  return maxScore - minScore
}
// 1,2,2,5,4
console.log(putMarbles([1, 4, 2, 5, 2], 3))
