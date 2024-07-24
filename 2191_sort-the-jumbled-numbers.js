/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = `${nums[i]}`
    let mappedNumber = ''
    for (let j = 0; j < num.length; j++) {
      mappedNumber += mapping[num[j]]
    }
    map.set(nums[i], +mappedNumber)
  }
  nums.sort((a, b) => map.get(a) - map.get(b))
  return nums
}

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]))
console.log(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123]))
