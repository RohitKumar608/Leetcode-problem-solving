/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const set = new Set(brokenLetters)
  let result = 0
  for (const word of text.split(' ')) {
    if (![...word].some((char) => set.has(char))) {
      result++
    }
  }
  return result
}
