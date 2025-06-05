/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function (word, numFriends) {
  if (numFriends === 1) {
    return word
  }
  const n = word.length
  let result = ''
  for (let i = 0; i < n; i++) {
    const s = word.substring(i, Math.min(i + n - numFriends + 1, n))
    if (s > result) {
      result = s
    }
  }
  return result
}
console.log(answerString('dbca', 2))
// console.log(answerString('gggg', 4))
