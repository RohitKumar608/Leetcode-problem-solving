/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
  str1 = str1.split('')
  str2 = str2.split('').reverse()
  if (str2.length > str1.length) {
    return false
  }
  for (let i = 0; i < str1.length; i++) {
    const charCodeStr1 = str1[i].charCodeAt(0)
    const charCodeStr2 = str2[str2.length - 1].charCodeAt(0)
    const diff =
      Math.min(charCodeStr1 + 1 - charCodeStr2, charCodeStr2 - charCodeStr1) %
      25
    if (diff == 0 || str1[i] === str2[str2.length - 1]) {
      str2.pop()
    }
    if (str2.length === 0) {
      return true
    }
  }
  return str2.length === 0
}
var canMakeSubsequence = function (str1, str2) {
  if (str2.length > str1.length) {
    return false
  }
  let leftPointer = 0
  for (let i = 0; i < str1.length; i++) {
    const charCodeStr1 = str1.charCodeAt(i)
    const charCodeStr2 = str2.charCodeAt(leftPointer)
    const diff =
      Math.min(charCodeStr1 + 1 - charCodeStr2, charCodeStr2 - charCodeStr1) %
      25
    if (diff == 0 || str1[i] === str2[leftPointer]) {
      leftPointer++
    }
    if (str2.length === leftPointer) {
      return true
    }
  }
  return str2.length === leftPointer
}

console.log(canMakeSubsequence('abc', 'ad'))
console.log(canMakeSubsequence('zc', 'ad'))
console.log(canMakeSubsequence('ab', 'd'))
console.log(canMakeSubsequence('c', 'b'))
