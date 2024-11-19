/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const len = code.length
  const result = new Array(len).fill(0)

  for (let i = 0; i < code.length; i++) {
    if (k > 0) {
      let sum = 0
      for (let j = i + 1; j <= i + k; j++) {
        sum += code[j % len]
      }
      result[i] = sum
    }
    if (k < 0) {
      let sum = 0
      for (let j = i + len + k; j < len + i; j++) {
        sum += code[j % len]
      }
      result[i] = sum
    }
  }
  return result
}

// console.log(decrypt([5, 7, 1, 4], 3))
console.log(decrypt([2, 4, 9, 3], -2))
