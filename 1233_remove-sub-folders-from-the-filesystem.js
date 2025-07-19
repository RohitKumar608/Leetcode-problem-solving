/**
 * @param {string[]} folder
 * @return {string[]}
 */

class TrieNode {
  constructor() {
    this.children = {}
    this.endOfWord = false
    this.length = 0
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word) {
    word = word.split('/')
    let cur = this.root
    for (let i = 1; i < word.length; i++) {
      if (!cur.children[word[i]]) {
        cur.children[word[i]] = new TrieNode()
      }
      cur = cur.children[word[i]]
    }
    cur.endOfWord = true
  }
  search(word) {
    word = word.split('/')
    let cur = this.root
    let result = ''
    for (let i = 1; i < word.length; i++) {
      cur = cur.children[word[i]]
      result += `/${word[i]}`
      if (cur.endOfWord) return result
    }
    return result
  }
}

var removeSubfolders = function (folder) {
  const trie = new Trie()
  const result = {}
  for (const char of folder) {
    trie.insert(char)
  }
  for (const char of folder) {
    result[trie.search(char)] = true
  }
  return Object.keys(result)
}

var removeSubfolders = function (folder) {
  if (folder.length === 1) return folder

  folder.sort()
  let dir = folder[0]
  let j = 1

  for (let i = 1; i < folder.length; i++) {
    if (folder[i].startsWith(dir) && folder[i].charAt(dir.length) === '/')
      continue
    folder[j] = folder[i]
    dir = folder[j]
    j++
  }

  return folder.slice(0, j)
}

// console.log(removeSubfolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f']))
console.log(removeSubfolders(['/a/b/c', '/a/b/ca', '/a/b/d']))
