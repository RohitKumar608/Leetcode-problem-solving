/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true
  if (s1.length !== s2.length) return false
  let str1Diff = ''
  let str2Diff = ''
  let diffCount = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diffCount++
      str1Diff += s1[i]
      str2Diff += s2[i]
    }
  }
  if (diffCount > 2) return false
  return str1Diff[0] === str2Diff[1] && str1Diff[1] === str2Diff[0]
}

console.log(areAlmostEqual('bank', 'kanb')) // true;
