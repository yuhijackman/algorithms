function sameFrequency(num1,num2){
  let str1 = num1.toString()
  let str2 = num2.toString()
  let hash = {}

  if (str1.length !==  str2.length) return false
  for (let char1 of str1) {
    hash[char1] = (hash[char1] || 0) + 1
  }
  for (let char2 of str2) {
    if (!hash[char2]) {
      return false
    } else {
      hash[char2]--
    }
  }
  return true
}
sameFrequency(13,21);