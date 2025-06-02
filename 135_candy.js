/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function (ratings) {
  const leftDistribution = []
  const rightDistribution = []
  let result = 0
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      leftDistribution[i] = leftDistribution[i - 1] + 1
    } else {
      leftDistribution[i] = 1
    }
  }

  for (let i = ratings.length - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rightDistribution[i] = rightDistribution[i + 1] + 1
    } else {
      rightDistribution[i] = 1
    }
    result += Math.max(leftDistribution[i], rightDistribution[i])
  }

  return result
}

console.log(candy([1, 2, 2]))
console.log(candy([1, 0, 2]))
