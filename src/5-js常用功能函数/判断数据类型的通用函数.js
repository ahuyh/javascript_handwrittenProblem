function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {
    return type;
  }
  return Object.prototype.toString.call(obj).replace(/^$/, '$1');
}

console.log(getType([]));