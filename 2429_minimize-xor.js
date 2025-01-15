/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */

function countSetBits(num) {
  let count = 0
  while (num) {
    count += num & 1
    num >>= 1
  }
  return count
}
var minimizeXor = function (num1, num2) {
  let result = 0
  let targetSetBits = countSetBits(num2)

  for (let i = 31; i >= 0 && targetSetBits > 0; i--) {
    if (num1 & (1 << i)) {
      result |= 1 << i
      targetSetBits--
    }
  }

  for (let i = 0; i < 32 && targetSetBits > 0; i++) {
    if (!(result & (1 << i))) {
      result |= 1 << i
      targetSetBits--
    }
  }

  return result
}
