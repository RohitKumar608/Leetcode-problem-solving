/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  let MOD = 1e9 + 7
  let n = nums.length

  nums.sort((a, b) => a - b)
  let r = n - 1
  let count = 0
  let pow = [1]

  for (let i = 1; i < n; i++) {
    pow[i] = (pow[i - 1] * 2) % MOD
  }

  for (let i = 0; i < n && r > 0; i++) {
    while (r >= 0 && i < n && nums[i] + nums[r] > target) r--

    if (i <= r) count = (count + pow[r - i]) % MOD
  }

  return count % MOD
}

console.log(
  numSubseq(
    [
      9, 25, 9, 28, 24, 12, 17, 8, 28, 7, 21, 25, 10, 2, 16, 19, 12, 13, 15, 28,
      14, 12, 24, 9, 6, 7, 2, 15, 19, 13, 30, 30, 23, 19, 11, 3, 17, 2, 14, 20,
      22, 30, 12, 1, 11, 2, 2, 20, 20, 27, 15, 9, 10, 4, 12, 30, 13, 5, 2, 11,
      29, 5, 3, 13, 22, 5, 16, 19, 7, 19, 11, 16, 11, 25, 29, 21, 29, 3, 2, 9,
      20, 15, 9,
    ],
    32
  )
)
