/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let result = 0
  const charCount = new Array(26).fill(0)

  // Count the frequency of each character
  for (const char of s) {
    charCount[char.charCodeAt(0) - 97]++
  }

  // Calculate the minimum length after operations
  for (const count of charCount) {
    if (count > 0) {
      result += count % 2 === 0 ? 2 : 1
    }
  }

  return result
}
