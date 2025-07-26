/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  const set = new Set()
  let left = 0
  let result = 1
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      while (set.has(s[left])) {
        set.delete(s[left])
        left++
      }
      result++
    }
    set.add(s[i], true)
  }

  return result
}

console.log(partitionString('abacaba'))
console.log(partitionString('ssssss'))
console.log(partitionString('cuieokbs'))
