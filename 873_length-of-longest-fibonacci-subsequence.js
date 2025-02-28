/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const set = new Set(arr)
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let a = arr[i]
      let b = arr[j]
      let count = 2
      while (set.has(a + b)) {
        const temp = a
        a = b
        b = temp + b
        count++
      }
      max = Math.max(max, count == 2 ? 0 : count)
    }
  }
  return max
}

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8])) // 5
console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18])) // 3;
