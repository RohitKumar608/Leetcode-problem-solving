/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  let lastLetter = null
  sentence = sentence.split(' ')
  const len = sentence.length
  for (let i = 1; i < len; i++) {
    if (sentence[i][0] !== sentence[i - 1][sentence[i - 1].length - 1]) {
      return false
    }
  }
  return sentence[0][0] === sentence[len - 1][sentence[len - 1].length - 1]
}
