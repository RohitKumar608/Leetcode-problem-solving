/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = ''
  const map = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  }

  function subsTractionMethod(num) {
    const firstNumber = '' + num
    let result = ''
    if (+firstNumber[0] === 4) {
      if (firstNumber.length == 3) {
        num -= 400
        result += 'CD'
      } else if (firstNumber.length == 2) {
        num -= 40
        result += 'XL'
      } else {
        num -= 9
        result += 'IV'
      }
    }
    if (+firstNumber[0] === 9) {
      if (firstNumber.length == 3) {
        num -= 900
        result += 'CM'
      } else if (firstNumber.length == 2) {
        num -= 90
        result += 'XC'
      } else {
        num -= 9
        result += 'IX'
      }
    }
    return [num, result]
  }

  if (num / 1000 > 0) {
    const absNumber = Math.floor(num / 1000)
    num -= absNumber * 1000
    result += map[1000].repeat(absNumber)
  }
  let updatedData = subsTractionMethod(num)
  num = updatedData[0]
  result += updatedData[1]
  if (num / 500 > 0) {
    const absNumber = Math.floor(num / 500)
    num -= absNumber * 500
    result += map[500].repeat(absNumber)
  }
  updatedData = subsTractionMethod(num)
  num = updatedData[0]
  result += updatedData[1]
  if (num / 100 > 0) {
    const absNumber = Math.floor(num / 100)
    num -= absNumber * 100
    result += map[100].repeat(absNumber)
  }
  updatedData = subsTractionMethod(num)
  num = updatedData[0]
  result += updatedData[1]
  if (num / 50 > 0) {
    const absNumber = Math.floor(num / 50)
    num -= absNumber * 50
    result += map[50].repeat(absNumber)
  }
  updatedData = subsTractionMethod(num)
  num = updatedData[0]
  result += updatedData[1]

  if (num / 10 > 0) {
    const absNumber = Math.floor(num / 10)
    num -= absNumber * 10
    result += map[10].repeat(absNumber)
  }
  updatedData = subsTractionMethod(num)
  num = updatedData[0]
  result += updatedData[1]
  if (num / 5 > 0) {
    const absNumber = Math.floor(num / 5)
    num -= absNumber * 5
    result += map[5].repeat(absNumber)
  }
  updatedData = subsTractionMethod(num)
  num = updatedData[0]
  result += updatedData[1]
  if (num / 1 > 0) {
    const absNumber = Math.floor(num / 1)
    num -= absNumber * 1
    result += map[1].repeat(absNumber)
  }
  return result
}

var intToRoman = function (num) {
  let ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  let tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  let hund = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  let ths = ['', 'M', 'MM', 'MMM']

  return (
    ths[Math.floor(num / 1000)] +
    hund[Math.floor((num % 1000) / 100)] +
    tens[Math.floor((num % 100) / 10)] +
    ones[num % 10]
  )
}

console.log(intToRoman(3999))
