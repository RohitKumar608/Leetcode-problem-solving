/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const maxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let minDigLen = `${low}`.length - 1
  const maxDigLen = `${high}`.length
  const result = []
  while (minDigLen <= maxDigLen) {
    for (let i = 0; i <= 9 - minDigLen; i++) {
      const str = maxNumber.slice(i, minDigLen + i).reduce((a, b) => a + b, '')
      if (+str >= low && +str <= high) {
        result.push(+str)
      }
    }
    minDigLen++
  }

  return result
}

console.log(sequentialDigits(123, 123456789))
