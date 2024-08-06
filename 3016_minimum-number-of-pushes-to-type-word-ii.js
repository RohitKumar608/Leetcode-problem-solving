/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const notMap = { 1: true, '*': true, '#': true, 0: true }
  const map = new Array(26).fill(0)
  let result = 0
  let increment = 0
  for (const char of word) {
    if (notMap[char]) {
      continue
    }
    map[char.charCodeAt(0) % 97]++
  }
  for (const val of map.sort((a, b) => b - a)) {
    result += (Math.floor(increment / 8) + 1) * val
    increment++
  }
  return result
}

console.log(minimumPushes('xyzxyzxyzxyz'))
console.log(minimumPushes('abcde'))
console.log(minimumPushes('aabbccddeeffgghhiiiiii'))
console.log(minimumPushes('alporfmdqsbhncwyu'))
