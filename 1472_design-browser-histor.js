/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.forwardArr = [homepage]
  this.backward = []
  this.position = 0
  return null
}

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.forwardArr.push(url)
  this.position = this.forwardArr.length - 1
  this.backward = []
  return null
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (steps && this.position) {
    this.position--
    this.backward.push(this.forwardArr.pop())
    steps--
  }
  return this.forwardArr[this.position]
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (this.backward.length && steps) {
    steps--
    this.position++
    this.forwardArr.push(this.backward.pop())
  }
  return this.forwardArr[this.position]
}

const operations = [
  'BrowserHistory',
  'visit',
  'visit',
  'visit',
  'back',
  'back',
  'forward',
  'visit',
  'forward',
  'back',
  'back',
]
/**,
  ,'visit',
  'forward',
  'back',
  'back' */
const data = [
  ['leetcode.com'],
  ['google.com'],
  ['facebook.com'],
  ['youtube.com'],
  [1],
  [1],
  [1],
  ['linkedin.com'],
  [2],
  [2],
  [7],
]
var obj = ''
operations.forEach((operation, idx) => {
  if (idx === 0) {
    obj = new BrowserHistory(data[idx][0])
  }
  if (operation === 'visit') {
    console.log(obj.visit(data[idx][0]))
  }
  if (operation === 'back') {
    console.log(obj.back(data[idx][0]), operation)
  }
  if (operation === 'forward') {
    console.log(obj.forward(data[idx][0]))
  }
})

console.log(obj)
