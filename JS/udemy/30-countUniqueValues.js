function countUniqueValues(arr) {
  if (arr.length < 2) return  0
  let left = 0
  let right = 1
  let count = 0
  while (right < arr.length) {
    if (arr[left] != arr[right]) {
      left++
      arr[left] = arr[right]
    }
    right++
  }
  return left + 1
}

console.log(countUniqueValues([1,2,3,4,4,4,4,7,7,12,12,13])) // 7