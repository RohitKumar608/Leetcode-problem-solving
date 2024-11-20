/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  let result = Infinity
  const count = [0, 0, 0]
  let left = 0
  for (const char of s) {
    count[char.charCodeAt(0) - 97]++
  }
  if (Math.min(...count) < k) {
    return -1
  }
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]--
    while (Math.min(...count) < k) {
      count[s.charCodeAt(left) - 97]++
      left++
    }
    result = Math.min(result, s.length - (i - left + 1))
  }
  return result
}

// console.log(takeCharacters('aabaaaacaabc', 2))
// console.log(takeCharacters('abc', 1))
// console.log(takeCharacters('bcca', 1))
// console.log(takeCharacters('"cbaabccac"', 3))
// console.log(takeCharacters('bcca', 1))
// console.log(takeCharacters('ccbabcc', 1))
// console.log(takeCharacters('baccaac', 1))
// console.log(takeCharacters('bcca', 1))
console.log(takeCharacters('caccbbba', 1))
