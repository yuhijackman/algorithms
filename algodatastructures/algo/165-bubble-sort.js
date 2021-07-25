// O(N log N)
// Understand trade-offs = When to use and where to use
// // Useful when the list is nearly sorted
// Bubble sort == Bubbling up the highest number and then we go from the beginning
// Best O(n)
// Average O(n^2)
// Worst O(n^2)
[6,5,3,1,8,7,2,4];
// Compare 6 and 5 and swap
[5,6,3,1,8,7,2,4];
// Compare 6 and 3 and swap
[5,3,6,1,8,7,2,4];
// Compare 6 and 1 and swap
[5,3,1,6,8,7,2,4];
// Compare 6 and 8, stay
[5,3,1,6,8,7,2,4];
// Compare 8 and 7, swap
[5,3,1,6,7,8,2,4];
// Compare 8 and 2, swap
[5,3,1,6,7,2,8,4];
// Compare 8 and 4, swap
[5,3,1,6,7,2,4,8];
// go from the beginning until we have sorted list

function bubbleSort(array) {
  if (array.length < 1) return array
  let sorted = false
  let i = 0
  while (true) {
    let current = array[i]
    let next = array[i+1]
    if (current > next) {
      array[i] = next
      array[i+1] = current
      sorted = true
    }
    i++
    if (i > array.length - 2) {
      if (!sorted) {
        break
      }
      i = 0
      sorted = false
    }
  }
  return array
}
console.log(bubbleSort([6,5,3,1,8,7,2,4])) // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(bubbleSort([6,5])) // [5, 6]
console.log(bubbleSort([6])) // [6]
console.log(bubbleSort([2,6])) // [2, 6]
console.log(bubbleSort([])) // []

// function bubbleSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) { 
//       if(array[j] > array[j+1]) {
//         //Swap the numbers
//         let temp = array[j]
//         array[j] = array[j+1];
//         array[j+1] = temp;
//       }
//     }        
//   }
// }