// var twoNums = function(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         sum = arr[left] + arr[right];
//         if (sum == target) {
//             return [left, right];
//         } else if (sum < target) {
//             left += 1;
//         } else {
//             right +=1;
//         }
//     }
//     return false;
// }

// twoNums([1,2,3,4,7], 6);

var twoNums = function(arr, target) {
    let hash = {}
    for (let i = 0; i < arr.length;  i++) {
        let want = target - arr[i];
        if (want in hash) return [hash[want], i];
        hash[arr[i]] = i;
    }
}

twoNums([1,2,3,4,7], 6);