var MyCalendarTwo1 = function () {
  this.cal = {}
}
/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */

MyCalendarTwo1.prototype.book = function (start, end) {
  const booked = this.cal
  booked[start] = (booked[start] || 0) + 1
  booked[end] = (booked[end] || 0) - 1
  let sum = 0
  for (const key in booked) {
    sum += booked[key]
    if (sum === 3) {
      booked[start]--
      booked[end]++
      return false
    }
  }
  return true
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */

class MyCalendarTwo {
  constructor() {
    this.calendar = []
    this.doubleBooked = []
  }
  book(start, end) {
    for (let i = 0; i < this.doubleBooked.length; i++) {
      if (start < this.doubleBooked[i][1] && end > this.doubleBooked[i][0])
        return false
    }

    for (let i = 0; i < this.calendar.length; i++) {
      if (start < this.calendar[i][1] && end > this.calendar[i][0]) {
        this.doubleBooked.push([
          Math.max(start, this.calendar[i][0]),
          Math.min(end, this.calendar[i][1]),
        ])
      }
    }

    this.calendar.push([start, end])
    return true
  }
}
/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

var operation = [
  'MyCalendarTwo',
  'book',
  'book',
  'book',
  'book',
  'book',
  'book',
]
var data = [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]

var operation = [
  'MyCalendarTwo',
  'book',
  'book',
  'book',
  'book',
  'book',
  'book',
  'book',
  'book',
  'book',
  'book',
]
var data = [
  [],
  [24, 40],
  [43, 50],
  [27, 43],
  [5, 21],
  [30, 40],
  [14, 29],
  [3, 19],
  [3, 14],
  [25, 39],
  [6, 19],
]

var obj = ''
const result = []
operation.forEach((ope, idx) => {
  if (ope === 'MyCalendarTwo') {
    obj = new MyCalendarTwo()
  } else {
    result.push(obj.book(...data[idx]))
  }
})
console.log(result)
