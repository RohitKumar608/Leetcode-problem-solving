/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  let result = ''
  let count = 1
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      count++
    }
    if (count === 9) {
      result += `${count}${word[i]}`
      count = 0
    }
    if (word[i] !== word[i + 1]) {
      if (count > 0) result += `${count}${word[i]}`
      count = 1
    }
  }
  return result
}

console.log(compressedString('aaaaaaaaaaaaaabb'))
console.log(compressedString('abcde'))
