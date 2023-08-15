function getType(obj) {
  if(typeof obj !== 'object') {
    return obj
  }
  return Object.prototype.toString.call(obj).replace(/^$/, '$1')
}

console.log(getType([]))

const arr = [1,2,3]
console.log(Math.max(...arr))
console.log(Math.max.apply(Math, arr))

function Person() {
  this.name = 'jack'
}

let p = Person()  //正确的赋值方法是let p = new Person()
console.log(p) //undefined
console.log(name) //这行能正常输出jack的原因是执行了Person()，其中的this默认指向了window，所以这里直接打印name有结果
console.log(p.name) //undefined










