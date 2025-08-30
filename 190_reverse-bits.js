/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
  n = n.toString(2)
  n = n.split('')
  if (n.length < 32) {
    n = new Array(32 - n.length).fill(0).concat(n)
  }
  let result = 0
  for (let i = 31; i >= 0; i--) {
    result += Math.pow(2, i) * n[i]
  }
  return result
}

console.log(reverseBits(43261596))
