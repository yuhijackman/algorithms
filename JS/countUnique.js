// Accept a sorted array of integers.
// Return the sum of unique numbers
// (* countUniqueValues: int array -> int; *)
function countUniqueValues(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++){
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j]
      }
    }
    return i+1;
}
console.log(countUniqueValues([1,1,1,1,2,2,3,4]));// 4
console.log(countUniqueValues([]));// 0
console.log(countUniqueValues([-2,-1,-1,0,1]));// 4
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));// 7
