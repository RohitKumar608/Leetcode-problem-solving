var SmallestInfiniteSet = function () {
  this.map = {}
  for (let i = 1; i <= 1000; i++) {
    this.map[i] = i
  }
}

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  for (const key in this.map) {
    delete this.map[key]
    return key
  }
}

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.map[num]) {
    return null
  }
  this.map[num] = num
  return null
}

const operations = [
  'SmallestInfiniteSet',
  'addBack',
  'popSmallest',
  'popSmallest',
  'popSmallest',
  'addBack',
  'popSmallest',
  'popSmallest',
  'popSmallest',
]

const data = [[], [2], [], [], [], [1], [], [], []]

let smallestNum = ''
operations.forEach((val, idx) => {
  if (val === 'SmallestInfiniteSet') {
    smallestNum = new SmallestInfiniteSet()
  }
  if (val === 'addBack') {
    console.log(smallestNum.addBack(data[idx][0]))
  }
  if (val === 'popSmallest') {
    console.log(smallestNum.popSmallest(data[idx]))
  }
})
