/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */

const vowels = { a: true, e: true, i: true, o: true, u: true }

function isFirstAndLastCharIsVower(word) {
  return vowels[word[0]] && vowels[word[word.length - 1]] ? 1 : 0
}

var vowelStrings = function (words, queries) {
  const result = []
  const prefixSum = new Array(words.length + 1).fill(0)
  prefixSum[0] = isFirstAndLastCharIsVower(words[0])

  for (let i = 1; i < words.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + isFirstAndLastCharIsVower(words[i])
  }
  for (let i = 0; i < queries.length; i++) {
    const [left, right] = queries[i]
    result.push(prefixSum[right] - (prefixSum[left - 1] || 0))
  }
  return result
}

var vowelStrings = function (words, queries) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const word = words[0]
  words[0] = vowels.has(word[0]) && vowels.has(word.at(-1)) ? 1 : 0
  const vowelsStrings = []

  for (let i = 1; i < words.length; i++) {
    const word = words[i]
    const first = word[0]
    const last = word.at(-1)

    const vowelString = vowels.has(first) && vowels.has(last) ? 1 : 0

    words[i] = words[i - 1] + vowelString
  }

  for (let i = 0; i < queries.length; i++) {
    const [left, right] = queries[i]

    if (left > 0) vowelsStrings.push(words[right] - words[left - 1])
    else vowelsStrings.push(words[right])
  }

  return vowelsStrings
}

console.log(
  vowelStrings(
    ['aba', 'bcb', 'ece', 'aa', 'e'],
    [
      [0, 2],
      [1, 4],
      [1, 1],
    ]
  )
)
