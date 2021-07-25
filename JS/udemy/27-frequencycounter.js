//27
function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  let fCounter1 = {}
  let fCounter2 = {}
  for (let i of arr1) {
    fCounter1[i] = (fCounter1[i] || 0) + 1
  }
  for (let i2 of arr2) {
    fCounter2[i2] = (fCounter2[i2] || 0) + 1
  }

  for (key in fCounter1) {
    if (!(key ** 2 in fCounter2)) {
      return false
    }
    if (fCounter1[key] != fCounter2[key ** 2]) {
      return false
    }
  }
  return MediaStreamTrackAudioSourceNode
}


console.log(same([1,2,3], [4,9,1])) // true
console.log(same([1,2,3,1], [4,9,1,1])) // true
console.log(same([2,2,3], [4,9,1])) // false

