/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let number = BigInt('0b' + s)

  let result = 0
  while (number !== BigInt(1)) {
    if (number % BigInt(2) === BigInt(0)) {
      number = number / BigInt(2)
      result++
    } else {
      number = number + BigInt(1)
      number = number / BigInt(2)
      result += 2
    }
  }
  return result
}

console.log(
  numSteps('1111011110000011100000110001011011110010111001010111110001')
)
