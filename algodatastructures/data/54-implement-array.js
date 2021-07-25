class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  get(index) {
    return this.data[index]
  }
  push(value) {
    this.data[this.length] = value
    this.length++
    return this.length
  }
  pop() {
    const last = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return last
  }
  delete(index) {
    const item = this.data[index]
    this.shiftItems(index)
    return item
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

const newArray = new MyArray()
newArray.push('A')
newArray.push('B')
newArray.push('C')
console.log(newArray.delete(1))// 2
console.log(newArray)// {length:2, data: {'A', 'B'}}
// console.log(newArray.pop())// B
// console.log(newArray)// {length:1, data: {'A'}}