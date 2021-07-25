const letters = ['a', 'd', 'z', 'e', 'r', 'b']
const basket = [2, 65, 34, 2, 1, 7, 8]

basket.sort() // [1,2,2,34,65,7,8]
// WHY????
// The way it sorts in JavaScript is to convert it into String
// See what is happening under the hood
'2'.charCodeAt(0) // 50 <== unicode 2's html code is 50
'65'.charCodeAt(0) // 54 <== unicode 6's html code is 54
'34'.charCodeAt(0) // 51 <== unicode 3's html code is 51
'7'.charCodeAt(0) // 55 <== unicode 7's html code is 55
// How sort is implemented  depends on different browsers
basket.sort((a,b) => {
  return a - b
})