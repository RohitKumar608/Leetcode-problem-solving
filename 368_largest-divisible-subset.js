/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset1 = function (nums) {
  nums.sort((a, b) => a - b)
  const cache = {}
  function dfs(i, prev) {
    if (i === nums.length) {
      return []
    }
    if (cache[`${i},${prev}`] !== undefined) {
      return cache[`${i},${prev}`]
    }
    let res = dfs(i + 1, prev)
    if (nums[i] % prev === 0) {
      const temp = [nums[i]].concat(dfs(i + 1, nums[i]))
      res = res.length > temp.length ? res : temp
    }
    cache[`${i},${prev}`] = res
    return res
  }
  const result = dfs(0, 1)
  return result
}
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b)
  const cache = {}
  function dfs(i) {
    if (i === nums.length) {
      return []
    }
    if (cache[i]) return cache[i]
    let res = [nums[i]]
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] % nums[i] === 0) {
        const temp = [nums[i]].concat(dfs(j))
        res = res.length > temp.length ? res : temp
      }
    }
    cache[i] = res
    return res
  }
  let result = []
  for (let i = 0; i < nums.length; i++) {
    const tempRes = dfs(i)
    result = result.length > tempRes.length ? result : tempRes
  }
  return result
}

// console.log(largestDivisibleSubset([3, 4, 16, 8]))
console.log(largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720]))
