/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const vowelsCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const vowelsAt = []
  const vowelsMap = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
    a: 5,
    e: 6,
    i: 7,
    o: 8,
    u: 9,
  }
  const vowelIdxMap = {
    0: 'A',
    1: 'E',
    2: 'I',
    3: 'O',
    4: 'U',
    5: 'a',
    6: 'e',
    7: 'i',
    8: 'o',
    9: 'u',
  }
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (vowelsMap[s[i].toLocaleLowerCase()] >= 0) {
      vowelsAt.push(i)
      vowelsCount[vowelsMap[s[i]]]++
    }
  }
  let left = 0
  for (let i = 0; i < vowelsAt.length; i++) {
    while (vowelsCount[left] <= 0 && left <= 9) {
      left++
    }
    s[vowelsAt[i]] = vowelIdxMap[left]
    vowelsCount[left]--
  }
  return s.join('')
}

console.log(sortVowels('lEetcOde'))
