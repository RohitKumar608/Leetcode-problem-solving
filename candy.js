// https://leetcode.com/problems/candy/
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (arr) {
  const n = arr.length
  const leftCompare = new Array(n).fill(1)
  const rightCompare = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      leftCompare[i] = leftCompare[i - 1] + 1
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      rightCompare[i] = rightCompare[i + 1] + 1
    }
  }
  let result = 0
  for (let i = 0; i < n; i++) {
    result += Math.max(leftCompare[i], rightCompare[i])
  }
  return result
}

console.log(candy([1, 0, 2]))
console.log(candy([1, 2, 2]))
console.log(candy([1, 2, 87, 87, 87, 2, 1]))
