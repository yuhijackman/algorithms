// Selection Sort
// Go from the beginning and keep track of the smallest item in the list
// It does not matter if the list is nearly sorted or not
[8,5,2,6,9,3,1,4]// first loop smallest item is 8
[8,5,2,6,9,3,1,4]// second loop change the smallest item 8 to 5
[8,5,2,6,9,3,1,4]// ... loop change the smallest item 5 to 2 
[8,5,2,6,9,3,1,4]// ... loop smallest = 2
[8,5,2,6,9,3,1,4]// ... loop smallest = 2
[8,5,2,6,9,3,1,4]// ... loop smallest = 2
[8,5,2,6,9,3,1,4]// ... loop smallest = 1
[8,5,2,6,9,3,1,4]// ... loop smallest = 1. reach the end of the list
// Now swap the whatever value assigned to index 0 with smallest value
[1,5,2,6,9,3,8,4]
// And do it again. but this time Looping starts from index 1.
// Best O(n^2)
// Average O(n^2)
// Worst O(n^2)
function selectionSort(array) {
  if (array.length < 2) return array
  let smallest = 0
  let target = 1
  let count = 0
  while (target < array.length) {
    smallest = Math.min(array[smallest], array[target]) !== array[smallest] ? target : smallest
    target++
    if (target === array.length) {
      if (smallest === count) {
        break
      }
      let tmp = array[count]
      array[count] = array[smallest]
      array[smallest] = tmp
      smallest = count + 1
      target = smallest + 1
      count++
    }
  }
  return array
}
// function selectionSort(array) {
//   const length = array.length;
//   for(let i = 0; i < length; i++){
//     // set current index as minimum
//     let min = i;
//     let temp = array[i];
//     for(let j = i+1; j < length; j++){
//       if (array[j] < array[min]){
//         //update minimum if current is lower that what we had previously
//         min = j;
//       }
//     }
//     array[i] = array[min];
//     array[min] = temp;
//   }
//   return array;
// }

console.log(selectionSort([8,5,2,6,9,3,1,4]))
console.log(selectionSort([8,5]))
console.log(selectionSort([8]))
console.log(selectionSort([]))
console.log(selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))