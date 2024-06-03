/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */

var areSentencesSimilar = function (sentence1, sentence2) {
  const arr1 = sentence1.split(' ')
  const arr2 = sentence2.split(' ')
  while (arr1.length !== 0 && arr2.length !== 0 && arr1[0] === arr2[0]) {
    arr1.shift()
    arr2.shift()
  }
  while (
    arr1.length !== 0 &&
    arr2.length !== 0 &&
    arr1[arr1.length - 1] === arr2[arr2.length - 1]
  ) {
    arr1.pop()
    arr2.pop()
  }
  return arr1.length === 0 || arr2.length === 0
}

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

// console.log(
//   areSentencesSimilar(
//     'J XjzIw EFBiyBl KEOkY Wl bcOgPez aOM k S p y vm y ubW gY GA U Nkf aAtLMs G fCxsZOtw bPYyuBsqE',
//     'J XjzIw EFBiyBl KEOkY Wl bcOgPez aOM k S p vm y ubW gY GA U aAtLMs G fCxsZOtw bPYyuBsqE'
//   )
// )

// console.log(areSentencesSimilar('My name is Haley', 'My Haley'))
// console.log(
//   areSentencesSimilar(
//     'xD iP tqchblXgqvNVdi',
//     'FmtdCzv Gp YZf UYJ xD iP tqchblXgqvNVdi'
//   )
// )

console.log(areSentencesSimilar('a A', 'A A a a'))
