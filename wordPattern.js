// https://leetcode.com/problems/word-pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(' ')
  const mapSet = {}
  const alreadyMapped = {}
  if (pattern.length !== s.length) return false

  for (let i = 0; i < pattern.length; i++) {
    if (
      typeof alreadyMapped[s[i]] === 'string' &&
      alreadyMapped[s[i]] !== pattern[i]
    ) {
      return false
    }
    if (typeof mapSet[pattern[i]] === 'string' && mapSet[pattern[i]] !== s[i]) {
      console.log('object')
      return false
    }

    mapSet[pattern[i]] = s[i]
    alreadyMapped[s[i]] = pattern[i]
  }

  return true
}

// console.log(wordPattern('abc', 'dog cat dog'))
console.log(wordPattern('abba', 'dog constructor constructor dog'))
