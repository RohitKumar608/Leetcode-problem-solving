/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  const str = n.toString()
  const maxVal = str
    .split('')
    .sort((a, b) => b - a)
    .join('')
  const frequency = new Array(10).fill(0)
  for (let i = 0; i < str.length; i++) {
    frequency[str[i]]++
  }
  let num = ''
  let pow = 0
  while (+num <= +maxVal) {
    num = `${Math.pow(2, pow)}`
    pow++
    if (num.length == str.length) {
      const tempFreq = [...frequency]
      for (let i = 0; i < num.length; i++) {
        if (tempFreq[num[i]]) tempFreq[num[i]]--
      }
      if (tempFreq.reduce((acc, val) => acc + val, 0) == 0) {
        return true
      }
    }
  }
  return false
}

console.log(reorderedPowerOf2(1892))
