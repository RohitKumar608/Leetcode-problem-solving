/**
 * @param {number} n
 * @return {number}
 */

var nextBeautifulNumber = function (n) {
  function checkKeyHasSameFreqAsCount(num) {
    const map = {}
    while (num > 0) {
      map[num % 10] = (map[num % 10] || 0) + 1
      num = Math.floor(num / 10)
    }

    for (const key in map) {
      if (+key !== map[key]) {
        return false
      }
    }
    return true
  }
  n++
  while (true) {
    if (checkKeyHasSameFreqAsCount(n)) {
      return n
    }
    n++
  }
}

console.log(nextBeautifulNumber(1000))
