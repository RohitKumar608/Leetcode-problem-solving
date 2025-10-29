/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
  while (true) {
    const binary = n.toString(2)
    let hasAllBitOne = true
    for (let i = 0; i < binary.length; i++) {
      hasAllBitOne &= binary[i] === '1'
    }
    if (hasAllBitOne) return n
    n++
  }
}

var smallestNumber = function (n) {
  let x = 1
  while (x < n) {
    x = x * 2 + 1
  }
  return x
}
