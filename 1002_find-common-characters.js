/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = ''
  let word = words[0]
  while (word.length) {
    const hasAllInString = words.every((str, idx) => {
      const isIncludes = str.includes(word[0])
      words[idx] = str.replace(word[0], '')
      return isIncludes
    })
    if (hasAllInString) {
      result += word[0]
    }
    word = word.replace(word[0], '')
  }

  return [...result]
}

console.log(commonChars(['bella', 'label', 'roller']))
