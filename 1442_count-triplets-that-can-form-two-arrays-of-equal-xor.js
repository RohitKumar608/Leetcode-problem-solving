/**
 * @param {number[]} arr
 * @return {number}
 */

var countTriplets = function (arr) {
  let result = 0
  for (let i = 0; i < arr.length - 1; i++) {
    let a = 0
    for (let j = i + 1; j < arr.length; j++) {
      a ^= arr[j - 1]
      let b = 0
      for (let k = j; k < arr.length; k++) {
        b ^= arr[k]
        if (a === b) result++
      }
    }
  }
  return result
}

console.log(countTriplets([2, 3, 1, 6, 7]))
// console.log(countTriplets([1, 1, 1, 1, 1]))
