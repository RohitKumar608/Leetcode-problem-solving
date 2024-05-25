/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const dictionary = new Set(wordDict)
  const result = []
  const curr = []
  function backtracking(i) {
    if (i === s.length) {
      result.push(curr.join(' '))
      return
    }
    for (let j = i; j < s.length; j++) {
      const subString = s.substring(i, j + 1)
      if (dictionary.has(subString)) {
        curr.push(subString)
        backtracking(j + 1)
        curr.pop()
      }
    }
  }
  backtracking(0)
  return result
}

console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']))
console.log(
  wordBreak('pineapplepenapple', [
    'apple',
    'pen',
    'applepen',
    'pine',
    'pineapple',
  ])
)
