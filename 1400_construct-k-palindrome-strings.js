/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length === k) return true
  if (s.length < k) return false
  const frequency = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    frequency[s.charCodeAt(i) - 97]++
  }
  let oddCount = 0
  for (let i = 0; i < 26; i++) {
    if (frequency[i] % 2 === 1) oddCount++
  }
  if (oddCount <= k) return true
  return false
}

console.log(canConstruct('annabelle', 2))
