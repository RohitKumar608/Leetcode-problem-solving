/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  characters = characters
    .split('')
    .sort((a, b) => a - b)
    .join('')
  let combinations = []
  function backtrack(str, currChar) {
    if (currChar.length > combinationLength) return
    if (currChar.length === combinationLength) {
      combinations.push(currChar)
    }
    for (let i = 0; i < str.length; i++) {
      backtrack(str.slice(i + 1), currChar + str[i])
    }
  }

  backtrack(characters, '')
  this.combinations = combinations
  this.idx = 0
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  const currVal = this.combinations[this.idx]
  this.idx++
  return currVal
}

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.combinations.length > this.idx
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

let operations = [
  'CombinationIterator',
  'next',
  'hasNext',
  'next',
  'hasNext',
  'next',
  'hasNext',
]
let data = [['abc', 2], [], [], [], [], [], []]
var obj = new CombinationIterator(...data[0])
const result = []
for (let i = 1; i < data.length; i++) {
  if (operations[i] === 'next') {
    result.push(obj.next())
  } else {
    result.push(obj.hasNext())
  }
}
console.log(result)
