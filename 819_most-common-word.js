/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.toLowerCase()
  banned = banned.map((a) => a.toLowerCase())
  const banSet = new Set(banned)
  const countMap = {}
  const words = paragraph.match(/[A-Z]+/gi)
  for (let word of words) {
    if (!banSet.has(word)) countMap[word] = (countMap[word] || 0) + 1
  }
  let max = 0
  let maxWord = ''
  for (let word in countMap) {
    const count = countMap[word]
    if (count > max) {
      maxWord = word
      max = count
    }
  }
  return maxWord
}

console.log(
  mostCommonWord('Bob hit a ball, the hit BALL, flew far after it was hit.', [
    'hit',
  ])
)

console.log(mostCommonWord('"a, a, a, a, b,b,b,c, c"', ['a']))
