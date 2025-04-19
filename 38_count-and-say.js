/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let str = '1'
  for (let i = 2; i <= n; i++) {
    let currCount = 1
    let left = 0
    let tempStr = ''
    while (left < str.length) {
      if (str[left] === str[left + 1]) {
        currCount++
      } else {
        tempStr = `${tempStr}${currCount}${str[left]}`
        currCount = 1
      }
      left += 1
    }
    str = tempStr
  }
  return str
}

console.log(countAndSay(6))
