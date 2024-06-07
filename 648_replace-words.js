/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  var words = sentence.split(' ')
  for (let i = 0; i < words.length; i++) {
    for (const word of dictionary) {
      let isMismatch = false
      for (let j = 0; j < word.length; j++) {
        if (word[j] !== words[i][j]) {
          isMismatch = true
        }
      }
      if (!isMismatch) {
        words[i] = word
        break
      }
    }
  }
  return words.join(' ')
}

console.log(
  replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery')
)
