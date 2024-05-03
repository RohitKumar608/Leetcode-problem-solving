/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  version1 = version1.split('.')
  version2 = version2.split('.')
  let result = 0
  for (let i = 0; i < Math.max(version1.length, version2.length); i++) {
    diff = (version1[i] || 0) - (version2[i] || 0)
    if (diff !== 0) {
      result = diff
      break
    }
  }
  if (result < 0) return -1
  if (result > 0) return 1
  return 0
}

console.log(compareVersion('1.0.1', '1'))
console.log(compareVersion('1.05', '1.1'))
console.log(compareVersion('1.0', '1.2'))
console.log(compareVersion('0.1', '0.0.1'))
