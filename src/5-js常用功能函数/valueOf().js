let a = {
  value: 0,
  // 注意这里不能用箭头函数的写法，因为箭头函数没有this
  valueOf: function() {
    // console.log(this);
    this.value++;
    return this.value;
  }
}

console.log(a==1 && a==2 && a==3);