/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const map = new Map()
  const result = new Array().fill(0)
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) {
      result[i] = i === 0 ? 1 : result[i - 1] + 1
      continue
    }
    let matchCount = 0
    map.set(A[i], A[i])
    for (let j = 0; j <= i; j++) {
      if (map.has(B[j])) {
        matchCount++
        map.delete(B[j])
      }
    }
    result[i] = i === 0 ? matchCount : result[i - 1] + matchCount
  }
  return result
}

// console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]))
console.log(findThePrefixCommonArray([2, 3, 1], [3, 1, 2]))
// console.log(findThePrefixCommonArray([1, 2, 3], [3, 1, 2]))
