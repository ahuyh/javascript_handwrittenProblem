// 将一个数组扁平化
// 1.使用reduce方法
const flatten = (arr) => {
  return arr.reduce((prev, now) => {
    return prev.concat(Array.isArray(now) ? flatten(now) : now);
  }, []);
}

console.log(flatten([1,2,[3,4]]));

// 2.使用forEach
const flatten2 = (arr) => {
  let res = [];
  arr.forEach((item) => {
    if(Array.isArray(item)) {
      res = res.concat(flatten2(item));
    } else {
      res.push(item);
    }
  })
  return res;
}

console.log(flatten2([1,2,[3,4,5]]));




















