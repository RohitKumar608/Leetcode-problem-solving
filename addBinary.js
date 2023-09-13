/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary1 = function (a, b) {
  if (a.length > b.length) {
    b = '0'.repeat(a.length - b.length) + b
  } else {
    a = '0'.repeat(b.length - a.length) + a
  }
  let i = a.length - 1
  let carry = 0
  let ans = ''

  while (i >= 0) {
    if (a[i] === '0' && b[i] === '0' && carry === 0) {
      ans = '0' + ans
    } else if (a[i] === '0' && b[i] === '0' && carry === 1) {
      ans = '1' + ans
      carry = 0
    } else if (a[i] === '0' && b[i] === '1' && carry === 1) {
      ans = '0' + ans
      carry = 1
    } else if (a[i] === '1' && b[i] === '0' && carry === 1) {
      ans = '0' + ans
      carry = 1
    } else if (a[i] === '1' && b[i] === '0' && carry === 0) {
      ans = '1' + ans
      carry = 0
    } else if (a[i] === '1' && b[i] === '1' && carry === 1) {
      ans = '1' + ans
      carry = 1
    } else if (a[i] === '1' && b[i] === '1' && carry === 0) {
      ans = '0' + ans
      carry = 1
    } else if (a[i] === '0' && b[i] === '1' && carry === 0) {
      ans = '1' + ans
      carry = 0
    }
    i--
  }
  if (carry === 1) {
    ans = '1' + ans
  }
  return ans
}

var addBinary = function (a, b) {
  const numA = BigInt(`0b${a}`)
  const numB = BigInt(`0b${b}`)
  const sum = numA + numB
  return sum.toString(2)
}

console.log(addBinary('11', '1'))
