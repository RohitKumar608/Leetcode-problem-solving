/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const map = {}
  const sMap = {}
  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i
  }
  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || '') + s[i]
  }
  const result = []
  const newData = {}
  for (const key in sMap) {
    if (map[key] !== undefined) {
      result[map[key]] = sMap[key]
    } else {
      newData[key.charCodeAt(0)] = sMap[key]
    }
  }
  const leftStr = Object.values(newData).join('')
  return result.join('') + leftStr
}

// console.log(customSortString('cba', 'abcd'))
// console.log(customSortString('bcafg', 'abcd'))
// console.log(customSortString('kqep', 'pekeq'))
// console.log(customSortString('exv', 'xwvee'))

console.log(
  customSortString(
    'hucw',
    'utzoampdgkalexslxoqfkdjoczajxtuhqyxvlfatmptqdsochtdzgypsfkgqwbgqbcamdqnqztaqhqanirikahtmalzqjjxtqfnh'
  )
)
