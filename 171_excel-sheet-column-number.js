/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0
  for (let i = 0; i < columnTitle.length; i++) {
    const charCode = columnTitle.charCodeAt(i) - 64
    result += charCode * Math.pow(26, columnTitle.length - 1 - i)
  }
  return result
}

console.log(titleToNumber('ZYYYYYY'))
