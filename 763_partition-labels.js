/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i)
  }
  const result = []
  let lastIndex = 0
  let totalPartition = -1
  for (let i = 0; i < s.length; i++) {
    lastIndex = Math.max(lastIndex, map.get(s[i]))
    if (i === lastIndex) {
      result.push(i - totalPartition)
      totalPartition = lastIndex
    }
  }
  return result
}

console.log(partitionLabels('ababcbacadefegdehijhklij'))
