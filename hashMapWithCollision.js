class MyHashMap {
  constructor(size) {
    this.size = size
    this.hashMap = new Array(size)
  }
  _hash(str) {
    let codeCount = 0
    for (let i = 0; i < str.length; i++) {
      codeCount += str.charCodeAt(i) * i
    }
    return codeCount % this.size
  }
  set(key, value) {
    const address = this._hash(key)
    if (!this.hashMap[address]) {
      this.hashMap[address] = []
    }
    this.hashMap[address].push([key, value])
  }
  get(key) {
    const address = this._hash(key)
    return this.hashMap[address]
  }
}

const hashMap = new MyHashMap(50)
console.log(hashMap.set('grapes', 1000))

console.log(hashMap.hashMap)
