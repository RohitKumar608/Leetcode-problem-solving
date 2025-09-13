/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const frequency = {}
  let maxVowelFreq = 0
  let maxConsonantFreq = 0
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  }
  for (let i = 0; i < s.length; i++) {
    frequency[s[i]] = (frequency[s[i]] || 0) + 1
    if (vowels[s[i]]) {
      maxVowelFreq = Math.max(maxVowelFreq, frequency[s[i]])
    } else {
      maxConsonantFreq = Math.max(maxConsonantFreq, frequency[s[i]])
    }
  }
  return maxVowelFreq + maxConsonantFreq
}
