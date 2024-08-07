/**
 * @param {number} num
 * @return {string}
 */

const tens = {
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
}
const ones = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
}
const postFix = ['', ' Thousand', ' Million', ' Billion']

function getStringDigit(digit) {
  const res = []
  const hundred = Math.floor(digit / 100)
  if (hundred) {
    res.push(`${ones[hundred]} Hundred`)
  }
  const lastTwo = digit % 100
  if (lastTwo >= 20) {
    const ten = Math.floor(lastTwo / 10)
    const one = lastTwo % 10
    res.push(tens[ten * 10])
    if (one) {
      res.push(ones[one])
    }
  } else if (lastTwo) {
    res.push(ones[lastTwo])
  }
  return res.join(' ')
}

var numberToWords = function (num) {
  if (num === 0) {
    return 'Zero'
  }
  let i = 0
  const res = []
  while (num) {
    const digit = num % 1000
    const s = getStringDigit(digit)
    if (s) {
      res.push(s + postFix[i])
    }
    i++
    num = Math.floor(num / 1000)
  }
  res.reverse()
  return res.join(' ')
}

console.log(numberToWords(1234567))
