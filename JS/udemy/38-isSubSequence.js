function isSubsequence(str1, str2) {
  if (str1.length === 0) return true
  if (str1.length > str2.length) return false
  let first = 0
  let second = 0
  
  while (first != str1.length || second < str2.length) {
      if (str1[first] === str2[second]) {
          first++
          second++
      } else {
          second++
      }
  }
  return str1.length === first
}
console.log(isSubsequence('hello', 'hello world')) // true
isSubsequence('sing', 'sting')// true
isSubsequence('abc', 'abracadabra')// false


// Recursive
function isSubsequenceRecursion(str1, str2) {
  if (str1.length === 0) return true
  if (str2.length === 0) return false
  if(str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequenceRecursion(str1, str2.slice(1))
}