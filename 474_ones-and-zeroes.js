/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var findMaxForm = function (strs, m, n) {
  const zeroAndOneCount = []
  const cache = {}
  for (let i = 0; i < strs.length; i++) {
    let zeroCount = 0
    let oneCount = 0
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] === '0') zeroCount++
      else oneCount++
    }
    zeroAndOneCount[i] = [zeroCount, oneCount]
  }
  function backtrack(i, m, n) {
    const key = `${i},${m},${n}`
    if (i >= strs.length || m < 0 || n < 0) {
      return 0
    }
    if (cache[key] !== undefined) {
      return cache[key]
    }
    const [zero, one] = zeroAndOneCount[i]
    const updatedM = m - zero
    const updatedN = n - one
    let result = 0
    if (updatedM >= 0 && updatedN >= 0) {
      result = Math.max(result, 1 + backtrack(i + 1, updatedM, updatedN))
    }
    cache[key] = Math.max(result, backtrack(i + 1, m, n))
    return cache[key]
  }

  return backtrack(0, m, n)
}
console.log(
  findMaxForm(
    [
      '011',
      '1',
      '11',
      '0',
      '010',
      '1',
      '10',
      '1',
      '1',
      '0',
      '0',
      '0',
      '01111',
      '011',
      '11',
      '00',
      '11',
      '10',
      '1',
      '0',
      '0',
      '0',
      '0',
      '101',
      '001110',
      '1',
      '0',
      '1',
      '0',
      '0',
      '10',
      '00100',
      '0',
      '10',
      '1',
      '1',
      '1',
      '011',
      '11',
      '11',
      '10',
      '10',
      '0000',
      '01',
      '1',
      '10',
      '0',
    ],
    44,
    39
  )
)
