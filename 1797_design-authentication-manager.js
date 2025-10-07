/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
  this.timeToLive = timeToLive
  this.manager = new Map()
}

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
  if (!this.manager.has(tokenId)) {
    this.manager.set(tokenId, currentTime + this.timeToLive)
  }
}

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
  if (!this.manager.has(tokenId)) return
  if (this.manager.get(tokenId) > currentTime) {
    this.manager.delete(tokenId)
    this.manager.set(tokenId, currentTime + this.timeToLive)
  }
}

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
  const keys = this.manager.keys()
  for (let key of keys) {
    if (this.manager.get(key) <= currentTime) {
      this.manager.delete(key)
    }
  }
  return this.manager.size
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */

let operations = [
  'AuthenticationManager',
  'renew',
  'countUnexpiredTokens',
  'countUnexpiredTokens',
  'generate',
  'generate',
  'renew',
  'generate',
  'generate',
  'countUnexpiredTokens',
  'countUnexpiredTokens',
  'countUnexpiredTokens',
  'renew',
  'countUnexpiredTokens',
  'countUnexpiredTokens',
  'countUnexpiredTokens',
  'generate',
  'countUnexpiredTokens',
  'renew',
]
let data = [
  [13],
  ['ajvy', 1],
  [3],
  [4],
  ['fuzxq', 5],
  ['izmry', 7],
  ['puv', 12],
  ['ybiqb', 13],
  ['gm', 14],
  [15],
  [18],
  [19],
  ['ybiqb', 21],
  [23],
  [25],
  [26],
  ['aqdm', 28],
  [29],
  ['puv', 30],
]

var obj = new AuthenticationManager(data[0][0])
const result = []
for (let i = 1; i < data.length; i++) {
  if (operations[i] === 'generate') {
    console.log(`${i}:-->>:`, data[i], operations[i])
    result.push(obj.generate(...data[i]))
    console.log(structuredClone(obj.map))
  }
  if (operations[i] === 'renew') {
    console.log(`${i}:-->>:`, data[i], operations[i])
    result.push(obj.renew(...data[i]), structuredClone(obj.map))
    console.log(structuredClone(obj.map))
  }
  if (operations[i] === 'countUnexpiredTokens') {
    // console.log(
    //   `${i}:-->>:`,
    //   data[i],
    //   operations[i],
    //   obj.countUnexpiredTokens(...data[i]),
    //   structuredClone(obj.map)
    // )
    result.push(obj.countUnexpiredTokens(...data[i]))
  }
  console.log('---'.repeat(5))
}
console.log(result)
