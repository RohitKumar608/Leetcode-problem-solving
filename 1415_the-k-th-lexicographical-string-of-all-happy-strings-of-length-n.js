/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const happyStrings = []
  const characters = ['a', 'b', 'c']
  function backtrack(str) {
    if (str.length === n) {
      happyStrings.push(str)
      return
    }
    for (let i = 0; i < characters.length; i++) {
      if (str.length === 0 || str[str.length - 1] !== characters[i]) {
        backtrack(str + characters[i])
      }
    }
  }
  backtrack('')
  return happyStrings[k - 1] || ''
}

console.log(getHappyString(3, 9))
