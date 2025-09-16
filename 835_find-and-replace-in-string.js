/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  const map = []
  for (let i = 0; i < indices.length; i++) {
    map[i] = {
      idx: indices[i],
      sources: sources[i],
      targets: targets[i],
    }
  }
  map.sort((a, b) => a.idx - b.idx)
  let result = s.split('')
  for (let i = 0; i < map.length; i++) {
    const from = map[i].idx
    const to = map[i].sources.length + from - 1
    let hasAllMatched = true
    let count = 0
    for (let j = from; j <= to; j++) {
      if (map[i].sources[count] !== s[j]) {
        hasAllMatched = false
      }
      count++
    }
    if (hasAllMatched) {
      result[from] = map[i].targets
      for (let j = from + 1; j <= to; j++) {
        result[j] = ''
      }
    }
  }
  return result.join('')
}

console.log(findReplaceString('abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff']))
console.log(findReplaceString('abcd', [0, 2], ['ab', 'ec'], ['eee', 'ffff']))
console.log(
  findReplaceString(
    'vmokgggqzp',
    [3, 5, 1],
    ['kg', 'ggq', 'mo'],
    ['s', 'so', 'bfr']
  )
)
