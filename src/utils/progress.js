class Progress {
  constructor (n, timeout) {
    this.n = n || 0
    this.si = undefined
    this.timeout = 500
  }

  clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }
  inc(amount) {
    let n = this.n
    if(n > 1) {
      return
    } else {
      if (typeof amount !== 'number') {
        if (n >= 0 && n < 0.2) { amount = 0.1; }
        else if (n >= 0.2 && n < 0.5) { amount = 0.04; }
        else if (n >= 0.5 && n < 0.8) { amount = 0.02; }
        else if (n >= 0.8 && n < 0.99) { amount = 0.005; }
        else { amount = 0; }
      }

      n = this.clamp(n + amount, 0, 0.994);
      return this.set(n);
    }
  }
  get() {
    return this.n
  }
  set(n) {
    this.n = this.clamp(n, 0, 1)
  }
  start(cb) {
    this.si = setInterval(() => {
      this.inc()
      cb(this.n)
    }, this.timeout)
  }
  st() {
    this.si = setInterval(() => {
      return new Promise(resolve => {
        resolve(this.n)
      })
    }, this.timeout)
  }
  done() {
    this.inc(0.3 + 0.5 * Math.random())
    this.set(1)
    clearInterval(this.si)
    return this.get()
  }
}

export function createProgress(n,timeout) {
  return new Progress(n, timeout)
}

export default Progress
