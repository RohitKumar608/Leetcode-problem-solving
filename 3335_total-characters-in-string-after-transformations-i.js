/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
  const MOD = 1e9 + 7
  const cnt = Array(26).fill(0)
  let res = s.length
  let z = 25

  for (let c of s) {
    cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  while (t--) {
    res = (res + cnt[z]) % MOD
    cnt[(z + 1) % 26] = (cnt[(z + 1) % 26] + cnt[z]) % MOD
    z = (z + 25) % 26
    console.log(z)
  }
  return res
}

// console.log(lengthAfterTransformations('abcyy', 2))
// console.log(lengthAfterTransformations('u', 5))
console.log(lengthAfterTransformations('j', 100))
