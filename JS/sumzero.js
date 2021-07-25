// Accept a sorted array of integers and find the first pair where the sum is 0.
// Return an array that includes both values. 
// (* sumZero: int array -> int array; *)
function sumZero(ary) {
    if (!ary.length) return [];
    let left = 0;
    let right = ary.length - 1;

    while (left < right) {
        let sum = ary[left] + ary[right];
        if (sum == 0) return [ary[left], ary[right]];
        
        if (sum > 0) {
            right--;
        } else {
            left++
        }
    }

    
    return match;
}

// テスト
sumZero([-3, -2, -1, 0, 1, 2, 3])
sumZero([-2, 0, 1, 3]) // []
sumZero([1, 2, 3]) // []
sumZero([-1, 0, 1, 2, 3]) // []