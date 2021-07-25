// Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items
function hasCommonItems(arr1, arr2) {
  const hash = {}
  arr1.forEach((item1) => {
    hash[item1] = item1
  })
  for(let item2 of arr2) {
    if (item2 in hash) {
      return true
    }
  }
  return false
}

console.log(hasCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'i']) === false)
console.log(hasCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'x']) === true)
// O((a + b)

// What I have to ask interviewers
// inputs are always array?
// Always return true/false
// What is the main goal?
// Time complexities? Space complexities
// Is there any size limit to the inputs? like always 5 items in the arrays?
// Think about how to break the function or cause error
// Ex) Can we assume always 2 parameters? always array?
//  Ask interviewers if i can improve. Readable?
function hasCommonItems2(array1, array2) {
  return array1.some(item => array2.includes(item))
}
// Present Naive Solutions first
// Nested loop O(a*b) not o(n ^ 2) cuz you get two inputs