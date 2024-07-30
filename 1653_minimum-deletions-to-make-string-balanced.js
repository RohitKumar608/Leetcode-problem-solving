/**
 * @param {string} s
 * @return {number}
 */

var minimumDeletions = function (s) {
  const aCountRight = []

  let result = s.length
  aCountRight[s.length] = 0
  let bCountLeft = 0
  for (let i = s.length - 1; i >= 0; i--) {
    aCountRight[i] = 0
    if (s[i + 1] === 'a') {
      aCountRight[i] += aCountRight[i + 1] + 1
    } else {
      aCountRight[i] = aCountRight[i + 1]
    }
  }
  for (let i = 0; i < s.length; i++) {
    result = Math.min(result, bCountLeft + aCountRight[i])
    if (s[i] === 'b') bCountLeft++
  }
  return result
}

var minimumDeletions = function (s) {
  let aCountRight = 0
  let bLeftCount = 0

  let result = Infinity
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') aCountRight++
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') aCountRight--
    result = Math.min(result, aCountRight + bLeftCount)
    if (s[i] === 'b') bLeftCount++
  }
  return result
}

console.log(minimumDeletions('aababbab'))
