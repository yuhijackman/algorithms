function mergeSortedArrays(arr1, arr2) {
  let newArray = []
  let first = 0
  let second = 0
  if (arr1.length === 0) return arr2
  if (arr2.length === 0) return arr1
  while (first < arr1.length && second < arr2.length) {
    if (arr1[first] < arr2[second]) {
      newArray.push(arr1[first]) 
      first++
    } else if (arr2[second] < arr1[first]) {
      newArray.push(arr2[second])
      second++
    } else {
      newArray.push(arr1[first]) 
      newArray.push(arr2[second])
      first++
      second++
    }
  }
  if (arr1.length === first) {
    newArray = [...newArray, ...arr2.splice(second)]
  } else if (arr2.length === second) {
    newArray = [...newArray, ...arr1.splice(first)]
  }
  console.log(newArray)
  return newArray
}

mergeSortedArrays([0,3,4,31], [3,4,6,30]); // [0,3,3,4,4,6,30,31]
mergeSortedArrays([0,3,4,31], [4,6,30]); // [ 0, 3, 4, 4, 6, 30, 31 ]
mergeSortedArrays([0,3,4,31], [32]); // [ 0, 3, 4, 31, 32 ]
mergeSortedArrays([0], [3,20,32]); // [ 0, 3,20,32 ]
mergeSortedArrays([0,3], [3,20,32]); // [ 0,3, 3,20,32 ]
mergeSortedArrays([0,3], []); // [ 0,3]
// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12310382#overview