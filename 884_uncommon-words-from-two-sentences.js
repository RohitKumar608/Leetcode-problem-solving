/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const combineStr = s1 + ' ' + s2 + ' '
  const map = new Map()
  const set = new Set()
  let str = ''
  for (let i = 0; i < combineStr.length; i++) {
    if (combineStr[i] === ' ') {
      const strCount = (map.get(str) || 0) + 1
      if (strCount === 2) {
        set.add(str)
        map.delete(str)
      } else if (!set.has(str)) map.set(str, strCount)
      str = ''
    } else {
      str += combineStr[i]
    }
  }
  return [...map.keys()]
}

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'))
