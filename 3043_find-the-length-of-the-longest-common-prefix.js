/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

class TrieNode {
  constructor() {
    this.children = {}
    this.endOfWord = 0
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word) {
    let curr = this.root
    for (const char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode()
      }
      curr = curr.children[char]
    }
    curr.endOfWord = true
  }
  startWith(word) {
    let curr = this.root
    let count = 0

    for (const char of word) {
      curr = curr.children[char]
      if (typeof curr !== 'object') {
        return count
      }
      count++
    }
    return count
  }
}

var longestCommonPrefix = function (arr1, arr2) {
  const trie = new Trie()
  for (const val of arr2) {
    trie.insert(val.toString())
  }
  let result = 0
  for (const val of arr1) {
    result = Math.max(result, trie.startWith(val.toString()))
  }
  return result
}

var longestCommonPrefix = function (arr1, arr2) {
  const map = new Map()
  for (const val of arr2) {
    let str = ''
    for (const char of val.toString()) {
      str += char
      map.set(str, true)
    }
  }
  let result = 0
  for (const val of arr1) {
    let str = ''
    for (const char of val.toString()) {
      str += char
      if (map.get(str) === true) {
        result = Math.max(result, str.length)
      }
    }
  }
  return result
}

console.log(longestCommonPrefix([1, 10, 100], [1000]))
// console.log(longestCommonPrefix([1, 2, 3], [4, 4, 4]))
// console.log(longestCommonPrefix([26], [22, 2]))
