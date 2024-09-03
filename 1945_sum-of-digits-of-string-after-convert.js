/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let sum = ''
  for (let i = 0; i < s.length; i++) {
    sum += s.charCodeAt(i) - 96
  }
  while (k) {
    let tempSum = 0
    for (let i = 0; i < sum.length; i++) {
      tempSum += parseInt(sum[i])
    }
    k--
    sum = `${tempSum}`
  }
  return +sum
}

console.log(getLucky('iiii', 1))
console.log(getLucky('zbax', 2))
