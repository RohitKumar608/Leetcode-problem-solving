/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const freq = new Array(k).fill(0)

  for (const num of arr) {
    freq[((num % k) + k) % k]++
  }

  if (freq[0] % 2 !== 0) return false

  for (let i = 1; i <= k / 2; i++) {
    if (freq[i] !== freq[k - i]) return false
  }

  return true
}

console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5))
console.log(canArrange([2, 2, 2, 4], 4))
