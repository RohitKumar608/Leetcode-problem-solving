/**
 * @param {string} expression
 * @return {string}
 */

var fractionAddition = function (expression) {
  const splitVal = expression.split('-').flatMap((val) => val.split('+'))
  const denominators = []
  const nominators = []
  splitVal.forEach((val) => {
    if (val !== '') {
      const [nominator = 1, denominator = 1] = val.split('/')
      denominators.push(+denominator)
      nominators.push(+nominator)
    }
  })

  const lcm = findLCM(denominators, denominators.length)
  let numeratorVal =
    expression[0] === '-'
      ? -(lcm / denominators[0]) * nominators[0]
      : (lcm / denominators[0]) * nominators[0]
  let count = 1
  for (let i = 1; i < expression.length; i++) {
    if (expression[i] === '-') {
      const val = (lcm / denominators[count]) * nominators[count]
      numeratorVal = numeratorVal - val
      count++
    }
    if (expression[i] === '+') {
      const val = (lcm / denominators[count]) * nominators[count]
      numeratorVal = numeratorVal + val
      count++
    }
  }

  const result = numeratorVal / lcm

  if (result === Math.floor(result)) {
    return `${result}/1`
  } else {
    const commonDivisorVal = commonDivisor(Math.abs(numeratorVal), lcm)
    return `${numeratorVal / commonDivisorVal}/${lcm / commonDivisorVal}`
  }
}

function commonDivisor(first, second) {
  const minVal = Math.min(first, second)
  let maxDivisor = 1
  for (let idx = 2; idx <= minVal; idx++) {
    if (first % idx === 0 && second % idx === 0) {
      maxDivisor = idx
    }
  }
  return maxDivisor
}

function gcd(a, b) {
  if (b == 0) return a
  return gcd(b, a % b)
}

function findLCM(arr, n) {
  let ans = arr[0]
  for (let i = 1; i < n; i++) ans = (arr[i] * ans) / gcd(arr[i], ans)

  return ans
}
