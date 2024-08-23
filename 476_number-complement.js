/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const binaryNum = BigInt(num).toString(2)
  let str = ''
  for (let i = 0; i < binaryNum.length; i++) {
    str += binaryNum[i] == '1' ? '0' : '1'
  }
  return parseInt(str, 2)
}
