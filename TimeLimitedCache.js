// https://leetcode.com/problems/cache-with-time-limit

var TimeLimitedCache = function () {
  this.cache = {}
  this.expiredKey = 0
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const isKeyExist = this.cache[key]
  this.cache[key] = {
    value: value,
    duration: duration,
    time: Date.now() + duration,
  }
  this.expiredKey = Object.keys(this.cache).length
  if (isKeyExist) {
    return true
  }
  return false
}

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (!this.cache[key]) return -1
  if (this.cache[key].time - Date.now() < 0) {
    delete this.cache[key]
    this.expiredKey--
    return -1
  }

  return this.cache[key].value
}

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  for (const key in this.cache) {
    console.log(
      this.cache[key].time,
      Date.now(),
      this.cache[key] && this.cache[key].time - Date.now()
    )
    if (this.cache[key] && this.cache[key].time - Date.now() < 0) {
      delete this.cache[key]
      this.expiredKey--
    }
  }
  return this.expiredKey
}

var TimeLimitedCache2 = function () {
  this.cache = {}
  this.size = 0
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache2.prototype.set = function (key, value, duration) {
  const res = !!this.cache[key]
  if (this.cache[key]) clearTimeout(this.cache[key].timeOut)
  else this.size++
  this.cache[key] = {
    value,
    duration,
    isExpired: false,
    timeOut: setTimeout(() => {
      this.cache[key].isExpired = true
      this.size--
    }, duration),
  }
  return res
}

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache2.prototype.get = function (key) {
  if (this.cache[key] && !this.cache[key].isExpired)
    return this.cache[key].value
  return -1
}

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache2.prototype.count = function () {
  return this.size
}

var obj = new TimeLimitedCache()
obj.set(1, 42, 100)
setTimeout(() => {
  console.log(obj.get(1))
}, 50)
setTimeout(() => {
  console.log(obj.count())
}, 50)
setTimeout(() => {
  console.log(obj.get(1))
}, 150)
