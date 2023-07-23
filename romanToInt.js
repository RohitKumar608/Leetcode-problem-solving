// https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0

  for (let i = 0; i < s.length; i++) {
    const nextVal = sym[s[i + 1]] || 0
    const curr = sym[s[i]]
    if (nextVal > curr) {
      result -= curr
    } else {
      result += sym[s[i]]
    }
  }
  return result
}

// console.log(romanToInt('LVIII'))

console.log(romanToInt('MCMXCIV'))
