let line
function execUrl(str) {
  let s1 = str.split('//')[0]
  console.log('protocol=' + s1)
  let s2 = str.split('//')[1].split('/')[0].split(':')[0]
  console.log('hostname=' + s2)
  let s3 = str.split('//')[1].split('/')[0].split(':')[1]
  console.log('port=' + s3)
  let first = str.indexOf("/")
  let second = str.indexOf("?")
  if(second !== -1) {
    console.log('pathname=' + '/' + str.substring(first, second).split('/')[0])
  } else {
    console.log('pathname=' + str.substring(first))
  }
  
  let searchArr = str.substring(second+1).split("&").sort()
  searchArr.forEach((arr) => {
    let key = arr.split("=")[0]
    let val = arr.split("=")[1]
    console.log("search:" + key + "=" + val)
  })
}
// while((line = read_line())!=='') {
//   execUrl(line)
// }
let url = 'http://localhost:8080/hello-world?sponsor=dji&group=enterprise'
execUrl(url)


