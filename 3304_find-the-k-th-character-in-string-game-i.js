/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
  let str = 'a'
  while (str.length < k) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'z') {
        newStr += String.fromCharCode(97)
      } else {
        newStr += String.fromCharCode(str.charCodeAt(i) + 1)
      }
    }
    str += newStr
  }
  return str[k - 1]
}
