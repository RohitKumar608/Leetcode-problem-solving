/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  let result = ''
  const prefixSum = new Array(s.length).fill(0)
  for (const [from, to, direction] of shifts) {
    for (let i = from; i <= to; i++) {
      if (direction === 0) {
        prefixSum[i] -= 1
      } else {
        prefixSum[i] += 1
      }
    }
  }
  for (let i = 0; i < prefixSum.length; i++) {
    const charCode = s.charCodeAt(i) + (prefixSum[i] % 26)
    result += String.fromCharCode(
      charCode > 122 ? charCode - 26 : charCode < 97 ? charCode + 26 : charCode
    )
  }
  return result
}

// console.log(
//   shiftingLetters('abc', [
//     [0, 1, 0],
//     [1, 2, 1],
//     [0, 2, 1],
//   ])
// )

// console.log(
//   shiftingLetters('dztz', [
//     [0, 0, 0],
//     [1, 1, 1],
//   ])
// )

console.log(
  shiftingLetters('xuwdbdqik', [
    [4, 8, 0],
    [4, 4, 0],
    [2, 4, 0],
    [2, 4, 0],
    [6, 7, 1],
    [2, 2, 1],
    [0, 2, 1],
    [8, 8, 0],
    [1, 3, 1],
  ])
)
