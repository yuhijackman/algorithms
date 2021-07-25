function sumZero(arr) {
  if (arr.length < 2) return undefined
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum > 0) {
      right--
    } else if (sum < 0) {
      left++
    } else {
      return [arr[right], arr[left]]
    }
  }
  return undefined
}

console.log(sumZero([-3, -2, -1, 0, 4, 5, 6, 8]))