function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false
  if (str1 === str2) return true
  let hash = {}
  for (letter of str1) {
    hash[letter] = (hash[letter] || 0) + 1
  }
  for (letter2 of str2) {
    if (hash[letter2] && hash[letter2] > 0) {
      hash[letter2]--
    } else {
      return false
    }
  }
  return true
}

console.log(validAnagrams('', '')) //true
console.log(validAnagrams('aaz', 'zza')) //false
console.log(validAnagrams('anagram', 'nagaram')) //true
console.log(validAnagrams('rat', 'car')) //false
console.log(validAnagrams('qwerty', 'qeywrt')) //true