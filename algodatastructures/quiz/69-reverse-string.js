// 'Hi My Name is Andrei' should be 'ierdnA si yM iH'
function reverse(str) {
  // Params always String?
  if (!str || str.length < 2 || typeof str !== 'string') return str
  let newStr = ''
  for (let l of str) {
    newStr = l + newStr
  }
  return newStr
}
function reverse2(str) {
  // Params always String?
  if (!str || str.length < 2 || typeof str !== 'string') return str
  return str.split('').reverse().join('')
}
const reverse3 = str => str.split('').reverse().join('')
const reverse4 = str => [...str].reverse().join('')

console.log(reverse('Hi My Name is Andrei') === 'ierdnA si yM iH')