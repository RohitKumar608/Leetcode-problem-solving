/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let currCount = 1
  let result = -1
  arr.sort((a, b) => a - b)
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      if (arr[i] === currCount) {
        result = Math.max(result, currCount)
      }
      currCount = 1
    } else {
      currCount++
    }
  }
  return result
}

var findLucky = function (arr) {
  let freq = {}

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    if (freq[el]) {
      freq[el]++
    } else {
      freq[el] = 1
    }
  }

  let max = -1

  for (const [key, value] of Object.entries(freq)) {
    if (Number(key) === value) {
      if (value > max) {
        max = value
      }
    }
  }
  return max
}

console.log(findLucky([1, 2, 2, 3, 3, 3]))
