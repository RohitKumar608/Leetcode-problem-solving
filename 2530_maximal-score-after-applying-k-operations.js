/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  let n = nums.length
  let priorityQueue = new MaxPriorityQueue({ priority: (x) => x })

  for (let i = 0; i < n; i++) {
    priorityQueue.enqueue(nums[i])
  }
  let result = 0
  for (let i = 0; i < k; i++) {
    const dequeueVal = priorityQueue.dequeue()
    result += dequeueVal.element
    priorityQueue.enqueue(Math.ceil(dequeueVal.element / 3))
  }

  return result
}
