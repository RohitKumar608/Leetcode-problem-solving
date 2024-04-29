/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let exorOfNumb = nums[0]
  for (let i = 1; i < nums.length; i++) {
    exorOfNumb = exorOfNumb ^ nums[i]
  }
  if (exorOfNumb === k) return 0
  let binaryOfExorNum = exorOfNumb.toString(2)
  binaryOfExorNum = '0'.repeat(32 - binaryOfExorNum.length) + binaryOfExorNum
  let binaryOfK = k.toString(2)
  binaryOfK = '0'.repeat(32 - binaryOfK.length) + binaryOfK
  let result = 0
  for (let i = 0; i < binaryOfExorNum.length; i++) {
    if (binaryOfExorNum[i] !== binaryOfK[i]) {
      result++
    }
  }
  return result
}

console.log(minOperations([2, 1, 3, 4], 1))
