/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */

var areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence2 === '') return true
  const arr1 = sentence1.split(' ')
  const arr2 = sentence2.split(' ')
  let start = 0
  let rightMatchCount = 0
  let end = Math.min(arr2.length, arr1.length) - 1
  const maxIdx = Math.max(arr2.length, arr1.length) - 1
  while (start <= end) {
    if (arr1[start] === arr2[start]) {
      start++
    } else if (
      (arr1.length === arr2 && arr1[end] === arr2[end]) ||
      arr1[maxIdx - rightMatchCount] === arr2[end] ||
      arr2[maxIdx - rightMatchCount] === arr1[end]
    ) {
      end--
      rightMatchCount++
    } else {
      return false
    }
  }
  return true
}
