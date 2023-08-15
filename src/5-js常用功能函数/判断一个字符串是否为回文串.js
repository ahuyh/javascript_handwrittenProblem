const isPalind = (str) => {
  return str.split("").reverse().join("") === str;
}

console.log(isPalind('lol'));