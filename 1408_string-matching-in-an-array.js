/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const result = []

  words.forEach((word, i) => {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(word)) {
        result.push(word)
        break
      }
    }
  })

  return result
}
