/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const frequency = new Map()
  let result = licensePlate + licensePlate
  for (const char of licensePlate) {
    const charCode = char.toLowerCase().charCodeAt(0)
    if (charCode >= 97 && charCode <= 122) {
      frequency.set(
        char.toLowerCase(),
        (frequency.get(char.toLowerCase()) || 0) + 1
      )
    }
  }
  for (const word of words) {
    const tempFreq = new Map(frequency)
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (tempFreq.has(char)) {
        tempFreq.set(char, tempFreq.get(char) - 1)
      }
      if (tempFreq.get(char) === 0) {
        tempFreq.delete(char)
      }
    }
    if (tempFreq.size === 0 && result.length > word.length) {
      result = word
    }
  }
  return result
}

console.log(
  shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])
)
