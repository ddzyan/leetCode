// 实现hashMap

class HashMap {
  constructor() {
    this.map = {};
    this.size = 0;
  }

  put(key, value) {
    if (!this.containsKey(key)) {
      this.size++;
    }
    this.map[key] = value;
  }

  containsKey(key) {
    return this.map.hasOwnProperty(key);
  }

  get(key) {
    if (this.map.hasOwnProperty(key)) {
      return this.map[key];
    }
    return null;
  }
}

module.exports = HashMap;
