const getRandom = (start, end) => {
  let len = end - start + 1;
  return Math.floor(len * Math.random()) + start;
}

let arr = [];

for(let i=0;i<10;i++) {
  arr.push(getRandom(10, 100));
}

arr.sort((a,b) => a-b);

console.log(arr);