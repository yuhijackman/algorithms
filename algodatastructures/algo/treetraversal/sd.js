// Print ASCII art using a capital letter "L".
// The given integer represents the width and height of a letter in ASCII art.
// Input: 4
// Output: 
// L
// L
// L
// LLLL
// Input: 2
// Output: 
// L
// LL
// Input: 3
// Output: 
// L
// L
// LLL
const SHAPE = 'L'
function solution(N) {
    let result = '';
    for (let i = 0; i < N * 2 - 1; i++) {
        if (i < N - 1) {
            result = `${result}${SHAPE}\n`;
        } else {
            result = `${result}${SHAPE}`;
        }
    }
    process.stdout.write(result);
}
solution(3);


// Check if the given array contains at least two unique elements which differ by 1.
// Input [1,4,4,5,6,8,9]
// Output true
// Input [1,4]
// Output false
// Input [1,4,4,5]
// Output false
function solution(A) {
  if (A.length < 2) return false;
  const filtered = [...new Set(A)].filter(num => num !== 1);
  const result = filtered.length >= 2 ? true : false;
  return result;
}

// Suppose we have a number n, we have to find the maximum number we can make by inserting 5 anywhere in the number.
// Input 826
// Output 8526
// Input 0
// Output 50
// Input -999
// Output -5999
const INSERT_DIGIT = 5;
function solution(N) {
    const nString = Math.abs(N).toString();
    const canditates = [];
    for (let i = 0; i < nString.length; i++) {
        let canditate = `${nString.slice(0,i)}${INSERT_DIGIT}${nString.slice(i)}`;
        if (N < 0) {
            canditate = -Math.abs(canditate);
        }
        canditates.push(canditate);
    }
    return Math.max(...canditates);
}