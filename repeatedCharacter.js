// https://leetcode.com/problems/first-letter-to-appear-twice/
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const letArr = s.split('')
  const repeated = []
  for (let i of letArr) {
    if (repeated.includes(i) === false) {
      repeated.push(i)
    } else {
      return i
    }
  }
}
