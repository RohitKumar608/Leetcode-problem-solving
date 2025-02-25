/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  let evenCount = 0
  let oddCount = 0
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (sum % 2 === 0) {
      evenCount++
    } else {
      oddCount++
    }
  }
  return (oddCount + evenCount * oddCount) % (10 ** 9 + 7)
}

console.log(numOfSubarrays([1, 2, 3, 4, 5, 6, 7]))
