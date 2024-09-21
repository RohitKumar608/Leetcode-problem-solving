/**
 * @param {number} n
 * @return {number[]}
 */

class TrieNode {
  constructor() {
    this.children = {}
    this.value = ''
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word) {
    let cur = this.root
    for (let i = 0; i < word.length; i++) {
      if (!cur.children[word[i]]) {
        cur.children[word[i]] = new TrieNode()
      }
      cur = cur.children[word[i]]
    }
    cur.value = word
  }
  search(trie, result) {
    for (let i = 0; i <= 9; i++) {
      if (trie.children[i]) {
        result.push(trie.children[i].value)
        this.search(trie.children[i], result)
      }
    }
    return result
  }
}

var lexicalOrder = function (n) {
  const trie = new Trie()
  for (let i = 1; i <= n; i++) {
    trie.insert(`${i}`)
  }
  return trie.search(trie.root, [])
}

var lexicalOrder2 = function (n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(`${i}`)
  }
  arr.sort()
  return arr
}

console.log(lexicalOrder(1003))
console.log(lexicalOrder2(1003))
