/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let result = 0
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  }

  const sliceStr = s.slice(0, k)
  for (const str of sliceStr) {
    if (vowels[str]) {
      result++
    }
  }
  let tempVowelCount = result

  for (let i = k; i < s.length; i++) {
    if (vowels[s[i - k]]) {
      tempVowelCount--
    }
    if (vowels[s[i]]) {
      tempVowelCount++
    }
    result = Math.max(result, tempVowelCount)
  }
  return result
}

console.log(maxVowels('tryhard', 4))
