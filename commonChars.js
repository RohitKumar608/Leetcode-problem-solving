// https://leetcode.com/problems/find-common-characters/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let map = {}
  words.forEach((word, idx) => {
    const matchKey = {}
    for (let i = 0; i < word.length; i++) {
      if (idx === 0) {
        matchKey[word[i]] = (matchKey[word[i]] || 0) + 1
      }
      if (map[word[i]]) {
        matchKey[word[i]] = (matchKey[word[i]] || 0) + 1
        map[word[i]] = map[word[i]] - 1
      }
    }
    map = matchKey
  })
  let result = ''
  for (const key in map) {
    result += key.repeat(map[key])
  }
  return [...result]
}
