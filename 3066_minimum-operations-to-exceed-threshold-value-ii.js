/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let result = 0
  const priorityQueue = new PriorityQueue({ compare: (a, b) => a - b })
  for (const val of nums) {
    priorityQueue.enqueue(val)
  }
  while (priorityQueue.size() > 1 && priorityQueue.front() < k) {
    const x = priorityQueue.dequeue()
    const y = priorityQueue.dequeue()
    priorityQueue.enqueue(Math.min(x, y) * 2 + Math.max(x, y))
    result++
  }
  return result
}
