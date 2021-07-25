// O(n log n)
// Merge Sort
// Quick Sort 
// Divide and Conquer

// Let's assume we have 8 elements of a list
[1,2,3,4,5,6,7,8]
// How many steps I need?
// 3 steps
[1,2,3,4,5,6,7,8]
[1,2,3,4] [5,6,7,8] // 1
[1,2] [3,4] [5,6] [7,8] // 2
[1] [2] [3] [4] [5] [6] [7] [8] // 3

// How about 32 items?
// 5 steps
//  32
// 16 16
// 8 8 8 8
// 4 4 4 4 4 4 4 4
// 2 2 2 2 2 2 2 2 2 2 2....
// 1 1 1 1 1 1 1 1 1 1.....

// O(log n) = two of what power gives us n === 2 ^ n
// two of what power gives us n means 2 ^ n = 32
// this is o(log n)
// when we have 8 elements, we take two and raise it three times to get eight elements
// 2 ^ 3 = 8
// when we have 32 elements, two times two times two times two times to the fifth power
// 2 ^ 5 = 32

// What about N log N where does it come from?
// Each time we decompose it we have o(n) comparisons when we are doing the merge
// O (log n) = decomposing
// O(n) = comparison's of two arrays
// O(n log n)


//O(n!)
//O(2 ^ n)
//O(n ^ 2)
//O(n log n)
//O(n)
//O(log n) O(1)

// Divide until we have one item in each array
[6,5,3,1,8,7,2,4]
[6,5,3,1] [8,7,2,4]
[6,5] [3,1] [8,7] [2,4]
[6] [5] [3] [1] [8] [7] [2] [4]

// Take first and second and compare the value and decide the order
[6] [5]
[5,6]
[3] [1]
[1,3]
[8] [7]
[7,8]
[2] [4]
[2,4]
// And again compare each arrays
[5,6]  [1,3]
// 5 and 1 which one comes first?
[5,6]  [3]
1
// 5 and 3 which one comes first?
[5,6]
[1,3]
// and 
[1,3,5,6]

// go the right side
[7,8]  [2,4]
// 7 and 2 which one comes first?
[7,8]  [4]
2
// 7 and 4 which one comes first?
[7,8]
[2,4]
// and 
[2,4,7,8]

// Finally compare the two arrays
[1,3,5,6] [2,4,7,8]
// 1 and 2 which one comes first?
[3,5,6] [2,4,7,8]
[1]
// 3 and 2 which one comes first?
[3,5,6] [4,7,8]
[1,2]
// 3 and 4 which one comes first?
[5,6] [4,7,8]
[1,2,3]
// 5 and 4 which one comes first?
[5,6] [7,8]
[1,2,3,4]
// 5 and 7 which one comes first?
[6] [7,8]
[1,2,3,4,5]
// 6 and 7 which one comes first?
[7,8]
[1,2,3,4,5,6]

[1,2,3,4,5,6,7,8]


function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  const middle = Math.ceil(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  let i = 0
  let j = 0
  let result = []
  while (i < left.length && j < right.length) { //O(n)
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j))
}
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
const answer = mergeSort(numbers)
console.log(answer)
