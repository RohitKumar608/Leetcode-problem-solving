/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phoneDigitMap = {
    '': '',
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  if (digits.length <= 1) {
    return [...phoneDigitMap[digits]]
  }
  const phoneMapArr = digits.split('').map((digit) => phoneDigitMap[digit])
  function backTrack(idx) {
    if (idx === digits.length - 1) {
      return [...phoneMapArr[idx]]
    }
    const result = []
    const currentPhoneDigits = phoneMapArr[idx]
    const res = backTrack(idx + 1)
    for (const str of currentPhoneDigits) {
      for (const str2 of res) {
        result.push(`${str}${str2}`)
      }
    }
    return result
  }
  const result = backTrack(0)
  return result
}

console.log(letterCombinations('234'))
