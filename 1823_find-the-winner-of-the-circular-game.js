/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const arr = new Array(n).fill(0).map((val, idx) => idx + 1)
  let tempIdx = k - 1
  while (arr.length > 1) {
    tempIdx = tempIdx % arr.length
    console.log(structuredClone(arr), tempIdx)
    arr.splice(tempIdx, 1)
    tempIdx += k - 1
  }
  return arr[0]
}

console.log(findTheWinner(5, 2))
console.log(findTheWinner(6, 5))
