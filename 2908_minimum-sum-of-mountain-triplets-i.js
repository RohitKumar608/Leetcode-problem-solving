/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum1 = function (nums) {
  let result = Infinity
  for (let i = nums.length - 1; i >= 0; i--) {
    const triplets = [nums[i]]
    for (let j = i - 1; j >= 0; j--) {
      if (triplets.length === 1 && nums[j] > triplets[0]) {
        triplets.push(nums[j])
      } else if (triplets.length === 2 && triplets[1] > nums[j]) {
        triplets.push(nums[j])
      }
      if (triplets.length === 3 && triplets[2] > nums[j]) {
        if (triplets[0] < triplets[2]) triplets[1] = triplets[2]
        triplets[2] = nums[j]
      }
    }
    if (triplets.length === 3) {
      result = Math.min(result, triplets[0] + triplets[1] + triplets[2])
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const triplets = [nums[i]]
    for (let j = i + 1; j < nums.length; j++) {
      if (triplets.length === 1 && nums[j] > triplets[0]) {
        triplets.push(nums[j])
      } else if (triplets.length === 2 && triplets[1] > nums[j]) {
        triplets.push(nums[j])
      }
      if (triplets.length === 3 && triplets[2] > nums[j]) {
        if (triplets[0] < triplets[2]) triplets[1] = triplets[2]
        triplets[2] = nums[j]
      }
    }
    if (triplets.length === 3) {
      result = Math.min(result, triplets[0] + triplets[1] + triplets[2])
    }
  }
  return result === Infinity ? -1 : result
}

var minimumSum = function (nums) {
  let result = Infinity
  for (let i = nums.length - 1; i >= 0; i--) {
    const triplets = [nums[i]]
    const triplets1 = [nums[nums.length - 1 - i]]
    for (let j = i - 1; j >= 0; j--) {
      const triplets1Idx = nums.length - 1 - j
      if (triplets1.length === 1 && nums[triplets1Idx] > triplets1[0]) {
        triplets1.push(nums[triplets1Idx])
      }
      if (triplets1.length === 2 && triplets1[1] > nums[triplets1Idx]) {
        triplets1.push(nums[triplets1Idx])
      }
      if (triplets1.length === 3 && triplets1[2] > nums[triplets1Idx]) {
        if (triplets1[0] < triplets1[2]) triplets1[1] = triplets1[2]
        triplets1[2] = nums[triplets1Idx]
      }

      if (triplets.length === 1 && nums[j] > triplets[0]) {
        triplets.push(nums[j])
      }
      if (triplets.length === 2 && triplets[1] > nums[j]) {
        triplets.push(nums[j])
      }
      if (triplets.length === 3 && triplets[2] > nums[j]) {
        if (triplets[0] < triplets[2]) triplets[1] = triplets[2]
        triplets[2] = nums[j]
      }
    }

    if (triplets.length === 3) {
      result = Math.min(result, triplets[0] + triplets[1] + triplets[2])
    }
    if (triplets1.length === 3) {
      result = Math.min(result, triplets1[0] + triplets1[1] + triplets1[2])
    }
  }
  return result === Infinity ? -1 : result
}

console.log(minimumSum([5, 4, 8, 7, 10, 2]))
console.log(minimumSum([8, 6, 1, 5, 3]))
console.log(minimumSum([6, 5, 4, 3, 4, 5]))

console.log(minimumSum([1, 2, 3, 2]))
console.log(minimumSum([2, 3, 2, 1]))
