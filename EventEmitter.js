// https://leetcode.com/problems/event-emitter
class EventEmitter {
  constructor() {
    this.subscribers = {}
  }
  subscribe(event, cb) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = []
    }
    this.subscribers[event].push(cb)
    const events = this.subscribers[event] || []
    return {
      unsubscribe: () => {
        const index = events.indexOf(cb)
        if (index >= 0) {
          events.splice(index, 1)
        }
      },
    }
  }

  emit(event, args = []) {
    if (!this.subscribers[event]) return []
    const result = []
    const events = this.subscribers[event] || []
    events.forEach((callback, idx) => {
      result.push(callback(...args))
    })
    return result
  }
}

const emitter = new EventEmitter()

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99
}
const sub = emitter.subscribe('onClick', onClickCallback)
// console.log(sub)

console.log(emitter.emit('onClick')) // [99]
sub.unsubscribe() // undefined
console.log(emitter.emit('onClick')) // []
