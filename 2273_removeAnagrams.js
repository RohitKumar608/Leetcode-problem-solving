/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  const result = []
  let prevFreq = new Array(26).fill(0)

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const freq = new Array(26).fill(0)

    for (let ch of word) {
      freq[ch.charCodeAt(0) - 97]++
    }

    if (!arraysEqual(freq, prevFreq)) {
      result.push(word)
      prevFreq = freq
    }
  }

  return result
}

function arraysEqual(a, b) {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}
