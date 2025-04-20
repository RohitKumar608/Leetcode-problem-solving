/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  const freq = {}
  for (let num of answers) {
    freq[num] = (freq[num] || 0) + 1
  }
  const nums = [...new Set(answers)]
  let count = 0
  for (let num of nums) {
    const groups = Math.ceil(freq[num] / (num + 1))
    count += groups * (num + 1)
  }

  return count
}

console.log(numRabbits([1, 1, 2]))
