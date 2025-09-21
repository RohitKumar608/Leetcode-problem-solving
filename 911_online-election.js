/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
  this.persons = persons
  this.votes = []
  this.times = times
  this.maxLastVote = []
  let frequency = {}
  let maxVotes = 0
  let getMaxVote = 0
  for (let i = 0; i < persons.length; i++) {
    frequency = { ...frequency }
    if (!frequency[persons[i]]) {
      frequency[persons[i]] = 0
    }
    frequency[persons[i]] = frequency[persons[i]] + 1
    this.votes.push(frequency)
    if (frequency[persons[i]] >= maxVotes) {
      maxVotes = frequency[persons[i]]
      getMaxVote = persons[i]
    }
    this.maxLastVote.push(getMaxVote)
  }
}

TopVotedCandidate.prototype.getMaxVotes = function (votes, idx) {
  let maxVotes = 0
  let getMaxVote = 0
  let hasTies = false
  for (const key in votes) {
    hasTies ||= maxVotes === votes[key]
    if (votes[key] > maxVotes) {
      maxVotes = votes[key]
      getMaxVote = key
    }
  }
  if (hasTies) {
    return this.maxLastVote[idx]
  }
  return +getMaxVote
}
/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  let low = 0
  let high = this.times.length - 1
  if (t >= this.times[high]) {
    return this.getMaxVotes(this.votes[high], high)
  }
  while (low < high) {
    const mid = Math.floor((low + high) / 2)
    if (this.times[mid] < t) low = mid + 1
    else high = mid
  }
  if (this.times[low] > t) {
    low = Math.max(low - 1, 0)
  }

  return this.getMaxVotes(this.votes[low], low)
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

let operations = ['TopVotedCandidate', 'q', 'q', 'q', 'q', 'q', 'q']
let data = [
  [
    [0, 1, 1, 0, 0, 1, 0],
    [0, 5, 10, 15, 20, 25, 30],
  ],
  [3],
  [12],
  [25],
  [15],
  [24],
  [8],
]

operations = [
  'TopVotedCandidate',
  'q',
  'q',
  'q',
  'q',
  'q',
  'q',
  'q',
  'q',
  'q',
  'q',
]
data = [
  [
    [0, 1, 2, 2, 1],
    [20, 28, 29, 54, 56],
  ],
  [28],
  [53],
  [57],
  [29],
  [29],
  [28],
  [30],
  [20],
  [56],
  [55],
]

// operations = [
//   'TopVotedCandidate',
//   'q',
//   'q',
//   'q',
//   'q',
//   'q',
//   'q',
//   'q',
//   'q',
//   'q',
//   'q',
// ]
// data = [
//   [
//     [0, 0, 1, 1, 2],
//     [0, 67, 69, 74, 87],
//   ],
//   [4],
//   [62],
//   [100],
//   [88],
//   [70],
//   [73],
//   [22],
//   [75],
//   [29],
//   [10],
// ]

var obj = new TopVotedCandidate(...data[0])
const result = [null]
for (let i = 1; i < data.length; i++) {
  result.push(obj.q(...data[i]))
}
console.log(result, obj)
