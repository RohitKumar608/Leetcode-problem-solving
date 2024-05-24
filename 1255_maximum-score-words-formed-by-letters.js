/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  const letterCount = {}
  for (const letter of letters) {
    letterCount[letter] = (letterCount[letter] || 0) + 1
  }

  function canForm(word, letterCount) {
    const wordCount = {}
    for (const char of word) {
      wordCount[char] = (wordCount[char] || 0) + 1
    }
    for (const char of word) {
      if (
        wordCount[char] > letterCount[char] ||
        letterCount[char] === undefined
      ) {
        return false
      }
    }
    return true
  }

  function getScore(word) {
    let res = 0
    for (const char of word) {
      res += score[char.charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    return res
  }

  function backtracking(i) {
    if (i === words.length) {
      return 0
    }
    let res = backtracking(i + 1)
    if (canForm(words[i], letterCount)) {
      for (const letter of words[i]) {
        letterCount[letter]--
      }
      res = Math.max(res, getScore(words[i]) + backtracking(i + 1))
      for (const letter of words[i]) {
        letterCount[letter]++
      }
    }
    return res
  }
  return backtracking(0)
}

console.log(
  maxScoreWords(
    ['dog', 'cat', 'dad', 'good'],
    ['a', 'a', 'c', 'd', 'd', 'd', 'g', 'o', 'o'],
    [
      1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
)
