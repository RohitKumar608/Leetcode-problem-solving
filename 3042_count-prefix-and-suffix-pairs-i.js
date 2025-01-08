/**
 * @param {string[]} words
 * @return {number}
 */

class TrieNode {
  constructor() {
    this.children = {}
    this.end = ''
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word, reverse = false) {
    let currentNode = this.root
    const indices = new Set()
    for (const char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode()
      }
      currentNode = currentNode.children[char]
      if (currentNode.children) {
        indices.add(currentNode.end)
      }
    }
    currentNode.end = reverse ? word.split('').reverse().join('') : word
    return indices
  }
}

function countPrefixSuffixPairs(words) {
  const prefixTrie = new Trie()
  const suffixTrie = new Trie()
  const countMap = new Map()
  let result = 0

  for (const word of words) {
    const prefixIndices = prefixTrie.insert(word)
    const suffixIndices = suffixTrie.insert(
      word.split('').reverse().join(''),
      true
    )
    for (const chars of prefixIndices) {
      if (suffixIndices.has(chars)) {
        result += countMap.get(chars) || 0
      }
    }
    countMap.set(word, (countMap.get(word) || 0) + 1)
  }

  return result
}

var countPrefixSuffixPairs = function (words) {
  let result = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let left = 0
      let right = words[j].length - 1
      result++
      while (left < words[i].length) {
        if (
          words[i][left] !== words[j][left] ||
          words[i][words[i].length - 1 - left] !== words[j][right - left]
        ) {
          result--
          break
        }
        left++
      }
    }
  }

  return result
}

const isPrefixAndSuffix = (str1, str2) => {
  return str2.startsWith(str1) && str2.endsWith(str1)
}

var countPrefixSuffixPairs = function (words) {
  let count = 0

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) count++
    }
  }

  return count
}
console.log(countPrefixSuffixPairs(['a', 'aba', 'ababa', 'aa']))
console.log(countPrefixSuffixPairs(['a', 'c', 'cacaa', 'ccccc']))
