// Pure
function collectOddValues(arr) {
  let newArr = []
  if (arr.length === 0) return newArr
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}
console.log(collectOddValues([1,2,3,4,5,6,7,8])) // 1,3,5,7

// Helper
// function collectOddValues(arr) {
//   let newArr = []
//   function inner (arr2) {
//     if (arr2.length === 0) return
//     if (arr2[0] % 2 !== 0) {
//       newArr.push(arr2[0])
//     }
//     inner(arr2.slice(1))
//   }
//   inner(arr)
//   return newArr
// }
// console.log(collectOddValues([1,2,3,4,5,6,7,8])) // 1,3,5,7

