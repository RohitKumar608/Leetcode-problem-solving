/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1
  this.nums2 = nums2
  this.cnt = new Map()
  for (const num of nums2) {
    this.cnt.set(num, (this.cnt.get(num) || 0) + 1)
  }
}

FindSumPairs.prototype.add = function (index, val) {
  const oldVal = this.nums2[index]
  this.cnt.set(oldVal, (this.cnt.get(oldVal) || 0) - 1)
  this.nums2[index] += val
  const newVal = this.nums2[index]
  this.cnt.set(newVal, (this.cnt.get(newVal) || 0) + 1)
}

FindSumPairs.prototype.count = function (tot) {
  let ans = 0
  for (const num of this.nums1) {
    const rest = tot - num
    ans += this.cnt.get(rest) || 0
  }
  return ans
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

let operation = [
  'FindSumPairs',
  'count',
  'add',
  'count',
  'count',
  'add',
  'add',
  'count',
]
let data = [
  [
    [1, 1, 2, 2, 2, 3],
    [1, 4, 5, 2, 5, 4],
  ],
  [7],
  [3, 2],
  [8],
  [4],
  [0, 1],
  [1, 1],
  [7],
]
const result = []
var obj = new FindSumPairs(...data[0])
for (let i = 1; i < operation.length; i++) {
  if (operation[i] === 'count') {
    result.push(obj.count(data[i]))
  } else {
    result.push(obj.add(...data[i]))
  }
}

console.log(result)
