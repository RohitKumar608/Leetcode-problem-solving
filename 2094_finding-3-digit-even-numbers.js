/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  digits.sort((a, b) => a - b)
  const set = new Set()
  const result = []
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) continue
    for (let j = 0; j < digits.length; j++) {
      if (i == j) continue
      for (let k = 0; k < digits.length; k++) {
        if (j == k || i === k || digits[k] % 2 !== 0) continue
        const number = digits[i] * 100 + digits[j] * 10 + digits[k]
        if (set.has(number)) continue
        set.add(number)
        result.push(number)
      }
    }
  }
  return result
}

console.log(findEvenNumbers([2, 1, 3, 0]))
