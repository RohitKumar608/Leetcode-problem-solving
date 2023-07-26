// https://leetcode.com/problems/reverse-words-in-a-string

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(' ')
    .filter((val) => val !== '')
    .reverse()
    .join(' ')
}

console.log(reverseWords('  hello    world  '))
