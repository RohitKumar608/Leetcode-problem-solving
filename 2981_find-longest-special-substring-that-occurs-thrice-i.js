/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  let result = -1
  const map = new Map()
  let left = 0
  let i = 0
  for (i = 0; i < s.length; i++) {
    const occur = map.get(s[i]) || 0
    map.set(s[i], occur + 1)
    if (s[left] !== s[i]) {
      result = Math.max(result, i - left - 2)
      left = i
    }
    if (s[left] == s[i] && i - left >= 1) {
      const subStr = s.substring(left, i + 1)
      map.set(subStr, (map.get(subStr) || 0) + 1)
      if (subStr.length > 2) {
        const subStrOfSub = subStr.substring(0, subStr.length - 1)
        map.set(subStrOfSub, (map.get(subStrOfSub) || 0) + 1)
      }
    }
  }
  for (const [key, val] of map) {
    if (val >= 3) {
      result = Math.max(result, key.length)
    }
  }
  if (i !== left) result = Math.max(result, i - left - 2)
  return result
}

// console.log(maximumLength('aaaa'))
// console.log(maximumLength('abcaba'))
// console.log(maximumLength('abcccccdddd'))
// console.log(maximumLength('cceeddedceddccceecddoooocdeecddcdddedcceeeeccedccc'))
// console.log(maximumLength('cccerrrecdcdccedecdccc'))
// console.log(maximumLength('cbc'))
// console.log(maximumLength('cccerrrecdcdccedecdcccddeeeddcdcddedccdceeedccecde'))
console.log(maximumLength('lkwwdddddnnnnnynnnnl'))
