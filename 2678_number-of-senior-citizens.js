/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let result = 0
  for (let i = 0; i < details.length; i++) {
    const age = details[i][11] + details[i][12]
    if (age > 60) result++
  }
  return result
}
