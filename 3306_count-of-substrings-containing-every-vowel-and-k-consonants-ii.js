/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u'])

  function atleastK(k) {
    let left = 0
    const vowelMap = new Map()
    let result = 0
    let consonantCount = 0

    for (let i = 0; i < word.length; i++) {
      if (vowelsSet.has(word[i])) {
        vowelMap.set(word[i], (vowelMap.get(word[i]) || 0) + 1)
      } else {
        consonantCount++
      }

      while (vowelMap.size === 5 && consonantCount >= k) {
        result += word.length - i
        if (vowelsSet.has(word[left])) {
          vowelMap.set(word[left], vowelMap.get(word[left]) - 1)
          if (vowelMap.get(word[left]) === 0) {
            vowelMap.delete(word[left])
          }
        } else {
          consonantCount--
        }
        left++
      }
    }
    return result
  }

  return atleastK(k) - atleastK(k + 1)
}

// console.log(countOfSubstrings('ieaouqqieaouqq', 1))
console.log(countOfSubstrings('iqeaouqi', 2))
