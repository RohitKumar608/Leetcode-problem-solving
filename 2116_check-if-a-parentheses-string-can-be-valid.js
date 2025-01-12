/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  if (s.length % 2 !== 0) {
    return false
  }

  const stackLocked = []
  const stackUnlocked = []

  for (let i = 0; i < s.length; i++) {
    if (locked[i] === '0') {
      stackUnlocked.push(i)
    } else if (s[i] === '(') {
      stackLocked.push(i)
    } else {
      if (stackLocked.length) {
        stackLocked.pop()
      } else if (stackUnlocked.length) {
        stackUnlocked.pop()
      } else {
        return false
      }
    }
  }

  while (
    stackLocked.length &&
    stackUnlocked.length &&
    stackUnlocked[stackUnlocked.length - 1] >
      stackLocked[stackLocked.length - 1]
  ) {
    stackLocked.pop()
    stackUnlocked.pop()
  }

  if (stackLocked.length) {
    return false
  }

  return stackUnlocked.length % 2 === 0
}

// console.log(
//   canBeValid(
//     '"())(()(()(())()())(())((())(()())((())))))(((((((())(()))))("',
//     '100011110110011011010111100111011101111110000101001101001111'
//   )
// )

console.log(
  canBeValid(
    '))))(())((()))))((()((((((())())((()))((((())()()))(()',
    '101100101111110000000101000101001010110001110000000101'
  )
)
