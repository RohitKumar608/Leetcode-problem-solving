/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
  const MOD = 1000000007
  const know = [[1, 1]]
  const share = []
  let knowCnt = 1
  let shareCnt = 0
  for (let i = 2; i <= n; i++) {
    if (know.length && know[0][1] === i - delay) {
      const first = know.shift()
      shareCnt = (shareCnt + first[0]) % MOD
      knowCnt = (knowCnt - first[0] + MOD) % MOD
      share.push(first)
    }
    if (share.length && share[0][1] === i - forget) {
      const first = share.shift()
      shareCnt = (shareCnt - first[0] + MOD) % MOD
    }
    if (share.length) {
      knowCnt = (knowCnt + shareCnt) % MOD
      know.push([shareCnt, i])
    }
  }
  return (knowCnt + shareCnt) % MOD
}

console.log(peopleAwareOfSecret(6, 2, 4))
console.log(peopleAwareOfSecret(4, 1, 3))
