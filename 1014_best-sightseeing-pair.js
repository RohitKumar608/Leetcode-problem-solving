/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let previousMax = values[0]
  let result = 0
  for (let i = 1; i < values.length; i++) {
    previousMax--
    result = Math.max(result, previousMax + values[i])
    previousMax = Math.max(previousMax, values[i])
  }
  return result
}

// console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]))
// console.log(maxScoreSightseeingPair([1, 2]))
console.log(maxScoreSightseeingPair([1, 3, 5]))
