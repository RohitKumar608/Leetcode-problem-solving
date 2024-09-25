/**
 * @param {string[]} words
 * @return {number[]}
 */

class TrieNode {
  constructor() {
    this.children = {}
    this.prefixCount = 0
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
      curr.prefixCount++
    }
    curr.prefixCount = Math.max(curr.prefixCount, 1)
  }
  startWith(word) {
    let curr = this.root
    let count = 0

    for (const char of word) {
      curr = curr.children[char]
      if (typeof curr !== 'object') {
        return count
      }
      count += curr.prefixCount
    }
    return count
  }
}

var sumPrefixScores = function (words) {
  const trie = new Trie()
  for (const word of words) {
    trie.insert(word)
  }
  const result = []
  for (const word of words) {
    result.push(trie.startWith(word))
  }
  return result
}

console.log(sumPrefixScores(['abc', 'ab', 'bc', 'b']))
console.log(sumPrefixScores(['abcd']))
