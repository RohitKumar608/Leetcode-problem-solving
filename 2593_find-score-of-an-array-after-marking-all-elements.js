/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
  let result = 0
  const minPriorityQueue = new PriorityQueue({
    compare: (e1, e2) => {
      if (e1.val > e2.val) return 1
      if (e1.val < e2.val) return -1
      return e1.rank < e2.rank ? -1 : 1
    },
  })
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    minPriorityQueue.enqueue({ val: nums[i], rank: i })
  }
  while (minPriorityQueue.size()) {
    const data = minPriorityQueue.dequeue()
    const { val, rank: idx } = data
    if (!set.has(idx)) {
      result += val
      set.add(idx + 1)
      set.add(idx - 1)
      set.add(idx)
    }
  }
  return result
}
