// Insertion Sort
[6,5,3,1,8,7,2,4]
// Useful when the list is nearly sorted
// Best O(n)
// average O(n^2)
// worst O(n^2)
// Just compare one value with previous value , and swap if needed
// if you wanna find the appropriate place every time the value is added insertion sort is useful
[6,5,3,1,8,7,2,4]
[5,6,3,1,8,7,2,4]
[3,5,6,1,8,7,2,4]
[1,3,5,6,8,7,2,4]
[1,3,5,6,8,7,2,4]
[1,3,5,6,7,8,2,4]
[1,2,3,5,6,7,8,4]
[1,2,3,4,5,6,7,8]

// let's store 2 in the variable called tmp
// and set the (index of 2) - 1 (1 - 1 = 0) to variable called pointer
[1,2,9,76,0]
// 2 is less than 1 ? NO
// let's store 9 in the variable called tmp
// and add 1 to pointer (pointer = 1)
[1,2,9,76,0]
// 9 is less than 2 ? NO
// let's store 76 in the variable called tmp
// and add 1 to pointer (pointer = 2)
[1,2,9,76,0]
// 76 is less than 9 ? NO
// let's store 0 in the variable called tmp
// and add 1 to pointer (pointer = 3)
[1,2,9,76,0]
// 0 is less than 76 ? YES
  [1,2,9,76,76] // put76 to where the tmp value is and subtract 1 from pointer (3 - 1 =2)
  // 0 is less than 9 ? YES
    [1,2,9,9,76] 0 // put 9 to where pointer + 1 is and subtract 1 from pointer (2 - 1 =1)
    // 0 is less than 2 ? YES
      [1,2,2,9,76] 0 // put 2 to where pointer + 1 is and subtract 1 from pointer (1 - 1 =0)
      // 0 is less than 1 ? YES
        [1,1,2,9,76] // put 1 to where pointer + 1 is and subtract 1 from pointer (0 - 1 = -1)
        // And pointer is less than 0 so set tmp value to the index 0 position


function insertionSort(array) {
  if (array.length < 2) return array
  for (let i = 1; i < array.length; i++) {
    let current = array[i] // i = 4
    for (var j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j+1] = array[j]
    }
    array[j+1] = current
  }
  return array
}
console.log(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))