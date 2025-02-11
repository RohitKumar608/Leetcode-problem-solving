/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  let str = s
  while (str.includes(part)) {
    str = str.replace(part, '')
  }
  return str
}

console.log(removeOccurrences('daabcbaabcbc', 'abc')) // "dab";
