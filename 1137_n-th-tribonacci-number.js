/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n < 2) return n
  if (n == 2) return 1

  let t0 = 0
  let t1 = 1
  let t2 = 1
  for (let i = 3; i < n + 1; i++) {
    t = t0 + t1 + t2
    t0 = t1
    t1 = t2
    t2 = t
  }

  return t
}
