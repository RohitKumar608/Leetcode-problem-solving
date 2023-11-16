/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  dictionary.sort((a, b) => b.length - a.length)
  dictionary.forEach((val) => {
    s = s.split(val).join('')
  })
  return s.length
}

// console.log(minExtraChar('leetscode', ['leet', 'code', 'leetcode']))
console.log(
  minExtraChar('dwmodizxvvbosxxw', [
    'ox',
    'lb',
    'diz',
    'gu',
    'v',
    'ksv',
    'o',
    'nuq',
    'r',
    'txhe',
    'e',
    'wmo',
    'cehy',
    'tskz',
    'ds',
    'kzbu',
  ])
)
