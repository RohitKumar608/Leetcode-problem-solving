/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  const set = new Set()
  let result = s
  function dfs(s) {
    if (set.has(s)) {
      return
    }
    set.add(s)
    // rotate the string
    const rotateStr = s.substring(s.length - b) + s.substring(0, s.length - b)
    // Add the number to odd indices
    const copyOfS = s.split('')
    for (let i = 1; i < copyOfS.length; i = i + 2) {
      copyOfS[i] = (+copyOfS[i] + a) % 10
    }
    const mutatedStr = copyOfS.join('')
    if (result > mutatedStr) {
      result = mutatedStr
    }
    if (result > rotateStr) {
      result = rotateStr
    }

    dfs(rotateStr)
    dfs(mutatedStr)
  }
  dfs(s)
  return result
}

console.log(findLexSmallestString('5525', 9, 2))
// console.log(findLexSmallestString('74', 5, 1))
console.log(findLexSmallestString('43987654', 7, 3))

// let num = 9
// for (let i = 1; i <= 10; i++) {
//   num = (num + 7) % 10
//   console.log(num)
// }
