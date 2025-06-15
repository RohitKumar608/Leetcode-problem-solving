/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  num = `${num}`
  const uniqueNum = [...new Set(num.split(''))]
  let maxVal = 0
  let minVal = Infinity
  for (let i = 0; i < uniqueNum.length; i++) {
    maxVal = Math.max(maxVal, +num.replaceAll(uniqueNum[i], '9'))
    minVal = Math.min(minVal, +num.replaceAll(uniqueNum[i], '0'))
  }
  return maxVal - minVal
}

console.log(minMaxDifference('90'))
