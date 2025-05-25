/**
 * @param {string[]} words
 * @return {number}
 */

var longestPalindrome = function (words) {
  const map = new Map()
  let result = 0
  let singlePairCount = 0
  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1)
  }
  for (const [key, value] of map) {
    const reverseStr = key[1] + key[0]
    if (key === reverseStr) {
      result += Math.floor(value / 2) * 4
      singlePairCount += value % 2 !== 0 ? 1 : 0
    } else if (map.has(reverseStr)) {
      const minFreq = Math.min(map.get(reverseStr), value)
      result += minFreq * 4
      map.delete(reverseStr)
    }
  }
  if (singlePairCount) result += 2
  return result
}

console.log(longestPalindrome(['bb', 'bb']))

console.log(
  longestPalindrome([
    'dd',
    'aa',
    'bb',
    'dd',
    'aa',
    'dd',
    'bb',
    'dd',
    'aa',
    'cc',
    'bb',
    'cc',
    'dd',
    'cc',
  ])
)
