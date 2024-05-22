/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = []

  const isPalindrome = (str) => {
    let left = 0
    let right = str.length - 1

    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }

    return true
  }

  const backtrack = (start, currPartition) => {
    if (start >= s.length) {
      result.push([...currPartition])
      return
    }

    for (let end = start; end < s.length; end++) {
      const substring = s.substring(start, end + 1)
      if (isPalindrome(substring)) {
        currPartition.push(substring)
        backtrack(end + 1, currPartition)
        currPartition.pop()
      }
    }
  }

  backtrack(0, [])
  return result
}

console.log(partition('abbab'))
