/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  let result = 0
  for (let i = 1; i < rating.length - 1; i++) {
    let leftSmaller = 0
    let rightGreater = 0
    for (let j = 0; j < i; j++) {
      if (rating[i] < rating[j]) {
        leftSmaller++
      }
    }
    for (let j = i + 1; j < rating.length; j++) {
      if (rating[i] > rating[j]) {
        rightGreater++
      }
    }
    result += leftSmaller * rightGreater

    const leftLarger = i - leftSmaller
    const rightSmaller = rating.length - i - 1 - rightGreater
    result += leftLarger * rightSmaller
  }
  return result
}

console.log(numTeams([2, 5, 3, 4, 1]))
